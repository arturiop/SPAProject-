import { useDispatch, useSelector } from "react-redux";
import { changePage, getUsers } from "../../redux/usersPageReducer";
import React, { useEffect } from 'react';
import Preloader from "../common/Preloader/Preloader";
import { getPageTotal, getPageCount, getCurrentPage, getIsFetching, getFilter }
	from "../../redux/userSelect";
import Search from "../Search/Search";
import PageGenerator from "../common/PageGenerator/PageGenerator";
import { Users } from "./User/Users";

export type FilterType = {
	term: string,
	friend: boolean | null
}

type PropsType = {
	title: string
}

export const UsersPage: React.FC<PropsType> = (props) => {
	const isFetching = useSelector(getIsFetching)
	const currentPage = useSelector(getCurrentPage)
	const pageTotal = useSelector(getPageTotal)
	const pageCount = useSelector(getPageCount)
	const filter = useSelector(getFilter)
	const dispatch = useDispatch()
	const onSearchUsers = (filter: FilterType) => {
		dispatch(getUsers(1, pageCount, filter))
	}
	const onChangeNumb = (numb: number) => {
		dispatch(changePage(numb, pageCount, filter.term));
	}
	useEffect(() => {
		dispatch(getUsers(currentPage, pageCount, filter))
	}, [])
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