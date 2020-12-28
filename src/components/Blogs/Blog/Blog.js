const blog = (props) => {
    const { blogs } = props
    return (

        <table className="table table-hover">
           <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>User Id</th>
                        </tr>
                    </thead>
            <tbody >
                {/* {renderTable} */}
                {blogs ? blogs.map(blog => {
                    return (
                    <tr key={blog.id}>
                        <th>{blog.id}</th>
                        <th data-testid='blog-title'>{blog.title}</th>
                        <th>{blog.userId}</th>
                    </tr>
                    )
                }) : ''}
            </tbody>
        </table>
    )
}

export default blog;