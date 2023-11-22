<template>
  <div class="video-process-container">
    <h1>处理视频: {{ filename }}</h1>
    <video width="640" height="360" controls>
      <source :src="'http://127.0.0.1:8000/videos/' + filename" type="video/mp4">
      抱歉，您的浏览器不支持内嵌视频。
    </video>
    <el-button type="primary" @click="extractAudio">提取音频</el-button>

    <el-dialog title="处理中" v-if="isLoading" width="30%">
      <span>请稍候，正在提取音频...</span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    filename: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    async extractAudio() {
      this.isLoading = true; // 开始处理时设置 isLoading 为 true
      try {
        const response = await axios.post(`http://127.0.0.1:8000/extract-audio/${encodeURIComponent(this.filename)}`);
        console.log('音频文件保存在:', response.data.audio_file);
        // 处理成功后的逻辑
      } catch (error) {
        console.error('音频提取失败:', error);
        // 错误处理逻辑
      } finally {
        this.isLoading = false; // 处理结束后设置 isLoading 为 false
      }
    }
  }
};
</script>

<style>
.video-process-container {
  margin: 20px;
}
</style>
