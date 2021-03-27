// Fragment는 불필요한 DOM node의 생성을 막기때문에 메모리를 적게사용한다.
// css 메커니즘에서 특별한 부모 자식관계를 가지고 있는 flexbox나 gridbox관계에 있는 엘리먼트 사이에 <div>를 추가하게 되면 레이아웃을 유지하기 어려워지므로 fragment를 사용하면 된다.
import React, { ReactElement, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import OAuth2RedirectHandler from 'api/oauth2';
import { getCurrentUser } from 'api/index';
import { ACCESS_TOKEN } from 'config/config';

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
import ChartTest from 'pages/ChartTest';
import Contents from 'pages/Contents';
import MyFolder from 'pages/MyFolder';

const App: React.FC = (): ReactElement => {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  function loadCurrentlyLoggedInUser() {
    setLoading(true);

    getCurrentUser()
      .then((response) => {
        setCurrentUser(response), setAuthenticated(true);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }
  function handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    setAuthenticated(false), setCurrentUser(null);
  }

  useEffect(() => {
    return () => {
      loadCurrentlyLoggedInUser();
    };
  }, []);

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <ThemeProvider theme={theme}>
      {/* css 초기화 */}
      <BrowserRouter>
        <GlobalFonts />
        <GlobalStyle />
        <Header authenticated={authenticated} onLogout={handleLogout} />
        {/* Suspense는 페이지가 랜더링되기 전 event를 설정합니다. */}
        <Suspense fallback={<CircularProgress />}>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/charttest" component={ChartTest} exact={true} />
            <Route path="/contents" component={Contents} exact={true} />
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
        </Suspense>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
