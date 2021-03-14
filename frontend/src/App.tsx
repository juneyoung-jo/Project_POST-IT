// Fragment는 불필요한 DOM node의 생성을 막기때문에 메모리를 적게사용한다.
// css 메커니즘에서 특별한 부모 자식관계를 가지고 있는 flexbox나 gridbox관계에 있는 엘리먼트 사이에 <div>를 추가하게 되면 레이아웃을 유지하기 어려워지므로 fragment를 사용하면 된다.
import React, { Fragment, ReactElement, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

// styles
import GlobalStyle from 'assets/styles/GlobalStyle';

// theme
import theme from 'assets/theme/index';
import { ThemeProvider } from '@material-ui/core/styles';

// utils
// import history from 'utils/history';

// components
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

// pages
const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Signup = lazy(() => import('pages/Signup'));

const IndexRouter: React.FC = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        {/* Suspense는 페이지가 랜더링되기 전 event를 설정합니다. */}
        <Suspense fallback={<CircularProgress />}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default IndexRouter;
