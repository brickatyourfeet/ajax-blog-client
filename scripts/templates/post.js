function postTemplate (post) {
  return `
    <section>
      <h2>${post.title}</h2>
      <hr>
      <p>${post.content}</p>
      <aside class="my-4">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link" id="edit-post" href="#">Edit</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-danger" id="delete-post" href="#">Delete</a>
          </li>
        </ul>
      </aside>
    </section>
  `
}
