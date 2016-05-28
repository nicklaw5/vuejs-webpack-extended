import { SET_TEST_TEXT } from '../mutation-types'

export const setTestText = (store, text) => {
	store.dispatch(SET_TEST_TEXT, text)
}