import { ActionTree } from 'vuex'
import axios from 'axios'
import { ProfileState , User } from './types'
import { RootState } from '../types'

export const actions:ActionTree<ProfileState,RootState> = {
  fetchData({ commit }):any{
    axios.get('/user/info').then(res=>{
      const payload:User = res && res.data
      console.log(payload)
      commit('profileLoaded',payload)
    }).catch(err=>{
      console.log(err)
      commit('profileError')
    })
  }
}
