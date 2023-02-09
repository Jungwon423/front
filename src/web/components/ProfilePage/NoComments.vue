<template>
  <hr class="h-line5">
  <v-row class="text-center">
    <v-col>
      <div class="messages">
        <v-img
          width="80"
          height="80"
          src="@/assets/empty-comment.jpg"
        />
      </div>
      <div class="empty-review1">
        내가 작성한 댓글이 없습니다.
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'NoComments'
}
</script>