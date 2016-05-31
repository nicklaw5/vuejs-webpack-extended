import { SET_TEST_TEXT } from '../mutation-types'

export const setTestText = ({ dispatch }, text) => {
	dispatch(SET_TEST_TEXT, text)
}