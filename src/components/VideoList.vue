<template>
  <div class="video-list-container">
    <h1>Uploaded Videos</h1>
    <el-table
        :data="videos"
        style="width: 100%">
      <el-table-column
          prop="filename"
          label="视频文件名"
          width="180">
      </el-table-column>
      <el-table-column
          label="操作">
        <template v-slot="{ row }">
          <el-button
              type="danger"
              size="mini"
              @click="deleteVideo(row.id)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ElTable, ElTableColumn, ElButton, ElMessage } from 'element-plus';
import axios from 'axios';

export default {
  components: {
    ElTable,
    ElTableColumn,
    ElButton
  },
  data() {
    return {
      videos: [],
    };
  },
  created() {
    this.fetchVideos();
  },
  methods: {
    fetchVideos() {
      axios.get('http://127.0.0.1:8000/videos/')
          .then(response => {
            this.videos = response.data;
          })
          .catch(error => {
            console.error('Error:', error);
          });
    },
    deleteVideo(videoId) {
      axios.delete(`http://127.0.0.1:8000/delete-video/${videoId}`)
          .then(() => {
            ElMessage({
              type: 'success',
              message: '视频删除成功!'
            });
            this.fetchVideos(); // 重新加载视频列表
          })
          .catch(error => {
            ElMessage.error('视频删除失败');
            console.error('Error:', error);
          });
    }
  }
};
</script>

<style>
.video-list-container {
  margin: 20px;
}
</style>
