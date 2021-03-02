import { useDispatch, useSelector } from "react-redux";
import { changePage, getUsers } from "../../redux/usersPageReducer";
import React, { useEffect } from 'react';
import Preloader from "../common/Preloader/Preloader";
import { getPageTotal, getPageCount, getCurrentPage, getIsFetching, getFilter }
	from "../../redux/userSelect";
import Search from "../Search/Search";
import PageGenerator from "../common/PageGenerator/PageGenerator";
import { Users } from "./User/Users";
import { useHistory } from "react-router-dom";
import Qs from "qs";

export type FilterType = {
	term: string,
	friend: boolean | null
}
type PropsType = {
	title: string
}
type QueryParamsType = { term?: string, friend?: string, page?: string }

export const UsersPage: React.FC<PropsType> = (props) => {
	const isFetching = useSelector(getIsFetching)
	const currentPage = useSelector(getCurrentPage)
	const pageTotal = useSelector(getPageTotal)
	const pageCount = useSelector(getPageCount)
	const filter = useSelector(getFilter)
	const dispatch = useDispatch()
	const history = useHistory()

	useEffect(() => {
		const parsed = Qs.parse(history.location.search.substr(1)) as QueryParamsType
		let actualPage = currentPage
		let actualFilter = filter
		switch (parsed.friend) {
			case "null":
				actualFilter = { ...actualFilter, friend: null }
				break
			case "true":
				actualFilter = { ...actualFilter, friend: true }
				break
			case "false":
				actualFilter = { ...actualFilter, friend: false }
				break
		}
		if (!!parsed.page) actualPage = Number(parsed.page)
		if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string }

		dispatch(getUsers(actualPage, pageCount, actualFilter))
	}, [])

	const onSearchUsers = (filter: FilterType) => {

		dispatch(getUsers(currentPage, pageCount, filter))
	}
	const onChangeNumb = (currentPage: number) => {
		dispatch(changePage(currentPage, pageCount, filter.term));
	}
	useEffect(() => {
		const query: QueryParamsType = {}

		if (!!filter.term) query.term = filter.term
		if (filter.friend !== null) query.friend = String(filter.friend)
		if (currentPage !== 1) query.page = String(currentPage)
		history.push({
			pathname: '/find/users',
			search: Qs.stringify(query)
			// `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
		})
	}, [filter, currentPage])

	return <>
		{isFetching ? <Preloader /> : null}
		{props.title}
		<Search searchUsers={onSearchUsers} />
		<PageGenerator pageTotal={pageTotal} pageCount={pageCount}
			currentPage={currentPage} onChangeNumb={onChangeNumb} />
		<Users />
	</>
}




	// <div>
			// 	<button onClick={getUserFriends}>GetFiends</button>
		// </div>