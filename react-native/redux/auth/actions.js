import * as types from './types'
import { StatusBar, Platform } from 'react-native'

export const setIsFetching = isFetching => {
  Platform.OS === 'ios' && StatusBar.setNetworkActivityIndicatorVisible(isFetching)
  return { type: types.SET_IS_FETCHING, payload: isFetching }
}

export const setToken = value => ({
  type: types.SET_AUTH_TOKEN,
  payload: value
})

export const logOut = () => ({
  type: types.LOG_OUT
})

export const setUid = value => ({
  type: types.SET_UID,
  payload: value
})

export const setEmail = value => ({
  type: types.SET_EMAIL,
  payload: value
})

export const setProfile = value => ({
  type: types.SET_PROFILE,
  payload: value
})

export const setId = value => ({
  type: types.SET_ID,
  payload: value
})

export const setLanguaje = value => ({
  type: types.SET_LANGUAJE,
  payload: value
})

export const setSesionLoaded = value => ({
  type: types.SET_SESION_LOADED,
  payload: value
})
