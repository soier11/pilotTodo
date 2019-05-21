import sendSaga from '../utils/sendsSaga';

export const getCountryCode = ({...state}) => sendSaga(`/api/countries`, 'get', state, {}, {timeout: 30 * 1000});

export const getClientType = ({...state}) => sendSaga(`/api/code/client-type`, 'get', state, {}, {timeout: 30 * 1000});

export const getContactType = ({...state}) => sendSaga(`/api/code/contact-type`, 'get', state, {}, {timeout: 30 * 1000});

export const getAccountCode = ({...state}) => sendSaga(`/api/code/accounts`, 'get', state, {}, {timeout: 30 * 1000});