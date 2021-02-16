
export const getUser = (state) => {
	return state.users.userData;
}
export const getPageTotal = (state) => {
	return state.users.pageTotal;
}
export const getPageCount = (state) => {
	return state.users.pageCount;
}
export const getCurrentPage = (state) => {
	return state.users.currentPage;
}
export const getIsFetching = (state) => {
	return state.users.isFetching;
}
export const getToggleFetching = (state) => {
	return state.users.toggleFetching;
}


