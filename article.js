(() => {
  const back = document.querySelector('.article-return');
  if (back && document.referrer) {
    const previous = new URL(document.referrer);
    if (previous.origin === location.origin && previous.pathname !== location.pathname) {
      back.href = previous.href;
    }
  }
  const contents = document.querySelector('.sidebar-toc');
  if (!contents) return;
  contents.addEventListener('click', (event) => {
    if (event.target.closest('a')) contents.open = false;
  });
  document.addEventListener('click', (event) => {
    if (!contents.contains(event.target)) contents.open = false;
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && contents.open) {
      contents.open = false;
      contents.querySelector('summary').focus();
    }
  });
})();
