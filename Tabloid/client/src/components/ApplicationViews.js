import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import PostList from "./Posts/PostList";
import UserList from "./Users/UserList";
import CategoryList from "./Categories/CategoryList";
import CategoryAddForm from "./Categories/CategoryAddForm";
// import CategoryProvider from "../providers/CategoryProvider";
import UserDetails from "./Users/UserDetails";
import UserDeactivate from "./Users/UserDeactivate";
import UserActivate from "./Users/UserActivate";
import UserListDeactivated from "./Users/UserListDeactivated";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);
  const sessionUser = JSON.parse(sessionStorage.getItem("userProfile"));

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/posts">
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/categories" exact>
          {isLoggedIn ? <CategoryList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/categories/add">
          {isLoggedIn ? <CategoryAddForm /> : <Redirect to="/login" />}
        </Route>

        <Route path="/users" exact>
          {isLoggedIn && sessionUser.userTypeId === 1 ? <UserList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/users/:id" exact>
          {isLoggedIn && sessionUser.userTypeId === 1 ? <UserDetails /> : <Redirect to="/login" />}
        </Route>

        <Route path="/users/deactivate/:id">
          {isLoggedIn && sessionUser.userTypeId === 1 ? <UserDeactivate /> : <Redirect to="/login" />}
        </Route>

        <Route path="/inactive" exact>
          {isLoggedIn && sessionUser.userTypeId === 1 ? <UserListDeactivated /> : <Redirect to="/login" />}
        </Route>

        <Route path="/inactive/:id" exact>
          {isLoggedIn && sessionUser.userTypeId === 1 ? <UserActivate /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </main>
  );
};
