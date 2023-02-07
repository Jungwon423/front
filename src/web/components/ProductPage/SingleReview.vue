<template>
  <div
    style="display:inline"
    class="pa-8"
  >
    <div style="display:flex">
      <div class="img-block">
        <v-avatar
          size="50"
          class="rounded-xl"
          color="wheat"
          :image="imageUrl"
        />
      </div>
      <div class="user-block">
        <div class="user-name">
          {{ name }}
        </div>
        <div class="user-id">
          @{{ name }}
        </div>
      </div>  
      <div>
        <v-btn
          variant="tonal"
          class="mx-4 edit-btn"
        >
          수정
        </v-btn>
      </div>

      <v-dialog
        v-model="recommendDialog"
        max-width="500px"
        height="500px"
      >
        <template #activator="{ attrs }">
          <div
            class="ddabong-card10"
            v-bind="attrs"
            @click.stop="recommend()"
          >
            <div class="ddabong">
              <v-img
                v-if="!empty1"
                src="@/assets/thumbs/따봉2.png"
              />
              <v-img
                v-if="empty1"
                src="@/assets/thumbs/추천.png"
              />
            </div>
            <div class="ddabong-text">
              {{ good }}
            </div>
          </div>
        </template>
        <please-login-dialog />
      </v-dialog>
    
      <v-dialog
        v-model="disrecommendDialog"
        max-width="500px"
        height="500px"
      >
        <template #activator="{ attrs }">
          <div
            class="ddabong-card11"
            v-bind="attrs"
            @click.stop="disrecommend()"
          >
            <div class="ddabong">
              <v-img
                v-if="!empty2"
                src="@/assets/thumbs/우우2.png"
              />
              <v-img
                v-if="empty2"
                src="@/assets/thumbs/비추천.png"
              />
            </div>
            <div class="ddabong-text">
              {{ bad }}
            </div>
          </div>
        </template>
        <please-login-dialog />
      </v-dialog>
    </div>
    <div class="user-content py-4">
      {{ content }}
    </div>
  </div>
</template>

<script>
import jwtAxios from '@/library/jwtAxios'
import PleaseLoginDialog from './PleaseLoginDialog.vue';

export default {
  components: { PleaseLoginDialog },

  props: {
    imageUrl : {
        type: String,
      default: '',
    },
    name: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ""
    },
    good: {
      type: Number,
      default: 0
    },
    bad: {
      type: Number,
      default: 0
    },
    goodClicked: {
      type: Boolean,
        default: false
    },
    badClicked: {
      type: Boolean,
      default: false
    },
    timestamp: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      empty1: this.goodClicked,
      empty2: this.badClicked,
      recommendDialog: false,
      disrecommendDialog: false
    }
  },
  methods:{
  recommend(){
    if (this.$store.getters['Login/logined']) {
        this.empty1 = !this.empty1;
        jwtAxios.post('/comment/' + this.id + '/recommend')
    }
    else {
        this.recommendDialog = true
    }
  },
  disrecommend(){
    if (this.$store.getters['Login/logined']) {
        this.empty2 = !this.empty2;
        jwtAxios.post('/comment/' + this.id + '/disrecommend')
    }
    else {
        this.disrecommendDialog = true
    }
  },
  }
}
</script>

<style scoped>
.img-block{
  display:flex;
  height:70px;
}
.user-name{
  font-size:14px;
  font-weight:600;
}
.user-id{
  font-size:12px;
  color:#B0BEC5;
}
.edit-btn{
  position:relative;
  top:10%;
  left:10%;
  font-size:13px;
  font-weight:600;
}
.user-block{
  position:relative;
  height:70px;
  margin-top:8px;
  margin-left:12px;
  font-size:12px;
  font-weight: 500;
  display:block;
}
.user-content{
  width :980px;
  border-bottom:solid;
  border-width:1px;
  border-color:#E0E0E0;
}

.ddabong-card10{
  text-align:end;
  position:relative;
  margin-top:10px;
  left:65%;
  display:flex;
  width:100px;
}
.ddabong-card11{
  text-align:end;
  position:relative;
  margin-top:10px;
  left:60%;
  display:flex;
  width:100px;
}
.ddabong{
  display: inline-block;
  width:30px;
} 
.ddabong-text{
  text-align: center;
  margin:3px;
}
</style>