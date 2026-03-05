/* ================================================
   Workstation (workstation.html) - Full Interactions
   ================================================ */

// ==========================================
// MOCK DATA
// ==========================================
const MOCK_CHAPTERS = {
  1: {
    title: '第一章 启入星域',
    words: 2847,
    // content is already in HTML
  },
  2: {
    title: '第二章 暗影之门',
    words: 3120,
    content: `<h2 class="chapter-title">第二章 暗影之门</h2>
<p>进入禁区后的第三个标准时，所有信号都消失了。</p>
<p>全息星图上的坐标点一个接一个地熄灭，像被无形的手逐一掐灭的烛焰。舰桥内的应急灯亮起暗红色的光，在每个人的面孔上投下深邃的阴影。林越的手指在导航台上飞速跳动，但每一次计算都返回相同的结果——"数据不足"。</p>
<p>"暗物质密度超出仪器量程上限。"林越的声音维持着表面的平静，但他没有抬头，不想让任何人看到他眼中的恐惧，"外部传感器阵列已经完全失效。我们是在盲飞。"</p>
<p>陈昕站在指挥位上，双手背在身后。她的拇指在无人能看到的角度反复摩挲着那枚军牌的边缘，金属的冰凉触感像一条细细的锚链，将她固定在此刻。</p>
<p>"赵鸣，那个信号呢？"</p>
<p>通讯官的脸色比三小时前更加苍白。他摘下耳机，手指微微颤抖。"消失了。完全消失了。就好像……从来没有存在过一样。"</p>
<p>一阵沉默。引擎的嗡鸣在黑暗中显得格外清晰，像是某种巨大心脏的搏动。</p>
<p>林越突然停下了手中的操作。他盯着屏幕，眼瞳骤然收缩。</p>
<p>"舰长。"他的声音变了，带着一种陈昕从未在他身上听到过的东西——不是恐惧，是某种更深层的不安，"我调出了联邦数据库中禁区的暗物质历史记录。"</p>
<p>"说。"</p>
<p>"当前我们周围的暗物质波动特征——频率、振幅、相位……与十二年前的一组数据高度吻合。精确到小数点后第七位。"林越转过身来，直视陈昕的眼睛。他的目光里没有怒火，只有一种冰冷的理性，"舰长，十二年前录下这组数据的传感器，来自'永恒号'。"</p>
<p>舰桥里的空气仿佛凝固了。几双眼睛同时望向陈昕，目光中混杂着疑惑、惊讶，以及某种正在成形的怀疑。</p>
<p>陈昕的表情没有变化。但她的右手在身后握紧了军牌，金属棱角嵌入掌心，疼痛像一根针，把她从某种正在涌起的情绪中拉回来。</p>
<p>"林少校，"她的声音平稳如初，"你想问什么？"</p>
<p>"我想问，"林越站直身体，声音在舰桥中清晰地回荡，"这次任务的真正目标是什么。"</p>`
  },
  3: {
    title: '第三章 虚空回响',
    words: 4567,
    content: `<h2 class="chapter-title">第三章 虚空回响</h2>
<p>残骸场出现在黎明号的正前方，没有任何征兆。</p>
<p>一秒前，全息屏上还是一片虚无的黑暗；下一秒，数以千计的金属碎片突然充斥了整个视野——仿佛它们一直在那里，只是在某个瞬间才被允许"显现"。</p>
<p>碎片在暗物质的缓慢涡流中旋转，反射着黎明号探照灯的微弱光芒。光线在金属表面滑过时，陈昕看到了一些残存的标识——联邦的蓝色星芒徽章，已经被腐蚀得只剩下模糊的轮廓。</p>
<p>"永恒号。"她说出这个名字时，声音低得几乎只有自己能听到。</p>
<p>但舰桥上的每个人都听到了。沉默中，金属碎片撞击护盾的声音像极了雨滴打在窗上——密集、细碎、无法忽视。空气中飘来一股焦糊味，是护盾在高频拦截微型碎片时产生的臭氧。</p>
<p>赵鸣的设备突然发出一声尖锐的蜂鸣。</p>
<p>"舰长！信号……信号回来了！"他几乎是从椅子上弹起来的，"不是原来的Omega-7——是另一种编码。更古老。这是……联邦第一代加密协议。比我出生还早二十年。"</p>
<p>陈昕转向赵鸣："定位信号源。"</p>
<p>"就在残骸场中心。"赵鸣指向全息图上一个缓缓旋转的大型结构，"那里……那不是碎片。那是一个完整的舱段。"</p>
<p>陈昕盯着那个结构看了整整十秒。然后她做了一个让所有人都没有预料到的决定。</p>
<p>"准备EVA装甲。我亲自去。"</p>`
  },
  4: {
    title: '第四章 星际追逐',
    words: 3890,
    content: `<h2 class="chapter-title">第四章 星际追逐</h2>
<p>从永恒号残骸中带回的指挥日志改变了一切。</p>
<p>父亲的声音从十二年前传来，经过数字还原后，依然带着陈昕记忆中那种沉稳而温暖的质地——只是在最后几段录音中，温暖消失了，取而代之的是一种她从未听过的东西：敬畏。</p>
<p>"禁区不是一个区域。"录音中父亲的声音说，夹杂着信号衰减造成的嘶嘶声，"它是一个存在。一个古老的存在。我们闯入了它的领域，而现在……它醒了。"</p>
<p>最后一条录音的时间戳是星历2835年3月17日，永恒号失踪后的第四天。但录音中提到的事件，按照叙述的内部逻辑，应该发生在失踪后的第三十天。</p>
<p>时间在这里不再是直线。</p>
<p>陈昕还没来得及消化这个信息，警报声就撕裂了舰桥的寂静。</p>
<p>"未知物体！"林越的声音比警报还要尖锐，"六点钟方向，距离——不对，距离在变化。它在加速。速度——不可能。那个东西正在以超过我们最大航速三倍的速度接近！"</p>
<p>全息屏上出现了一个不规则的暗色轮廓。它不反射光线，而是吞噬光线——像一个移动的黑洞，但不是黑洞。它在暗物质中穿行时不产生任何波动，仿佛它本身就是暗物质的一部分。</p>
<p>"全舰进入最大航速。"陈昕的命令没有任何犹豫。</p>`
  },
  5: {
    title: '第五章 最后防线',
    words: 3810,
    content: `<h2 class="chapter-title">第五章 最后防线</h2>
<p>禁区的中心不是黑暗的。</p>
<p>当黎明号穿过最后一层暗物质屏障时，所有人都屏住了呼吸。眼前展开的是一片不应该存在于宇宙中的景象——一个巨大的光球悬浮在虚空中，直径超过一个标准天文单位，表面流动着像极了极光的彩色光带。</p>
<p>光球的中心，有什么东西在缓缓旋转。</p>
<p>"放大。"陈昕的声音近乎耳语。</p>
<p>全息屏拉近焦距。在光球的核心，一艘联邦星舰正在以极其缓慢的速度旋转——"永恒号"。它看起来完好无损，舰体上的蓝色星芒徽章在光带的映照下闪闪发光，仿佛刚刚下线。</p>
<p>但它在重复。同一段旋转，同一个角度，永远。</p>
<p>"时间循环。"赵鸣低声说，声音里带着一种宗教般的虔诚，"永恒号被困在了一个时间循环里。它……它一直在那里。一直在重复同一段时间。"</p>
<p>陈昕握紧了军牌。金属已经被她的体温捂暖，边缘的磨损在指腹下清晰可辨——每一道痕迹都是无数次摩挲留下的。</p>
<p>"有办法打破循环吗？"</p>
<p>林越的回答来得很快，也很残酷："理论上……可以。用跃迁核心的全部能量对时空节点进行一次定向冲击。但这意味着——"</p>
<p>"黎明号将永远失去跃迁能力。"陈昕替他说完，"我们将不得不以亚光速返航。"</p>
<p>"回到联邦领空需要……"林越停顿了一下，"四百年。"</p>
<p>舰桥上一片死寂。</p>`
  }
};

