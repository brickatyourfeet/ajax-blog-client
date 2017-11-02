function determinePost () {
  return window.location.hash.replace('#/posts/','')
}

function goToPost (post) {
  window.location.hash = `#/posts/${post.id}`
}

const baseURL = 'http://localhost:3000/posts'
axios.get(`${baseURL}`)
  .then(({ data: { posts } }) => {
    let id = determinePost()
    if (!id) {
      goToPost(posts[0])
      id = determinePost()
    }

    console.log(id);
    const selected = posts.find(post => post.id == id)
    window.sidebar.init(posts, id)
    window.post.init(selected)
  })
