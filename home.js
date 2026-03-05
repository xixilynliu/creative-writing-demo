/* ================================================
   Home Page (index.html) - Interactions
   ================================================ */

// Scene card sliding
let sceneOffset = 0;
const sceneCards = document.getElementById('sceneCards');
const scenePrev = document.getElementById('scenePrev');
const sceneNext = document.getElementById('sceneNext');

sceneNext.addEventListener('click', () => {
  sceneOffset = 1;
  sceneCards.style.transform = `translateX(-${sceneOffset * 25}%)`;
  scenePrev.disabled = false;
  sceneNext.disabled = true;
});
scenePrev.addEventListener('click', () => {
  sceneOffset = 0;
  sceneCards.style.transform = `translateX(0)`;
  scenePrev.disabled = true;
  sceneNext.disabled = false;
});

// Enter workstation
function enterWorkstation(scene, workId) {
  window.location.href = `workstation.html?scene=${scene}${workId ? '&work=' + workId : ''}`;
}

// Context menu for works
function showWorkMenu(btn, event) {
  event.stopPropagation();
  const menu = document.getElementById('workContextMenu');
  const rect = btn.getBoundingClientRect();
  menu.style.display = 'block';
  menu.style.top = rect.bottom + 4 + 'px';
  menu.style.left = rect.left - 120 + 'px';
}

document.addEventListener('click', () => {
  document.getElementById('workContextMenu').style.display = 'none';
});

// Work actions
function exportWork(format) {
  showToast(`正在导出为 ${format.toUpperCase()} 格式...`);
}
function copyLink() {
  showToast('链接已复制');
}
function deleteWork() {
  if (confirm('确认删除该作品？')) {
    showToast('作品已删除');
  }
}
function showWorksList() {
  showToast('进入作品列表');
}

// Toast
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}
