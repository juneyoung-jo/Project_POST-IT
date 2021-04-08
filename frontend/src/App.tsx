// Fragment는 불필요한 DOM node의 생성을 막기때문에 메모리를 적게사용한다.
// css 메커니즘에서 특별한 부모 자식관계를 가지고 있는 flexbox나 gridbox관계에 있는 엘리먼트 사이에 <div>를 추가하게 되면 레이아웃을 유지하기 어려워지므로 fragment를 사용하면 된다.
import React, { ReactElement, Suspense, useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  Redirect,
  Link,
} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container } from '@material-ui/core';
import OAuth2RedirectHandler from 'api/oauth2';
// import { getCurrentUser } from 'api/user';
import { ACCESS_TOKEN } from 'config/config';
import AOS from 'aos';
// url 관리
import axios from 'axios';
import { LOGOUT } from 'config/config';
import { API_BASE_URL } from 'config/config';

// styles
import GlobalStyle from 'assets/styles/GlobalStyle';
import GlobalFonts from 'assets/fonts/fonts';

// theme
import theme from 'assets/theme/index';
import { ThemeProvider } from 'styled-components';

// components
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import PrivateRoute from 'components/common/PrivateRoute';
import NotFound from 'components/common/NotFound';

// pages
import Home from 'pages/Home';
import Report from 'pages/Report';
import Contents from 'pages/Contents';
import MyFolder from 'pages/MyFolder';
import Profile from 'pages/Profile';

// recoil
import { RecoilRoot, useRecoilState, selector } from 'recoil';
import { tokenState } from 'index';
import { setgid } from 'node:process';

// swal
import swal from 'sweetalert';

AOS.init();

const App: React.FC = (): ReactElement => {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useRecoilState(tokenState);

  let history = useHistory();

  const request = (options: any) => {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options).then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      }),
    );
  };

  function getCurrentUser() {
    if (!token) {
      return Promise.reject('No access token set.');
    }
    return request({
      url: API_BASE_URL + '/user/me',
      method: 'GET',
    });
  }

  function loadCurrentlyLoggedInUser() {
    setLoading(true);
    // getCurrent request
    getCurrentUser()
      .then((response) => {
        // console.log(response);
        setCurrentUser(response), setAuthenticated(true), setLoading(false);

        localStorage.setItem('name', response.data.name);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('imageUrl', response.data.imageUrl);

        if (response.data.youtubeList.length != 0) {
          localStorage.setItem('youtubeList', response.data.youtubeList);
        }
        if (response.data.blogList.length != 0) {
          localStorage.setItem('blogList', response.data.blogList);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  useEffect(() => {
    setToken(1); // 토큰 생성
    // console.log(token);
    loadCurrentlyLoggedInUser();
    return () => {};
  }, [token]);

  function logoutUser() {
    axios
      .get(LOGOUT, {
        withCredentials: true,
      })
      .then((res) => console.log(res));
  }

  function handleLogout() {
    // localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem('name');
    localStorage.removeItem('blogList');
    localStorage.removeItem('youtubeList');
    localStorage.removeItem('isLogin');
    localStorage.removeItem('email');
    localStorage.removeItem('imageUrl');
    logoutUser();
    swal('로그아웃 완료', '다음에 또 만나요🖐', 'success');

    setAuthenticated(false), setCurrentUser(null);
  }

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        {/* css 초기화 */}
        <BrowserRouter>
          <GlobalFonts />
          <GlobalStyle />
          <Header authenticated={authenticated} onLogout={handleLogout} />
          <div
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      {/* css 초기화 */}
      <BrowserRouter>
        <GlobalFonts />
        <GlobalStyle />
        <Header authenticated={authenticated} onLogout={handleLogout} />
        {/* Suspense는 페이지가 랜더링되기 전 event를 설정합니다. */}
        {/* <Suspense fallback={<CircularProgress />}> */}
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/report" component={Report} exact={true} />
          <Route path="/contents" component={Contents} exact={true} />
          <Route
            path="/profile"
            component={Profile}
            exact={true}
            // name={name}
            // email={email}
            // img=Suspense{img}
          />
          <PrivateRoute
            path="/myfolder/:username"
            authenticated={authenticated}
            component={MyFolder}
            currentUser={currentUser}
          />
          <Route
            path="/oauth2/redirect"
            component={OAuth2RedirectHandler}
          ></Route>
          <Route component={NotFound}></Route>
        </Switch>
        {/* </Suspense> */}
        <Footer data-aos="fade-in" data-aos-duration="2000" />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
