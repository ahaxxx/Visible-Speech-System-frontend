<template>
  <div class="upload-container">
    <h1>Upload Video</h1>
    <el-upload
        class="upload-demo"
        ref="upload"
        action="http://127.0.0.1:8000/upload-video/"
        :on-success="handleSuccess"
        :on-error="handleError"
        :auto-upload="false"
        accept="video/*">
      <template v-slot:trigger>
        <el-button type="primary">选择视频文件</el-button>
      </template>
      <el-button type="success" @click="submitUpload">上传视频</el-button>
      <div class="el-upload__tip">只能上传视频文件</div>
    </el-upload>
  </div>
</template>

<script>
import { ElUpload, ElButton, ElMessage } from 'element-plus';

export default {
  components: {
    ElUpload,
    ElButton
  },
  methods: {

    handleSuccess() {
      ElMessage({
        message: '视频上传成功',
        type: 'success'
      });
      this.$emit('upload-success'); // 发出上传成功的事件
    },
    handleError() {
      ElMessage.error('视频上传失败');
    },
    submitUpload() {
      this.$refs.upload.submit();
    }
  }
};
</script>

<style>
.upload-container {
  margin: 20px;
}
</style>
