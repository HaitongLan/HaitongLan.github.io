document.addEventListener('DOMContentLoaded', () => {
  const article = document.querySelector('.blog-article');
  if (article && typeof renderMathInElement === 'function') renderMathInElement(article, {
    delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}, {left: '\\(', right: '\\)', display: false}, {left: '\\[', right: '\\]', display: true}],
    throwOnError: false,
    strict: 'ignore'
  });
});
