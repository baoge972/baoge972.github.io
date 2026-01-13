// 节日特效脚本 - 支持春节、国庆节、中秋节等多个节日
document.addEventListener('DOMContentLoaded', function() {
  // 检测当前日期并确定节日类型
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  
  // 检测节日类型
  let festivalType = null;
  let festivalMessage = '';
  
  // 春节（农历新年，这里使用公历日期作为示例，可调整）
  if ((month === 1 && day >= 10 && day <= 31) || (month === 2 && day <= 20)) {
    festivalType = 'spring_festival';
    festivalMessage = '🎊 新年快乐！恭贺新春！🎊';
  }
  // 国庆节
  else if (month === 10 && day >= 1 && day <= 7) {
    festivalType = 'national_day';
    festivalMessage = '🎉 国庆快乐！祖国万岁！🎉';
  }
  // 中秋节
  else if (month === 9 && day >= 10 && day <= 15) { // 示例日期，可按农历调整
    festivalType = 'mid_autumn';
    festivalMessage = '🥮 中秋快乐！花好月圆！🥮';
  }
  // 元旦
  else if (month === 1 && day === 1) {
    festivalType = 'new_year';
    festivalMessage = '🎆 新年快乐！Happy New Year！🎆';
  }
  // 永久显示模式（开发测试用）
  else if (false) { // 将false改为true可永久显示
    festivalType = 'spring_festival';
    festivalMessage = '🎊 节日快乐！欢度佳节！🎊';
  }
  
  if (festivalType) {
    initFestivalEffects(festivalType, festivalMessage);
  }
});

function initFestivalEffects(festivalType, festivalMessage) {
  // 创建节日特效容器
  createFestivalElements(festivalType, festivalMessage);

  // 添加鼠标点击烟花特效
  addClickFireworkEffect();

  // 显示节日祝福
  setTimeout(showFestivalMessage, 2000, festivalType);
}

function createFestivalElements(festivalType, festivalMessage) {
  // 创建横幅
  const banner = document.createElement('div');
  banner.className = 'spring-festival-banner';
  banner.innerHTML = festivalMessage;
  banner.style.display = 'block';  // 现在总是显示
  document.body.appendChild(banner);

  // 创建左侧装饰
  const leftDecoration = document.createElement('div');
  leftDecoration.className = 'lantern left';
  leftDecoration.innerHTML = `
    <div class="lantern-chain"></div>
    <div class="lantern-body">
      <div class="lantern-red-text">${getFestivalSymbol(festivalType, 'left')}</div>
    </div>
    <div class="lantern-bottom"></div>
  `;
  document.body.appendChild(leftDecoration);

  // 创建右侧装饰
  const rightDecoration = document.createElement('div');
  rightDecoration.className = 'lantern right';
  rightDecoration.innerHTML = `
    <div class="lantern-chain"></div>
    <div class="lantern-body">
      <div class="lantern-red-text">${getFestivalSymbol(festivalType, 'right')}</div>
    </div>
    <div class="lantern-bottom"></div>
  `;
  document.body.appendChild(rightDecoration);

  // 添加背景装饰元素
  addBackgroundDecorations(festivalType);
}

function getFestivalSymbol(festivalType, position) {
  switch(festivalType) {
    case 'spring_festival':
      return position === 'left' ? '春' : '节';
    case 'national_day':
      return position === 'left' ? '国' : '庆';
    case 'mid_autumn':
      return position === 'left' ? '中' : '秋';
    case 'new_year':
      return position === 'left' ? '新' : '年';
    default:
      return position === 'left' ? '节' : '日';
  }
}

