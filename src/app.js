class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }

  addTitle() {
    const title_card = document.createElement('h1');
    title_card.setAttribute('id', 'blog-title');
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }

  addDescription() {
    const description_paragraph = document.createElement('p');
    description_paragraph.setAttribute('id', 'blog-detail');
    document.getElementById('card-text').appendChild(description_paragraph);
    description_paragraph.innerHTML += this.detail;
  }
}

function close() {
  const popupFrame = document.getElementById('popupContact');
  popupFrame.style.display = 'none';
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`
function helperAddPost() {
  const popupFrame = document.getElementById('popupContact');
  popupFrame.style.display = 'inline';
}

function helperPost() {
  const title = document.getElementById('title').value;
  const detail = document.getElementById('detail').value;
  const blog = new Blog(title, detail);
  blog.addTitle();
  blog.addDescription();

  const popupFrame = document.getElementById('close');
  popupFrame.style.display = 'none';
}
