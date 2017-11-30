import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'


// import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';
import state from './state';

Vue.use(Vuex);


export default new Vuex.Store({
    getters,
    mutations,
    state,
    strict: process.env.NODE_ENV !== 'production',
    plugins: (process.env.NODE_ENV !== 'production') ? [createLogger()] : []
})