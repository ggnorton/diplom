let count = 0
export const buttonClick = text => ({
  type: 'BUTTON_CLICK',
  count: ++count,
  text
})

export const createSection = params => ({
	type: 'CREATE_SECTION',
	width: params.width,
	height: params.height,
	subSectionsCount: params.subSectionsCount
})

export const deleteSection = sectionId => ({
	type: 'DELETE_SECTION',
	sectionId: sectionId
})