
import { unFollowTh } from "./usersPageReducer"
import { usersAPI } from "../api/usersApi";
import { APIResponseType } from "../api/api";
jest.mock("../api/usersApi")

const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;
const dispatchMock = jest.fn();
const stateMock = jest.fn();

beforeEach(() => {
	dispatchMock.mockClear();
	stateMock.mockClear();
	usersAPIMock.unfollow.mockClear();
})
const result: APIResponseType = {
	resultCode: 0,
	messages: [],
	data: {},
	fieldsErrors: [],
}

usersAPIMock.follow.mockReturnValue(Promise.resolve(result));

test('test thunk', async () => {
	const thunk = unFollowTh(1)

	await thunk(dispatchMock)
	expect(dispatchMock).toBeCalledTimes(3)
	// expect(dispatchMock).toHaveBeenNthCalledWith(1, action.toggleFetchingInProgres(true, 3))
	// expect(dispatchMock).toHaveBeenNthCalledWith(2, action.follow(3))
	// expect(dispatchMock).toHaveBeenNthCalledWith(2, action.toggleFetchingInProgres(false, 3))
})