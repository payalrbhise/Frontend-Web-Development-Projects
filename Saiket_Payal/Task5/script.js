document.getElementById('blogForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (title && content) {
    addPost(title, content);
    document.getElementById('blogForm').reset();
  }
});

function addPost(title, content) {
  const posts = document.getElementById('posts');

  const post = document.createElement('div');
  post.className = 'post';

  post.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
  `;

  posts.prepend(post);
}