// Inspiration hints data
const INSPIRATION_HINTS = {
  plot: [
    { diagnosis: '这一场的"目标"是不是没写清？', action: '用一句话写死陈昕此刻要达成的目标（复用上一段关键词），再加一个立刻出现的阻力（林越的质疑/时间压力/护盾过载），逼她马上行动。' },
    { diagnosis: '要不要加一个"打断"，把剧情推着走？', action: '在当前段落结尾插入一个外部打断（警报/异常信号/设备故障），并让打断带出一个没解释完的信息点（复用Omega-7信号的时间戳异常）。' },
    { diagnosis: '你是觉得现在有点"平"吗？', action: '把下一步改成一个两难选择：A=继续深入禁区寻找永恒号，B=保住全舰150名船员的安全撤退；并写出陈昕选完后立刻付出的代价（暴露私人动机/失去船员信任）。' },
    { diagnosis: '是不是一直在写主角？', action: '让暗物质中的未知存在先推进一步（释放更强干扰/出现异常影像/锁定黎明号），迫使陈昕临时改计划，下一场戏自然就出现。' },
    { diagnosis: '缺一个能往前推的"新线索"吗？', action: '从文中已出现的军牌里挑出来，加一个异常细节（军牌表面出现了不属于父亲的划痕/上面的编号与永恒号记录不符），让读者知道方向要转。' },
  ],
  setting: [
    { diagnosis: '人物一致性不对？增加"底层原则"', action: '给陈昕补一个底层原则（不拿任何人当棋子），再写这次为什么不得不破例（Omega-7信号暗示父亲还活着），让她的矛盾行为有逻辑支撑。' },
    { diagnosis: '关系缺抓手？给两人一条硬绑定', action: '给陈昕和林越加一个硬约束（林越的父亲也在"永恒号"上，但他还不知道），并让这条约束在本段"被提醒一次"（一个动作或一句话即可）。' },
    { diagnosis: '时间线混乱？把关键节点做成"时间钉子"', action: '在本段补一句明确时间（进入禁区后第三个标准时/距Omega-7信号消失已过去17分钟），再把动作顺序改成因果链，避免读者算不清。' },
  ],
  detail: [
    { diagnosis: '画面描写太虚？先找一个"锚点物件"', action: '挑陈昕的那枚军牌，只写三句：动作（拇指反复摩挲边缘）+ 触感（金属冰凉，棱角已被磨圆）+ 反应（疼痛像一根针把她从情绪中拉回来）。' },
    { diagnosis: '场景太空？补一个"空间坐标"吧', action: '用一句话交代舰桥的光源（应急灯暗红色的光）/声音（引擎的低频嗡鸣混着金属外壳的细碎呻吟）/人物距离（赵鸣在通讯台旁站起身，离陈昕不到三步远），空间感就出来了。' },
    { diagnosis: '想要更有记忆点？做一个可回扣的"标记"', action: '选"臭氧的味道"这个标记（护盾过载的征兆），在本段出现一次、结尾再回扣一次（空气中的臭氧味消失了——但不是因为护盾恢复了），后文就能用它做呼应。' },
    { diagnosis: '节奏拖沓？把一段拆成"三拍"', action: '三拍：看见一个细节（引擎嗡鸣骤然变调）→ 身体反应（陈昕的手停在操作台上）→ 推进一句动作（她转身下达命令），别在同一拍里解释。' },
  ]
};

