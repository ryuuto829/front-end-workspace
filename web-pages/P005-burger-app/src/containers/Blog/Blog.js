import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(response => {
                const updatedPost = response.data.map(post => {
                    return {
                        ...post,
                        author: 'Dmytro'
                    }
                });
                this.setState({ posts: updatedPost });
            });
    }

    render() {
        const posts = this.state.posts.map(post => {
            return <Post
                clicked={() => this.postSelectedHandler(post.id)}
                key={post.id}
                title={post.title}
                author={post.author} />;
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;