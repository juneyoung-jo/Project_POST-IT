import React, { ComponentType } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface PivateRouteProps {
  path: string;
  authenticated: boolean;
  component: ComponentType;
  currentUser?: any;
}

const PrivateRoute: React.FC<PivateRouteProps> = ({
  component: Component,
  authenticated,
  path,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated ? (
        <Component {...rest} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