let currentInspirationCategory = 'plot';
let currentInspirationIndex = 0;

// ==========================================
// PANEL SWITCHING
// ==========================================
let currentPanel = 'editor';

function switchPanel(panel, subItem) {
  // Deactivate all sub items
  document.querySelectorAll('.panel-sub-item').forEach(el => el.classList.remove('active'));
  if (subItem) subItem.classList.add('active');

  // Hide all panels
  ['panelSettings', 'panelTags', 'panelCharacters', 'panelOutline'].forEach(id => {
    document.getElementById(id).style.display = 'none';
  });

  // Show editor or settings panel
  const editorContent = document.getElementById('editorContent');
  const editorToolbar = document.getElementById('editorToolbar');
  const bottomBar = document.getElementById('bottomBar');

  if (panel === 'editor') {
    editorContent.style.display = 'block';
    editorToolbar.style.display = 'flex';
    bottomBar.style.display = 'flex';
    currentPanel = 'editor';
  } else {
    editorContent.style.display = 'none';
    editorToolbar.style.display = 'none';
    bottomBar.style.display = 'none';
    currentPanel = panel;
    const panelId = 'panel' + panel.charAt(0).toUpperCase() + panel.slice(1);
    const panelEl = document.getElementById(panelId);
    if (panelEl) panelEl.style.display = 'block';
  }
}

