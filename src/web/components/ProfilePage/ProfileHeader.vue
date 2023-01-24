<template>
  <div class="width-980">
    <div class="pa-10 flex-titlebar">
      <router-link
        to="/"
        class="decoration-none"
      >
        <v-avatar
          color="white"
          size="56"
        >
          <v-img
            max-height="100"
            max-width="100"
            src="@/assets/kamua.png"
          />
        </v-avatar>
        <span>
          Kagu
        </span>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.flex-titlebar{
    border-style:solid;
    border-color:#E0E0E0;
    border-width:0px 0px 1px 0px;
}
</style>