import React from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import styles from './Posts.module.css';

class Posts extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('posts?_limit=5')
      .then(response => {
        const updatedPost = response.data.map(post => {
          return {
            ...post,
            author: 'Dmytro'
          }
        });
        this.setState({ posts: updatedPost });
      })
      .catch(err => {
        console.log(err);
        //this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  }


  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Link to={'/' + post.id} key={post.id}>
            <Post
              clicked={() => this.postSelectedHandler(post.id)}
              title={post.title}
              author={post.author} />
          </Link>);
      });
    }

    return (
      <div>
        <section className={styles.Posts}>
          {posts}
        </section>
        <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
      </div>
    );
  }

}

export default Posts;