// ==========================================
// LEFT PANEL COLLAPSE
// ==========================================
function toggleLeft() {
  const left = document.getElementById('leftPanel');
  const toggle = document.getElementById('leftToggle');
  if (left.classList.contains('collapsed')) {
    left.classList.remove('collapsed');
    toggle.style.display = 'none';
    // Update settings panels position
    updatePanelPositions();
  } else {
    left.classList.add('collapsed');
    toggle.style.display = 'flex';
    updatePanelPositions();
  }
}

function toggleRight() {
  const right = document.getElementById('rightPanel');
  const toggle = document.getElementById('rightToggle');
  if (right.classList.contains('collapsed')) {
    right.classList.remove('collapsed');
    toggle.style.display = 'none';
    updatePanelPositions();
  } else {
    right.classList.add('collapsed');
    toggle.style.display = 'flex';
    updatePanelPositions();
  }
}

function updatePanelPositions() {
  const left = document.getElementById('leftPanel');
  const right = document.getElementById('rightPanel');
  const leftW = left.classList.contains('collapsed') ? 0 : 260;
  const rightW = right.classList.contains('collapsed') ? 0 : 320;
  ['panelSettings', 'panelTags', 'panelCharacters', 'panelOutline'].forEach(id => {
    const el = document.getElementById(id);
    el.style.left = leftW + 'px';
    el.style.right = rightW + 'px';
  });
}

// ==========================================
// SECTION TOGGLE
// ==========================================
function toggleSection(header) {
  header.classList.toggle('expanded');
  const body = header.nextElementSibling;
  if (body) body.style.display = header.classList.contains('expanded') ? 'block' : 'none';
}

// ==========================================
// CHAPTER SWITCHING
// ==========================================
function selectChapter(chNum, el) {
  // Update active chapter
  document.querySelectorAll('.chapter-item').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');

  // Switch to editor view
  switchPanel('editor', null);

  // Load chapter content
  const ch = MOCK_CHAPTERS[chNum];
  if (ch && ch.content) {
    document.getElementById('editorContent').innerHTML = ch.content;
  }
  document.getElementById('chapterWordCount').textContent = ch ? ch.words.toLocaleString() : '0';

  // Auto save simulation
  simulateSave();
}

function addChapter() {
  const list = document.getElementById('chapterList');
  const count = list.children.length + 1;
  const item = document.createElement('div');
  item.className = 'chapter-item';
  item.dataset.ch = count;
  item.innerHTML = `<span>第${numberToChinese(count)}章 新章节</span><span class="ch-words">0</span>`;
  item.onclick = function() { selectChapter(count, item); };
  list.appendChild(item);
  showToast('已添加新章节');
}

