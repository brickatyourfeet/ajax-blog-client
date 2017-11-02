

window.homeView = {
  init () {
      //fires index() from scrips/request/posts
      //which returns the baseUrl
    Post.index()
      //when Posts has baseUrl this promise is returned
      .then(({ data: { posts } }) => {
        //assign id to what determinePost function from scripts/utils - returns altered URL
        let id = determinePost()
        if (!id) {
            //if no id go to 1st post
          goToPost(posts[0])
            //returns id to altered url
          id = determinePost()
        }
        
        //sets a variable to the finding of the current id
        const selected = posts.find(post => post.id == id)
        //fires sidebar from scripts render sidebar 
        sidebarView.init(posts, id)
        postView.init(selected)
      })
  }
}


