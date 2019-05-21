import {GET_BANK_LIST, STARRED_COMPANY, GET_MENU, GET_MY_COMPANIES, GET_COUNTRY_CODE, GET_CLIENT_TYPE, GET_ACCOUNT_CODE, RESET_PROPERTIES} from '../def/LayoutType'

export const getMenu = cmpy_id => ({
  type: GET_MENU, cmpy_id
});

export const getMyCompanies = () => ({
  type: GET_MY_COMPANIES
});

export const getCountryCode = () => ({
  type: GET_COUNTRY_CODE
});

export const getAccountCode = () => ({
  type: GET_ACCOUNT_CODE
});

export const getClientType = () => ({
  type: GET_CLIENT_TYPE
});

export const starredCompany = (id, name) => ({
  type: STARRED_COMPANY, id, name
})

export const bankLisst = () => ({
  type: GET_BANK_LIST
})

export const resetProperties = () => ({
  type: RESET_PROPERTIES
})