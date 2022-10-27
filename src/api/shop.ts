export interface Product {
  id: number
  goodsName: string
  price: number
  inventory: number
}

const Products: Product[] = [
  { id: 1, goodsName: 'Airpods', price: 998, inventory: 3 },
  { id: 2, goodsName: 'MacBook2022', price: 12998, inventory: 5 },
  { id: 3, goodsName: 'iwatch 8', price: 3498, inventory: 2 },
  { id: 4, goodsName: 'ipad 2022', price: 4688, inventory: 6 },
]

//获取商品列表
export const getProducts = async () => {
  await wait(150)
  return Products
}

//随机商品结算
export const buyProducts = async () => {
  await wait(150)
  return Math.random() > 0.5
}

//模拟异步延迟
async function wait(params: number) {
  return new Promise((resolve) => setTimeout(resolve, params))
}
