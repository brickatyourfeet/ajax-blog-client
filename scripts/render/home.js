window.homeView = {
  init () {
    Post.index()
      .then(({ data: { posts } }) => {
        let id = determinePost()
        if (!id) {
          goToPost(posts[0])
          id = determinePost()
        }

        const selected = posts.find(post => post.id == id)
        sidebarView.init(posts, id)
        postView.init(selected)
      })
  }
}
