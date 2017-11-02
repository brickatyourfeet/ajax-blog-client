function formTemplate (method, post={ id: '', title: '', content: '' }) {
  const btnTxt = method === 'POST' ? 'Create New Post' : 'Update Post'
  return `
    <form id="post-form" action="/posts/${post.id}">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" value="${post.title}">
      </div>
      <div class="form-group">
        <label for="title">Content</label>
        <textarea type="text" rows="6" class="form-control" id="content">
          ${post.content}
        </textarea>
      </div>
      <button type="submit" class="btn btn-info btn-large">${btnTxt}</button>
    </form>
  `
}
