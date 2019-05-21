import sendSaga from "../utils/sendsSaga";

export const getMyCompanies = ({...state}) => sendSaga(`/api/me/companies`, 'get', state, {}, {timeout: 30 * 1000});

export const getMyStarredCompanies = ({...state}) => sendSaga(`/api/starred`, 'get', state, {}, {timeout: 30 * 1000});

export const starred = ({...state}) => sendSaga(`/api/starred/${state.cmpy_id}`, 'post', state, {}, {timeout: 30 * 1000});

export const bankList = ({...state}) => sendSaga(`/api/code/banks`, 'get', state, {}, {timeout: 30 * 1000});