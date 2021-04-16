import { Switch, Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import Home from "../pages/Home"
import Room from "../pages/Room"
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import Notifications from "../pages/Notifications"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth()
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }}
    />
  )
}

export default (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup/:email?" component={Signup} />
    <Route path="/login" component={Login} />
    <PrivateRoute path="/profile/:userName?/:email?/" component={Profile} />
    <PrivateRoute path="/room/:id/:name?" component={Room} />
    <PrivateRoute path="/notifications" component={Notifications} />
  </Switch>
)
