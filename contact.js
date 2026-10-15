(() => {
  const wechat = document.querySelector('.wechat-contact');
  if (!wechat) return;
  document.addEventListener('click', (event) => {
    if (!wechat.contains(event.target)) wechat.open = false;
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && wechat.open) {
      wechat.open = false;
      wechat.querySelector('summary').focus();
    }
  });
})();
