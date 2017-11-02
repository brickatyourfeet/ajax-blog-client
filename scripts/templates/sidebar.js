function sidebarItem (post) {
  return `
    <a href="#/posts/${post.id}" class="list-group-item list-group-item-action">
      ${post.title}
    </a>
  `
}

function sidebarTemplate (posts) {
  const opening = `<ul class="list-group">`
  const closing = `</ul>`
  const items = posts.map(sidebarItem).join('')

  return opening + items + closing
}
