import { AppStateType } from "./reduxStore";

export const getUser = (state: AppStateType) => {
	return state.users.userData;
}
export const getPageTotal = (state: AppStateType) => {
	return state.users.pageTotal;
}
export const getPageCount = (state: AppStateType) => {
	return state.users.pageCount;
}
export const getCurrentPage = (state: AppStateType) => {
	return state.users.currentPage;
}
export const getIsFetching = (state: AppStateType) => {
	return state.users.isFetching;
}
export const getToggleFetching = (state: AppStateType) => {
	return state.users.toggleFetching;
}


