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

export const changeSection = (params) => ({
	type: 'CHANGE_SECTION',
	sectionId: params.sectionId,
	height: params.height,
	width: params.width
})

export const changeSubSection = (params) => ({
	type: 'CHANGE_SUB_SECTION',
	sectionId: params.sectionId,
	subSectionId: params.subSectionId,
	params: params
})