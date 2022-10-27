import { defineStore } from 'pinia'

// 1.定义容器
export const useMainStore = defineStore(
  'main', //容器的ID，必须唯一，将来Pinia会把所有的容器挂载到跟容器
  {
    /**
     * 类似于组件的data,用来存储全局状态的
     * 1.必须是函数：为了在服务器渲染的时候交叉请求导致数据状态污染
     * 2.必须是箭头函数：为了更好的TS类型推导
     */
    state: () => {
      return {
        countNum: 100,
        foo: 'bar',
        arr: [1, 2, 3],
      }
    },

    /**
     * 类似于组件的computed,用来封装计算属性，有缓存的功能
     */
    getters: {},

    /**
     * 类似于组件的methods,封装业务逻辑，修改state
     */
    actions: {
      changeState() {
        this.countNum++
        this.foo = 'hello'
        this.arr.push(4)
      },
    },
  }
)

//2.使用容器中的state

//3.修改state

//4.容器中的action的使用
