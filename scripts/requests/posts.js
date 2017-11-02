window.Post = {
  index () {
    return axios.get(`${baseURL}`)
  },
  create (body) {
    return axios.post(`${baseURL}`, body)
  },
  destroy (id) {
    return axios.delete(`${baseURL}/${id}`)
  }
}
