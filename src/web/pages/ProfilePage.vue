<template>
  <ProfileHeader />
  <ProfileMain />
</template>
    
<script>
import ProfileMain from '@/web/components/ProfilePage/ProfileMain.vue';
import ProfileHeader from '@/web/components/ProfilePage/ProfileHeader.vue';

export default {
name: 'ProfilePage',
components : {
  ProfileHeader,
  ProfileMain,
},
}
</script>

<style scoped>
</style>