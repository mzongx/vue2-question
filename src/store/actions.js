import ajax from '../libs/ajax'

export default {
	//下一题
	addNum({ commit, state }, obj) {
		commit('REMBER_ANSWER', obj)
		if (state.itemNum < state.itemDetail.length) {
			commit('ADD_ITEMNUM', {
				num: 1
			})
		}
	},

	getData({ commit, state }) {
		ajax('GET', 'http://operating-activities.putao.com/happyfriday?active_topic_id=4').
		then(res => {
			commit('GET_DATA', {
				res
			})
		})
	},

	initializeData({ commit }) {
		commit('INITIALIZE_DATA')
	}
}