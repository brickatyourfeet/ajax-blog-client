window.Post = {
  index () {
    return axios.get(`${baseURL}`)
  },
  find (id) {
    return axios.get(`${baseURL}/${id}`)
  },
  create (body) {
    return axios.post(`${baseURL}`, body)
  },
  destroy (id) {
    return axios.delete(`${baseURL}/${id}`)
  },
  update (id, body) {
    return axios.put(`${baseURL}/${id}`, body)
  }
}
