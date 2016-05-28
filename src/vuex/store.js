import Vue from 'vue'
import Vuex from 'vuex'
import app from './app/store'
import createLogger from './mutation-logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	state: {},
	modules: {
		app,  // example module
	},
	strict: debug,
	middlewares: debug ? [createLogger()] : []
})