function numberToChinese(n) {
  const chars = ['零','一','二','三','四','五','六','七','八','九','十'];
  if (n <= 10) return chars[n];
  if (n < 20) return '十' + (n % 10 ? chars[n % 10] : '');
  return n;
}

// ==========================================
// FLOATING SELECTION TOOLBAR
// ==========================================
const editorContent = document.getElementById('editorContent');
const floatToolbar = document.getElementById('floatToolbar');
const aiAdjustDropdown = document.getElementById('aiAdjustDropdown');
const aiDialog = document.getElementById('aiDialog');

editorContent.addEventListener('mouseup', (e) => {
  const sel = window.getSelection();
  if (sel && sel.toString().trim().length > 0) {
    const range = sel.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    const editorRect = editorContent.getBoundingClientRect();

    floatToolbar.style.top = (rect.top - editorRect.top - 48 + editorContent.scrollTop) + 'px';
    floatToolbar.style.left = (rect.left - editorRect.left + rect.width / 2 - 100) + 'px';
    floatToolbar.classList.add('show');
  }
});

document.addEventListener('mousedown', (e) => {
  if (!floatToolbar.contains(e.target) && !aiAdjustDropdown.contains(e.target) && !aiDialog.contains(e.target)) {
    floatToolbar.classList.remove('show');
    aiAdjustDropdown.classList.remove('show');
  }
});

function showAiAdjustMenu() {
  const ftRect = floatToolbar.getBoundingClientRect();
  const editorRect = editorContent.getBoundingClientRect();
  aiAdjustDropdown.style.top = (ftRect.bottom - editorRect.top + editorContent.scrollTop + 4) + 'px';
  aiAdjustDropdown.style.left = (ftRect.left - editorRect.left) + 'px';
  aiAdjustDropdown.classList.toggle('show');
}

function executeAiAction(action) {
  const names = { rewrite: '改写', polish: '润色', expand: '扩写', condense: '缩写' };
  showAiDialog(names[action] || action);
}

function executeAtmosphere() {
  aiAdjustDropdown.classList.remove('show');
  showAiDialog('氛围增强');
}

// ==========================================
// AI DIALOG (Atmosphere Enhancement etc)
// ==========================================
let selectedText = '';
let generatedText = '';

function showAiDialog(title) {
  const sel = window.getSelection();
  selectedText = sel ? sel.toString().trim() : '';
  const preview = selectedText.length > 15 ? selectedText.substring(0, 15) + '...' : selectedText;

  document.getElementById('aiDialogTitle').textContent = title;
  const body = document.getElementById('aiDialogBody');
  body.innerHTML = `
    <div class="ai-dialog-user">
      <div class="tag">${title}</div>
      <div class="quote">${preview || '（当前选区）'}</div>
    </div>
    <div class="ai-dialog-result" id="aiResultArea">
      <span class="typing-cursor"></span>
    </div>
  `;
  document.getElementById('aiDialogActions').style.display = 'none';

  // Position dialog
  const ftRect = floatToolbar.getBoundingClientRect();
  const editorRect = editorContent.getBoundingClientRect();
  aiDialog.style.top = (ftRect.bottom - editorRect.top + editorContent.scrollTop + 8) + 'px';
  aiDialog.style.left = Math.max(0, (ftRect.left - editorRect.left - 80)) + 'px';
  aiDialog.classList.add('show');
  floatToolbar.classList.remove('show');

  // Simulate generation
  simulateGeneration(title);
}

