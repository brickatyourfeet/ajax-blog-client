function createPost (event) {
    //prevents page redirection
  event.preventDefault()
  const title = document.querySelector('#title').value
  const content = document.querySelector('#content').value
  //creates post v down here
  Post.create({ title, content })
    //returns promise, puts post id in nav bar
    //and initializes homeview
  .then(({ data: { post } }) => {
    window.location.hash = `#/posts/${post.id}`
    homeView.init()
      //go to scripts render / home
  })
  .catch(error => {
    console.error(error.response.data.error)
  })
}

//this is where create post button goes to
//function init runs with a post as a parameter
window.newPostView = {
  init (post) {
      //assign new content to view from the form template
    document.querySelector('#view').innerHTML = formTemplate('POST')
      //listening for create post - fires createPost function defined above
    document.querySelector('#post-form').addEventListener('submit', createPost)
  }
}
//it renders the POST template from template / post - go there now. 
//
