<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import PiniaIndex from './components/PiniaIndex.vue'
import PiniaLogo from './components/PiniaLogo.vue'
import PiniaBuy from './components/PiniaBuy.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="60%">
        <PiniaIndex titleA="Product List" titleB="Shopping cart"
      /></el-aside>
      <el-main width="40%"> <PiniaLogo /></el-main>
    </el-container>
    <el-footer><PiniaBuy /></el-footer>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.common-layout {
  width: 100%;
  height: 100%;
}
</style>