function simulateGeneration(type) {
  let result = '';
  if (type === '氛围增强') {
    result = '星历2847年的夜空不会有星光——暗物质像一块浸透了墨汁的绒布，将视野之外的一切吞没殆尽。引擎过载的嗡鸣从甲板下方涌上来，穿过靴底，沿着小腿骨传导至牙根，变成一种让人忍不住咬紧后槽牙的酸胀。空气里弥漫着臭氧的气息，尖锐而干燥，刮着鼻腔黏膜，像是有人在密封舱室里点燃了一根电焊条。陈昕的目光钉在全息投影上那片暗红色的禁区标注——颜色在她的视网膜上灼出一个微微跳动的残影。她能听见自己的心跳，沉稳，缓慢，与引擎的频率几乎同步，仿佛她自身也已成为这艘船的一部分。';
  } else {
    result = '黎明号的引擎发出低沉的轰鸣，在暗物质的海洋中顽强前行。舰桥内弥漫着紧张的气氛，每一个仪表盘的读数都在提醒着所有人——他们正在驶向未知。陈昕站在指挥位上，她的身影在应急灯的红光中显得格外坚定。那枚磨损的军牌在她的指尖旋转，金属表面映出一道微弱的光弧。';
  }
  generatedText = result;

  const area = document.getElementById('aiResultArea');
  let i = 0;
  const timer = setInterval(() => {
    if (i < result.length) {
      area.innerHTML = result.substring(0, i + 1) + '<span class="typing-cursor"></span>';
      i += 2;
    } else {
      area.innerHTML = result;
      clearInterval(timer);
      document.getElementById('aiDialogActions').style.display = 'flex';
    }
  }, 20);
}

function closeAiDialog() {
  aiDialog.classList.remove('show');
}

function replaceSelection() {
  // In a real app, would replace the selected text
  showToast('已替换选中内容');
  closeAiDialog();
}

function copyResult() {
  navigator.clipboard.writeText(generatedText).catch(() => {});
  showToast('已复制');
}

function regenerate() {
  document.getElementById('aiDialogActions').style.display = 'none';
  const body = document.getElementById('aiDialogBody');
  body.innerHTML += `
    <div style="border-top:1px solid #eee;margin:12px 0;"></div>
    <div class="ai-dialog-result" id="aiResultArea">
      <span class="typing-cursor"></span>
    </div>
  `;
  simulateGeneration('氛围增强');
}

// ==========================================
// TIPS MENU (卡文锦囊)
// ==========================================
let tipsHideTimer = null;

function showTipsMenu() {
  clearTipsHideTimer();
  document.getElementById('tipsMenu').classList.add('show');
}
function clearTipsHideTimer() {
  if (tipsHideTimer) { clearTimeout(tipsHideTimer); tipsHideTimer = null; }
}
function startTipsHideTimer() {
  tipsHideTimer = setTimeout(() => hideTipsMenu(), 150);
}
function hideTipsMenu() {
  document.getElementById('tipsMenu').classList.remove('show');
}

// ==========================================
// INSPIRATION POPUP (灵感续接)
// ==========================================
function showInspirationCard(category) {
  hideTipsMenu();
  currentInspirationCategory = category;
  currentInspirationIndex = 0;
  updateInspirationContent();
  document.getElementById('inspirationPopup').classList.add('show');
}

function updateInspirationContent() {
  const hints = INSPIRATION_HINTS[currentInspirationCategory];
  const hint = hints[currentInspirationIndex % hints.length];
  const body = document.getElementById('inspirationBody');
  body.innerHTML = `
    <div class="diagnosis">【${hint.diagnosis}】</div>
    <div class="action">${hint.action}</div>
  `;
}

function refreshInspiration() {
  currentInspirationIndex++;
  updateInspirationContent();
}

function closeInspirationPopup() {
  document.getElementById('inspirationPopup').classList.remove('show');
}

