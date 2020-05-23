import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
//import axios from 'axios';
//import axios from '../../axios';
// import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
              <li><NavLink to={{
                pathname: "/new-post",
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" component={AsyncNewPost} />
          <Route path="/" component={Posts} />
          <Route render={() => <h1>Not Found</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;