import Vue from 'vue';
import Vuex , { StoreOptions } from 'vuex';
import { RootState } from './types';
import { profile } from './profile/index';

Vue.use(Vuex);

console.log(profile)

const store:StoreOptions<RootState> = {
  state : {
    version : '1.0.0'
  },
  modules : {
    profile
  },
};

console.log(store)

export default new Vuex.Store<RootState>(store)