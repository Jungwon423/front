<template>
  <ProfileHeader />
  <ProfileMain />
</template>
    
<script>
import ProfileMain from '@/mobile/components/ProfilePage/ProfileMain.vue';
import ProfileHeader from '@/mobile/components/ProfilePage/ProfileHeader.vue';

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