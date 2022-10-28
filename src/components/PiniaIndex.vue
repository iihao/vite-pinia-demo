<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useShopStore } from '../store/products'
import { useCarsStore } from '../store/cars'
import { Product } from '../api/shop'

defineProps<{ titleA: string; titleB: string }>()

const shopStore = useShopStore()
const carsStore = useCarsStore()

shopStore.loadAllProduct() //加载所有数据
</script>

<template>
  <div>
    <h2>{{ titleA }}</h2>
    <el-table
      style="width: 100%; text-align: center"
      table-layout="auto"
      :data="shopStore.allProduct"
    >
      <el-table-column prop="goodsName" label="GoodsName" width="200" />
      <el-table-column prop="price" label="Price" width="150" />
      <el-table-column prop="inventory" label="Inventory" width="150" />
      <el-table-column fixed="right" label="Action" width="120">
        <template #default="scope">
          <el-button
            type="info"
            text
            bg
            @click.prevent="carsStore.addProduct(scope.row)"
            :disabled="!scope.row.inventory"
          >
            +
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <h2>{{ titleB }}</h2>
    <el-table
      v-if="carsStore.shopCars"
      style="width: 100%"
      table-layout="auto"
      :data="carsStore.shopCars"
    >
      <el-table-column prop="goodsName" label="GoodsName" width="200" />
      <el-table-column prop="price" label="Price" width="150" />
      <el-table-column prop="shopCount" label="Quantity" width="150" />
      <el-table-column fixed="right" label="Action" width="120">
        <template #default="scope">
          <el-button
            type="info"
            :disabled="!scope.row.shopCount"
            text
            bg
            @click.prevent="carsStore.reduceProduct(scope.row)"
          >
            -
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
::v-deep .el-table__inner-wrapper::before {
  width: auto;
}
::v-deep .el-table__empty-block {
  width: auto !important;
}
</style>
