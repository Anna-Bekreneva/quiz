import { axiosInstance } from '@/shared/api/axios-instance'

type Category = {
  [key: string]: string[]
}
export const categoriesAPI = {
  get() {
    return axiosInstance.get<Category>('v2/categori').then(res => res.data)

    // return {
    //   'Arts & Literature': ['arts', 'literature', 'arts_and_literature', 'novels'],
    //   'Film & TV': ['movies', 'film', 'film_and_tv'],
    //   'Food & Drink': ['food_and_drink', 'food', 'drink', 'alcohol'],
    //   'General Knowledge': ['general_knowledge'],
    //   Geography: ['geography'],
    //   History: ['history'],
    //   Music: ['music'],
    //   Science: ['science'],
    //   'Society & Culture': ['society_and_culture', 'society', 'culture'],
    //   'Sport & Leisure': ['sport_and_leisure', 'sports', 'sport', 'games'],
    // }
  },
}
