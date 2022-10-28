<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { useCarsStore } from '../store/cars'
const carsStore = useCarsStore()
const isBuy = async () => {
  await carsStore.clickBuy()
}
</script>

<template>
  <div style="display: inline-flex; width: 30%">
    <span
      style="
        line-height: 35px;
        font-weight: 600;
        color: #959595;
        margin-right: 5px;
      "
      >Total:
    </span>
    <el-input
      disabled
      style="font-size: 18px; font-weight: 600"
      :value="carsStore.totalPrice"
    ></el-input>
    <el-button type="success" style="margin-left: 10px" @click="isBuy" round
      >Buy</el-button
    >
  </div>
</template>
