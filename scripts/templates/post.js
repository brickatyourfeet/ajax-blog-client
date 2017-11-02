function postTemplate (post) {
  return `
    <section>
      <h2>${post.title}</h2>
      <hr>
      <p>${post.content}</p>
    </section>
  `
}
