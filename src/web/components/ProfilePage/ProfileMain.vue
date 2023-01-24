<template>
  <div class="width-980">
    <div class="pa-10 profile-title-box">
      <div>
        <span class="py-12 profile-title">
          Kagu 서비스에 표시되는 내 프로필 정보
        </span>
        <span class="py-3 profile-title2">
          개인 정보 및 이를 관리하기 위한 옵션입니다.
        </span>
      </div>    
      <span><v-img
        width="400px"
        src="@/assets/profile/개인정보사진1.png"
      /></span>
    </div>
    <div class="default-info">
      <div class="pa-6 default-title">
        기본 정보
      </div>
      <div class="px-6">
        일부 정보가 다른 이용자에게 표시될 수 있습니다.
      </div>
      <div class="default-table">
        <div class="pa-6">
          <div class="default-table-title2">
            사진
          </div> <span class="px-6">사진을 추가하세요</span>
          <div class="default-image">
            <v-img
              src="@/assets/profile/account-badge-48.png"
            />
          </div>
          <hr class="h-line3">
          <div class="default-table-title">
            이름
          </div><span class="px-6">오동근</span>
          <hr class="h-line3">
          <div class="default-table-title">
            성별
          </div><span class="px-6">성별이 공개되지 않음</span>
          <span class="default-mdi"><v-icon
            class="px-12 icon1"
            color="black"
            size="xx-large"
          >
            mdi-arrow-right-bold-box-outline
          </v-icon>
          </span>
          <hr class="h-line3">
          <div class="default-table-title">
            별명
          </div><span class="px-6">앤비</span>
          <span class="default-mdi"><v-icon
            class="px-12 icon1"
            color="black"
            size="xx-large"
          >
            mdi-arrow-right-bold-box-outline
          </v-icon>
          </span>
        </div>
      </div>
    </div>
    <div class="my-12 default-info2">
      <div class="pa-6 default-title">
        연락처 정보
      </div>
      <div class="default-table">
        <div class="pa-5">
          <div class="default-table-title">
            이메일
          </div><span class="px-6">ohsimon0@naver.com</span>
          <hr class="h-line3">
          <div class="default-table-title">
            전화번호
          </div><span class="px-1">010-5689-xxxx</span>
        </div>
      </div>
    </div>
    <div>구현해야 할 사항 : 이미지 업로드</div>
    <div class="file-upload">
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
      >
      <button
        class="upload-button"
        :disabled="!selectedFile"
        @click="onUploadFile"
      >
        Upload file
      </button>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        selectedFile: "",
      };
    },
    methods: {
      onFileChange(e) {
        const selectedFile = e.target.files[0]; // accessing file
        this.selectedFile = selectedFile;
      },
      onUploadFile() {
        const formData = new FormData();
        formData.append("image", this.selectedFile);  // appending file
  
       // sending file to the backend
        axios
          .post("/upload", formData)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  };
</script>
<style scoped>
.profile-title-box{
    display:flex;
}
.profile-title{
    display:inline-block;
    font-size:38px;
    font-weight: 600;
    width:400px;
    height:80px;
    line-height: 40px;
}
.profile-title2{
    display:inline-block;
    font-size:20px;
    width:400px;
    height:80px;
    line-height: 40px;
}
.default-info{
    margin-left:40px;
    width:900px;
    height:450px;
    border-style:solid;
    border-width:2px;
    border-color:#E0E0E0;
    border-radius:8px;
    font-size:20px;
    color:#424242;
}
.default-info2{
    margin-left:40px;
    width:900px;
    height:250px;
    border-style:solid;
    border-width:2px;
    border-color:#E0E0E0;
    border-radius:8px;
    font-size:20px;
    color:#424242;
}
.default-title{
    font-size:30px;
    font-weight:600;
}
.default-table{
    display: flex;
}
.default-table-title{
    padding: 10px 20px 20px 20px;
    display: inline-block;
    font-weight:600;
}
.default-table-title2{
    padding: 10px 20px 40px 20px;
    display: inline-block;
    font-weight:600;
}
.default-mdi{
    float:right;
    cursor: pointer;
}
.default-image{
    position:relative;
    top:7%;
    margin-left:100px;
    display:inline-block;
    width:60px;
}
.h-line3{
  border-left: solid;
  border-width:0.5px;
  border-color:#E0E0E0;
  width:850px;
}
</style>