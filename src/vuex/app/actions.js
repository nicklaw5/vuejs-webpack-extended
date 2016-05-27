import * as types from '../mutation-types'

export const setTestText = (store, text) => {
	store.dispatch(types.SET_TEST_TEXT, text)
}