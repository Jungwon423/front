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
    ProfileMain,
    ProfileHeader,
},
}
</script>

<style scoped>
</style>