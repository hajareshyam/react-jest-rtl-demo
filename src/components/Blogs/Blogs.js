import axios from "axios";
import { Component } from "react";
import Blog from "./Blog/Blog";

class Blogs extends Component {
    state = {
        blogs: [],
        isDataLoaded: false
    }

    handleGetBlogs = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                this.setState({
                    blogs: response.data,
                    isDataLoaded: true
                })
            })
            .catch(error => {
                console.log(error);
            })
            .then(console.log(this.state));
    }
    render() {
        const { isDataLoaded, blogs } = this.state
        return (
            <div className="container-fluid">
                <div className="center">
                    <button type="button" onClick={this.handleGetBlogs} className="btn btn-primary">Fetch Blog</button>
                </div>
                { isDataLoaded ? <table className="table table-hover">
                    {/* <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>User Id</th>
                        </tr>
                    </thead>
                    <tbody > */}
                        {/* {renderTable} */}
                        {/* {blogs ? blogs.map(blog => {
                            return (
                                <tr key={blog.id}>
                                    <th>{blog.id}</th>
                                    <th data-id="blog-title">{blog.title}</th>
                                    <th>{blog.userId}</th>
                                </tr>
                            )
                        }) : ''} */}

                        { blogs ? <Blog blogs={blogs} /> : ''}
                    {/* </tbody> */}
                </table> : '' }

                {/* { isDataLoaded ? <Blog blogs={blogs} /> : ''} */}

            </div>
        )
    }
}

export default Blogs;