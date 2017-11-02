window.requestPosts = {
  get() {
    return axios.get(`${baseURL}`)
  }
}
