const field = document.querySelector('#query');
const rows = [...document.querySelectorAll('#search-results li')];
function filterNotes() {
  const query = field.value.trim().toLocaleLowerCase();
  let count = 0;
  for (const row of rows) { row.hidden = !row.textContent.toLocaleLowerCase().includes(query); if (!row.hidden) count++; }
  document.querySelector('#result-count').textContent = count ? `${count} results` : 'No matching notes or materials / 没有匹配的笔记或资料';
}
field.addEventListener('input', filterNotes);
filterNotes();
