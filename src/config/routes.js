import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Room from "../pages/Room";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = localStorage.getItem("id"); //get currnet user
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/room" component={Room} />
  </Switch>
);
