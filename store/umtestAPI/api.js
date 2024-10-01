import axios from "axios"
const umtestAPI = axios.create({
  baseURL: "https://umtest33-49543.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return umtestAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return umtestAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return umtestAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_uvbdhd_list(payload) {
  return umtestAPI.get(`/api/v1/uvbdhd/`)
}
function api_v1_uvbdhd_create(payload) {
  return umtestAPI.post(`/api/v1/uvbdhd/`, payload)
}
function api_v1_uvbdhd_retrieve(payload) {
  return umtestAPI.get(`/api/v1/uvbdhd/${payload.id}/`)
}
function api_v1_uvbdhd_update(payload) {
  return umtestAPI.put(`/api/v1/uvbdhd/${payload.id}/`, payload)
}
function api_v1_uvbdhd_partial_update(payload) {
  return umtestAPI.patch(`/api/v1/uvbdhd/${payload.id}/`, payload)
}
function api_v1_uvbdhd_destroy(payload) {
  return umtestAPI.delete(`/api/v1/uvbdhd/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return umtestAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return umtestAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return umtestAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return umtestAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return umtestAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return umtestAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return umtestAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return umtestAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return umtestAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return umtestAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return umtestAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_uvbdhd_list,
  api_v1_uvbdhd_create,
  api_v1_uvbdhd_retrieve,
  api_v1_uvbdhd_update,
  api_v1_uvbdhd_partial_update,
  api_v1_uvbdhd_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
