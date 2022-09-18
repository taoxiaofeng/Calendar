// 通过事件代理 点击容器时 代理到点击的元素

// 外部存储一个target
let target = null;
export default (container, handler) => {
  // 绑定事件处理函数
  container.addEventListener('click', function (e) {

    const tar = e.target;
    const className = tar.className;

    if (className.includes('current-day')) {
      if (target) {
        target.className = target.className.replace(' selected', '');
      }
      target = tar;
      tar.className += ' selected';
      
      handler && handler(tar.dataset.date);  
    }
  }, false)
} 