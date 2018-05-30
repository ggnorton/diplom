const reducer = function(state = {}, action) {
	switch(action.type) {
		case 'BUTTON_CLICK': 
			return Object.assign({}, state, {count: action.count})
		default:
      		return state
	}
}

export default reducer