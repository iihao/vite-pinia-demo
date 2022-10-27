import { defineStore } from 'pinia'
import { Product } from '../api/shop'
import { useShopStore } from '../store/products'

type shopCar = {
  shopCount: number
} & Omit<Product, 'inventory'>

export const useCarsStore = defineStore('cars', {
  state: () => {
    return {
      shopCars: [] as shopCar[],
    }
  },
  getters: {
    totalPrice(state) {
      return state.shopCars.reduce((total, item) => {
        return total + item.shopCount * item.price
      }, 0)
    },
  },
  actions: {
    async addProduct(product: Product) {
      console.log(product)
      //判断商品是否有库存
      if (product.inventory < 1) {
        return
      }
      //判断购物车是否存在商品
      const carsItem = this.shopCars.find((item) => item.id === product.id)
      if (!carsItem) {
        this.shopCars.push({
          id: product.id,
          goodsName: product.goodsName,
          price: product.price,
          shopCount: 1,
        })
      } else {
        carsItem.shopCount++
      }
      const shopStore = useShopStore()
      await shopStore.deleteProduct(product.id)
    },

    async reduceProduct(product: Product) {
      console.log(product)
      //判断购物车是否存在商品
      const carsItem = this.shopCars.find((item) => item.id === product.id)
      //存在商品则减少购物车商品数量
      if (carsItem) {
        if (carsItem.shopCount > 0) {
          carsItem.shopCount--
        } else {
        }
      }
      const shopStore = useShopStore()
      //增加库存数量
      await shopStore.addProduct(product.id)
    },
  },
})