function generateNextChapter() {
  closeInspirationPopup();
  // Add message to chat
  addChatMessage('user', '基于当前灵感提示，生成下一章');
  showToast('正在生成下一章...');

  setTimeout(() => {
    addChatMessage('ai', `<strong>第六章 时间之外</strong><br><br>四百年。<br><br>这个数字在舰桥中回荡了很久。长到足以让每一个人都真正理解它的含义——他们之中没有任何人能活着看到回家的那一天。<br><br>但陈昕没有给任何人消化绝望的时间。<br><br>"启动跃迁核心能量释放程序。"她的声音穿过寂静，清晰而不可违抗，"目标：时空节点中心。"<br><br>林越没有反对。这一次，他只是沉默地转向自己的操作台，开始输入参数。他的手指不再颤抖——或者说，颤抖已经变成了另一种东西。<br><br>"能量充能需要十二分钟。"他的声音平静得不像自己。<br><br>"很好。"陈昕走向舰桥中央的全息投影台。在那里，永恒号的影像仍在缓缓旋转，困在永恒的循环里。她把军牌取下来，放在投影台的边缘——金属在灯光下泛着暗沉的光泽。<br><br>"爸爸，"她无声地说，"我来接你回家。"...`);

    // Simulate adding to editor
    showToast('已同步写入编辑器');
  }, 2000);
}

// ==========================================
// RIGHT PANEL TOOLS
// ==========================================
function runInspTool(type) {
  if (type === 'tips') showInspirationCard('plot');
  else if (type === 'rhythm') showRightPanelTool('rhythm');
  else if (type === 'check') showRightPanelTool('consistency');
}

function showRightPanelTool(type) {
  const right = document.getElementById('rightPanel');
  if (right.classList.contains('collapsed')) toggleRight();

  if (type === 'rhythm') {
    addChatMessage('ai', `<strong>节奏诊断结果</strong><br><br>
<strong>整体节奏评分：8.2/10</strong><br><br>
<strong>优势：</strong><br>
- 开场节奏紧凑，通过暗物质区域的环境压迫感快速建立紧张氛围<br>
- 对白节奏控制良好，陈昕的命令简短有力，与林越/赵鸣的较长回复形成对比<br>
- 结尾处军牌细节+内心独白有效降速，形成"紧-慢"的呼吸感<br><br>
<strong>建议改进：</strong><br>
- 第4-6段连续三段环境描写，节奏略显拖沓。建议在第5段插入一个短促动作（如某个设备的警报声），打破连续描写的平缓感<br>
- "她深吸一口气"这段感官描写过于详细（5句），可精简至3句，保留"齿缝嘶嘶声"和"冰凉触感"两个最有力的意象`);
  } else {
    addChatMessage('ai', `<strong>一致性校对结果</strong><br><br>
<strong>检查项：人物/时间线/称谓/设定</strong><br><br>
&#9989; <strong>人物一致性：通过</strong><br>
- 陈昕：行为与"冷静果断"的性格设定一致<br>
- 林越：紧张时的小动作（敲击控制台/指节泛白）前后统一<br><br>
&#9888;&#65039; <strong>时间线提醒：</strong><br>
- "距离目标坐标还有四个标准时"（第3段）与后文进入禁区的节奏可能需要确认，是否需要补充时间流逝描写<br><br>
&#9989; <strong>称谓一致性：通过</strong><br>
- "舰长"作为主要称谓使用统一<br>
- "林越" → "林少校"（正式场合），前后一致<br><br>
&#9989; <strong>设定一致性：通过</strong><br>
- Omega-7协议等级描述与世界观设定一致`);
  }
}

function toggleInspirationArea() {
  const cards = document.getElementById('inspCards');
  const btn = document.querySelector('.insp-collapse-btn');
  if (cards.style.display === 'none') {
    cards.style.display = 'flex';
    btn.innerHTML = '&#9660;';
  } else {
    cards.style.display = 'none';
    btn.innerHTML = '&#9650;';
  }
}

