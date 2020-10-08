import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import PostList from "./Posts/PostList";
import PostDetail from "./Posts/PostDetail";
import PostForm from "./Posts/PostForm";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);

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

        <Route path="/posts" exact>
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/posts/details/:id">
          {isLoggedIn ? <PostDetail /> : <Redirect to="/login" />}
        </Route>

        <Route path="/posts/add">
          {isLoggedIn ? <PostForm /> : <Redirect to="/login" />}
        </Route>

      </Switch>
    </main>
  );
};
