const baseURL = 'http://localhost:3000/posts'
axios.get(`${baseURL}`)
  .then(({ data: { posts } }) => {
    window.sidebar.init(posts)
  })
