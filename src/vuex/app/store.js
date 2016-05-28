import { set } from 'vue'
import { SET_TEST_TEXT } from '../mutation-types'

// initial module state
const state = {
	testText: 'This is the original testText from app store.'
}

// mutations
const mutations = {
	
	SET_TEST_TEXT (state, text) {
		set(state, 'testText', text)
	}
	
}

export default {
  state,
  mutations
}