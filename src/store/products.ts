import { defineStore } from 'pinia'
import { getProducts, Product } from '../api/shop'

export const useShopStore = defineStore('shop', {
  state: () => {
    return {
      allProduct: [] as Product[],
    }
  },
  getters: {},
  actions: {
    async loadAllProduct() {
      const ret = await getProducts()
      this.allProduct = ret
    },
    async deleteProduct(productId: number) {
      const val = this.allProduct.find((val) => val.id === productId)
      if (val) {
        if (val.inventory > 0) {
          val.inventory--
        }
        return
      }
    },
    async addProduct(productId: number) {
      const val = this.allProduct.find((val) => val.id === productId)
      if (val) {
        val.inventory++
      }
    },
  },
})
