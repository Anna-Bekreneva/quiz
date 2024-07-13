import { categoriesAPI } from '@/shared/api/categories-api'
import { makeAutoObservable, runInAction } from 'mobx'
import { v1 } from 'uuid'

export type CategoryStore = {
  [key: string]: Category
}

type Category = {
  name: string
  values: string[]
}

class categoriesStore {
  categories: CategoryStore = {}
  error: string | undefined = undefined
  getCategories = async () => {
    try {
      this.isLoading = true
      const res = await categoriesAPI.get()

      const keys = Object.keys(res)

      if (res) {
        runInAction(() => {
          let newCategories: CategoryStore = {}

          for (let i = 0; i < keys.length; i++) {
            newCategories = { ...newCategories, [v1()]: { name: keys[i], values: res[keys[i]] } }
          }

          this.categories = { ...newCategories }
          this.isLoading = false
          this.error = undefined
        })
      }
    } catch (e) {
      runInAction(() => {
        this.error = (e as Error).message ?? 'Something error'
        this.isLoading = false
      })
    }
  }

  isLoading = false

  constructor() {
    makeAutoObservable(this)
  }
}

export default new categoriesStore()