function addBackgroundDecorations(festivalType) {
  // 根据节日类型选择不同的装饰元素
  let decorationItems = [];
  switch(festivalType) {
    case 'spring_festival':
      decorationItems = ['🧧', '福', '💰', '🎊', '🎁', '🧧', '福', '🧧'];
      break;
    case 'national_day':
      decorationItems = ['🇨🇳', '🎉', '国旗', '🌟', '爱国', '🇨🇳', '🎉', '🌟'];
      break;
    case 'mid_autumn':
      decorationItems = ['🥮', '🌕', '兔子', '桂花', '🌙', '🥮', '🌕', '🎑'];
      break;
    case 'new_year':
      decorationItems = ['🎆', '✨', '🎉', '🍾', '2025', '🎆', '✨', '🎉'];
      break;
    default:
      decorationItems = ['🎊', '🎉', '✨', '🎁', '🎈', '🎊', '🎉', '✨'];
  }

  // 创建一些飘落的装饰元素
  for (let i = 0; i < 8; i++) {
    const decoration = document.createElement('div');
    decoration.className = 'fudecoration';
    decoration.style.position = 'fixed';
    decoration.style.zIndex = '9995';
    decoration.style.pointerEvents = 'none';
    decoration.style.fontSize = Math.floor(Math.random() * 20 + 20) + 'px';
    decoration.style.left = Math.random() * 100 + '%';
    decoration.style.top = '-50px';
    decoration.style.opacity = '0.7';
    decoration.style.animation = `fall ${Math.random() * 10 + 10}s linear infinite`;
    decoration.style.animationDelay = `${Math.random() * 5}s`;
    decoration.innerHTML = decorationItems[i % decorationItems.length];
    
    document.body.appendChild(decoration);
  }

  // 添加飘落动画到样式表
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fall {
      to {
        transform: translateY(105vh) rotate(${Math.random() * 360}deg);
      }
    }
  `;
  document.head.appendChild(style);
}

function addClickFireworkEffect() {
  document.addEventListener('click', function(e) {
    // 创建烟花效果
    createFirework(e.clientX, e.clientY);
  });
}

function createFirework(x, y) {
  // 创建烟花粒子
  for (let i = 0; i < 50; i++) {
    const firework = document.createElement('div');
    firework.className = 'click-firework';
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    firework.style.backgroundColor = getRandomColor();
    firework.style.width = '6px';
    firework.style.height = '6px';
    
    document.body.appendChild(firework);

    // 计算随机方向和距离
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 100 + 50;
    const duration = Math.random() * 1000 + 500;

    // 动画
    firework.animate([
      { 
        transform: `translate(0, 0)`,
        opacity: 1
      },
      { 
        transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
        opacity: 0
      }
    ], {
      duration: duration,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      fill: 'forwards'
    });

    // 移除元素
    setTimeout(() => {
      firework.remove();
    }, duration);
  }
}

function getRandomColor() {
  const colors = ['#ff4500', '#ff6347', '#ffd700', '#ff69b4', '#ff1493', '#ffa500', '#ff4500'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function showFestivalMessage(festivalType) {
  // 创建祝福弹窗
  const popup = document.createElement('div');
  popup.className = 'new-year-popup';
  
  let title = '🎉 节日快乐 🎉';
  let content = '<p>恭祝您：</p><p>身体健康，工作顺利！</p><p>家庭幸福，万事如意！</p><p>节日愉快，心想事成！</p>';
  
  switch(festivalType) {
    case 'spring_festival':
      title = '🎉 新年快乐 🎉';
      content = '<p>恭祝您：</p><p>身体健康，工作顺利！</p><p>家庭幸福，万事如意！</p><p>龙年大吉，财源广进！</p>';
      break;
    case 'national_day':
      title = '🎉 国庆快乐 🎉';
      content = '<p>欢度国庆：</p><p>祝福祖国繁荣昌盛！</p><p>人民幸福安康！</p><p>国泰民安，盛世华章！</p>';
      break;
    case 'mid_autumn':
      title = '🎑 中秋快乐 🎑';
      content = '<p>中秋祝福：</p><p>月圆人团圆！</p><p>阖家欢乐！</p><p>花好月圆夜！</p>';
      break;
    case 'new_year':
      title = '🎆 新年快乐 🎆';
      content = '<p>新年祝福：</p><p>新年新气象！</p><p>事业更辉煌！</p><p>Happy New Year！</p>';
      break;
  }
  
  popup.innerHTML = `
    <h2>${title}</h2>
    <div class="new-year-popup-content">
      ${content}
    </div>
    <button class="celebration-btn" onclick="this.parentElement.style.display='none';">好的，谢谢！</button>
  `;
  
  document.body.appendChild(popup);
  popup.style.display = 'block';
}

// 添加一个开关函数，允许手动开启/关闭节日特效
function toggleFestival() {
  const banners = document.querySelectorAll('.spring-festival-banner');
  const lanterns = document.querySelectorAll('.lantern');
  const popups = document.querySelectorAll('.new-year-popup');
  
  if (banners.length > 0) {
    // 如果已经有节日元素，则隐藏它们
    banners.forEach(el => el.style.display = 'none');
    lanterns.forEach(el => el.style.display = 'none');
    // 同时移除弹窗
    popups.forEach(el => el.remove());
  } else {
    // 否则创建春节元素（默认）
    initFestivalEffects('spring_festival', '🎊 新年快乐！恭贺新春！🎊');
  }
}