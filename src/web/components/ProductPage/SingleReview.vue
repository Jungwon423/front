<template>
  <div class="single-review">
    <div class="img-block">
      <v-avatar
        size="50"
        class="rounded-xl"
        color="#D7CCC8"
      />
      <!-- :image="imageUrl" -->
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
      <!-- v-if="name == $store.state.Login.id" -->
      <v-btn
        variant="tonal"
        class="mx-4 edit-btn"
      >
        수정
      </v-btn>
      <v-dialog
        v-model="deleteCommentDialog"
        max-width="500px"
        height="500px"
      >
        <template #activator="{ attrs }">
          <v-btn
            variant="tonal"
            class="mx-4 edit-btn"
            v-bind="attrs"
            @click="openDeleteDialog"
          >
            삭제
          </v-btn>
        </template>
      
        <delete-dialog
          :id="id"
          @close="closedeleteCommentDialog"
        />
      </v-dialog>
    </div>

    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
    >
      이미 추천/비추천을 한 제품입니다.
    </v-snackbar>

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
              v-if="goodList.includes($store.state.Login.id)"
              src="@/assets/thumbs/따봉2.png"
            />
            <v-img
              v-if="!goodList.includes($store.state.Login.id)"
              src="@/assets/thumbs/추천.png"
            />
          </div>
          <div class="ddabong-text">
            {{ goodList.length }}
          </div>
        </div>
      </template>
      <please-login-dialog
        @close="closeRecommendDialog"
      />
    </v-dialog>
    
    <v-dialog
      v-model="disRecommendDialog"
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
              v-if="badList.includes($store.state.Login.id)"
              src="@/assets/thumbs/우우2.png"
            />
            <v-img
              v-if="!badList.includes($store.state.Login.id)"
              src="@/assets/thumbs/비추천.png"
            />
          </div>
          <div class="ddabong-text">
            {{ badList.length }}
          </div>
        </div>
      </template>
      <please-login-dialog 
        @close="closeDisRecommendDialog"
      />
    </v-dialog>
  </div>
  <div class="user-content">
    <span class="user-text">{{ content }}</span>
  </div>
</template>

<script>
import jwtAxios from '@/library/jwtAxios'
import PleaseLoginDialog from './PleaseLoginDialog.vue';
import DeleteDialog from './DeleteDialog.vue';

export default {
  components: { 
    PleaseLoginDialog,
    DeleteDialog,
   },

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
      type: Array,
      default() {
        return []
      }
    },
    bad: {
      type: Array,
      default() {
        return []
      }
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
      goodList: this.good,
      badList: this.bad,

      empty1: this.goodClicked,
      empty2: this.badClicked,
      recommendDialog: false,
      disRecommendDialog: false,
      deleteCommentDialog:false,
      snackbar: false
    }
  },
  created() {
    console.log("goodlist = " + this.goodList)
    console.log("good = " + this.good)
  },
  methods:{
    recommend(){
      if (this.$store.getters['Login/logined'] && !this.goodList.includes(this.$store.state.Login.id) && !this.badList.includes(this.$store.state.Login.id)) {
        jwtAxios.post('/comment/' + this.id + '/recommend')
        .then((res) => {
          this.goodList = res.data['users']
        })
      }
      else if (this.$store.getters['Login/logined']) {
        this.snackbar = true
      }
      else {
          this.recommendDialog = true
      }
    },
    disrecommend(){
      if (this.$store.getters['Login/logined'] && !this.goodList.includes(this.$store.state.Login.id) && !this.badList.includes(this.$store.state.Login.id)) {
          jwtAxios.post('/comment/' + this.id + '/disrecommend')
          .then((res) => {
            this.badList = res.data['users']
          })
      }
      else if (this.$store.getters['Login/logined']) {
        this.snackbar = true
      }
      else {
          this.disRecommendDialog = true
      }
    },
    closeRecommendDialog() {
      this.recommendDialog = false
    },

    closeDisRecommendDialog() {
      this.disRecommendDialog = false
    },

    closedeleteCommentDialog() {
      this.deleteCommentDialog = false
    },
    openDeleteDialog(){
      this.deleteCommentDialog = true
    },
  }
}
</script>

<style scoped>
.single-review{
  display:flex;
  width:980px;
  padding-top:10px;
}
.img-block{
  display:flex;
  height:60px;
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
  margin-top:8px;
  margin-left:12px;
  font-size:12px;
  font-weight: 500;
  display:block;
}
.user-content{
  width :980px;
  padding-bottom:10px;
  position:relative;
  border-bottom:solid;
  border-width:1px;
  border-color:#E0E0E0;
}
.user-text{
  position: relative;
  left:2%;
  bottom:500%;
}

.ddabong-card10{
  position:absolute;
  margin-top:10px;
  margin-left:800px;
  float:inline-end;
  display:flex;
  width:100px;
}
.ddabong-card11{
  position:absolute;
  margin-top:10px;
  margin-left:850px;
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