// ==========================================
// AI CHAT
// ==========================================
function handleChatKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendChat();
  }
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;

  addChatMessage('user', msg);
  input.value = '';

  // Simulate AI response
  setTimeout(() => {
    let response = '';
    if (msg.includes('续写') || msg.includes('继续')) {
      response = '好的，基于当前章节的结尾，我来续写一段：<br><br>引擎的嗡鸣在黑暗中渐渐升高，像一头被激怒的困兽。林越的手指在导航台上飞速滑动，全息星图不断重构又崩塌——每一条新计算的航线都在暗物质的干扰下扭曲变形，像被一只无形的手揉皱的纸条。<br><br>"舰长，"他终于开口，声音里第一次带上了某种接近恳求的东西，"我请求记录在案：我反对这个决定。"';
    } else if (msg.includes('角色') || msg.includes('人物')) {
      response = '当前作品共有3个已建立的角色：<br><br>1. <strong>陈昕</strong>（主角）- 黎明号舰长，冷静果断但内心背负沉重情感<br>2. <strong>林越</strong> - 导航官，谨慎理性，潜在的对立者<br>3. <strong>赵鸣</strong> - 通讯官，敏感但关键时刻有勇气<br><br>建议可以在第二章中进一步丰富林越的背景动机，为后续的信任危机做铺垫。要不要我帮你设计一个关于林越的背景故事？';
    } else {
      response = '这是一个很好的问题。根据当前的故事发展和角色设定，我有以下建议：<br><br>从叙事结构来看，第一章成功建立了悬疑感和紧张氛围。接下来可以考虑在保持紧张节奏的同时，适当加入角色之间的冲突和人物弧线的推进。<br><br>需要我具体展开某个方面吗？';
    }
    addChatMessage('ai', response);
  }, 1500);
}

function addChatMessage(type, content) {
  const body = document.getElementById('chatBody');
  const msg = document.createElement('div');
  msg.className = `chat-msg ${type}`;
  msg.innerHTML = content;
  body.appendChild(msg);
  body.scrollTop = body.scrollHeight;
}

// ==========================================
// AI TOOLBAR ACTIONS
// ==========================================
function aiContinue() {
  showToast('正文续写中...');
  setTimeout(() => {
    const editor = document.getElementById('editorContent');
    const p = document.createElement('p');
    p.style.color = '#1a6dff';
    p.innerHTML = '黎明号在暗物质的洪流中颠簸前行，每一次震颤都在提醒着所有人——他们正在接近某种不应被接近的东西。陈昕的目光穿过全息投影的幽蓝光幕，看到了数据流中一个反常的波动——那不是暗物质的特征，而是某种有序的信号。有规律、有节奏，像是一颗古老的心脏在虚空中跳动。';
    editor.appendChild(p);
    editor.scrollTop = editor.scrollHeight;
    simulateSave();
    showToast('续写完成');
  }, 2000);
}

function aiPolish() {
  showToast('内容润色中...');
  setTimeout(() => {
    showToast('润色完成');
  }, 2000);
}

// ==========================================
// TOP BAR ACTIONS
// ==========================================
function goBack() {
  if (confirm('有未保存内容，确认退出？')) {
    window.location.href = 'index.html';
  }
}

function forceSave() {
  simulateSave();
  showToast('已保存');
}

function showExportMenu() {
  showToast('导出功能（演示）- 支持 TXT / DOC / PDF');
}

let isFav = false;
function toggleFav() {
  isFav = !isFav;
  const btn = document.getElementById('favBtn');
  if (isFav) {
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="#f5a623" stroke="#f5a623" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
    showToast('已收藏');
  } else {
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
    showToast('已取消收藏');
  }
}

// ==========================================
// SAVE SIMULATION
// ==========================================
function simulateSave() {
  const status = document.getElementById('saveStatus');
  status.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f5a623" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg> 保存中…';
  setTimeout(() => {
    status.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#43e97b" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 已保存到云端';
  }, 1200);
}

// Auto save on edit
let saveTimer = null;
editorContent.addEventListener('input', () => {
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(simulateSave, 1500);
});

// ==========================================
// TOAST
// ==========================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}

// ==========================================
// INIT
// ==========================================
updatePanelPositions();
