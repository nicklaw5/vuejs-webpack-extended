import { set } from 'vue'
import * as types from '../mutation-types'

// initial module state
const state = {
	testText: 'testing data response form app store.'
}

// mutations
const mutations = {
	
	[types.SET_TEST_TEXT] (state, text) {
		set(state, 'testText', text)
	}
}

export default {
  state,
  mutations
}
