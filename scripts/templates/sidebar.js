function sidebarItem (post) {
  return `<li class="list-group-item">${post.title}</li>`
}

function sidebarTemplate (posts) {
  const opening = `<ul class="list-group">`
  const closing = `</ul>`
  const items = posts.map(sidebarItem).join('')

  return opening + items + closing
}
