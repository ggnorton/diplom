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
					'text': lastId + " " + i,
					'color': 'black',
					'padding': '0 0',
					'border': 'none',
					'border-radius': '0px'
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
			return newState1
		case 'CHANGE_SUB_SECTION':
			let newState2 = state.slice()
			let changingSectionIndex = -1
			newState2.forEach((item, index) => {
				if (item.sectionId == action.sectionId) 
					changingSectionIndex = index 
			})
			let changingSubSectionIndex = -1
			newState2[changingSectionIndex].subSections.forEach((item, index) => {
				if (item.subSectionId == action.subSectionId) 
					changingSubSectionIndex = index 
			})
			let cssec = newState2[changingSectionIndex].subSections[changingSubSectionIndex]
			cssec['background-color'] = action.params['background-color'] || cssec['background-color']
			newState2[changingSectionIndex].subSections.splice(changingSubSectionIndex, 1, cssec)
			return newState2

		case 'CHANGE_SECTION':
			let newState3 = state.slice()
			let changingSectionIndex1 = -1
			newState3.forEach((item, index) => {
				if (item.sectionId == action.sectionId) 
					changingSectionIndex1 = index 
			})
			newState3[changingSectionIndex1].height = action.height
			newState3[changingSectionIndex1].width = action.width
			return newState3
		case 'LOAD_STORE':
			debugger
			return localStorage ['serverless_crm']  && 
					typeof JSON.parse(localStorage['serverless_crm']) === 'object' ?
					JSON.parse(localStorage['serverless_crm']) : store
		default:
      		return state
	}
}

export default reducer