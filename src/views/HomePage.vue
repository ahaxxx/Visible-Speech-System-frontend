<template>
  <div>
    <video-upload @upload-success="fetchVideos" />
    <video-list ref="videoList" />
  </div>
</template>

<script>
import VideoUpload from '../components/VideoUpload.vue';
import VideoList from '../components/VideoList.vue';

export default {
  components: {
    VideoUpload,
    VideoList
  },
  methods: {
    fetchVideos() {
      this.$refs.videoList.fetchVideos();
    }
  }
};
</script>