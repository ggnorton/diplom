const reducer = function(state = [], action) {
	switch(action.type) {
		case 'BUTTON_CLICK': 
			return Object.assign({}, state, {count: action.count})
		case 'CREATE_SECTION':
			let lastId = state.length ? state[state.length - 1].sectionId + 1 : 0
			let newState = state.slice()
			let subSections = [];
			for (let i = 0; i < action.subSectionsCount; i++) {
				subSections.push({
					sectionId: lastId,
					subSectionId: i,
					'background-color': 'white',
					'text': ""
				})
			}

			newState.push({
				sectionId: lastId,
				width: action.width,
				height: action.height,
				subSectionsCount: action.subSectionsCount,
				subSectionsWidth: action.width / action.subSectionsCount,
				subSections: subSections
			})
			return newState

		case 'DELETE_SECTION':
			let newState1 = state.slice()
			let deletingSectionIndex = -1
			newState1.forEach((item, index) => {
				if (item.sectionId == action.sectionId) 
					deletingSectionIndex = index 
			})
			if (deletingSectionIndex != -1)
				newState1.splice(deletingSectionIndex, 1)
			debugger
			return newState1
		default:
      		return state
	}
}

export default reducer