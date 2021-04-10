export const API_BASE_URL = 'baseURL/api/auth';
export const ACCESS_TOKEN = 'accessToken';

export const OAUTH2_REDIRECT_URI = 'baseURL/oauth2/redirect';

export const GOOGLE_AUTH_URL =
  API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;

export const FACEBOOK_AUTH_URL =
  API_BASE_URL +
  '/oauth2/authorize/facebook?redirect_uri=' +
  OAUTH2_REDIRECT_URI;

export const GITHUB_AUTH_URL =
  API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;

export const NAVER_AUTH_URL =
  API_BASE_URL + '/oauth2/authorize/naver?redirect_uri=' + OAUTH2_REDIRECT_URI;

export const REFRESH_TOKEN = API_BASE_URL + '/refresh';
export const LOGOUT = API_BASE_URL + '/logout';
