const baseURL = 'http://localhost:3000/posts'
homeView.init()

document.querySelector('#create-post').addEventListener('click', event => {
  newPostView.init()
})
