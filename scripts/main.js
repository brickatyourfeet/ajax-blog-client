const localhostURL = 'http://localhost:3000/posts'
const herokuURL = 'https://ajax-blog-api.herokuapp.com/posts'
const baseURL = window.location.href.includes('127.0.0.1') ? localhostURL : herokuURL

homeView.init()

window.onhashchange = () => homeView.init()

//listens for click, then goes to scripts / render / NEW - go there now
document.querySelector('#create-post').addEventListener('click', event => {
  newPostView.init()
})
