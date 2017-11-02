window.home = {
  init () {
    requestPosts.get()
      .then(({ data: { posts } }) => {
        let id = determinePost()
        if (!id) {
          goToPost(posts[0])
          id = determinePost()
        }

        const selected = posts.find(post => post.id == id)
        sidebar.init(posts, id)
        post.init(selected)
      })
  }
}
