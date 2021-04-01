export const API_BASE_URL = 'http://3.34.182.63/:8443';

export const ACCESS_TOKEN = 'accessToken';

export const OAUTH2_REDIRECT_URI = 'http://3.34.182.63:8443/oauth2/redirect';

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
