<template>
  <div class="video-process-container">
    <h1>处理视频: {{ filename }}</h1>
    <video width="640" height="360" controls>
      <source :src="'http://127.0.0.1:8000/videos/' + filename" type="video/mp4">
      抱歉，您的浏览器不支持内嵌视频。
    </video>
    <!-- 其他功能按钮和逻辑 -->
  </div>
</template>

<script>
export default {
  props: {
    filename: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.video-process-container {
  margin: 20px;
}
</style>
