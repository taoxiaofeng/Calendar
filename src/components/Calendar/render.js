// 导入周节点
import { createWeekDaysNode, createDateNode } from './creator';

export function render(container) {
  // table 渲染 需要 thead 和 tbody
  // 创建表格的 thead 和 tbody
  const oTHead = document.createElement('thead');
  const oTBody = document.createElement('tbody');
  const weekDayNode = createWeekDaysNode();

  oTBody.className = 'my-calendar-body';


  return function (year, month) {
    // 取出创建号的节点
    const dateTrs = createDateNode(year, month);

    // 那周节点添加到tHead中
    oTHead.appendChild(weekDayNode);

    // 把tr放到tbody 中
    dateTrs.forEach(tr => {
      oTBody.appendChild(tr);
    })

    // 将thead节点添加到容器中 
    container.appendChild(oTHead);
    // 将tbody节点添加到容器中
    container.appendChild(oTBody);

    const obj = createDateNode(year, month);
    console.log(obj);
    return container;
  }
}

// 更新日历内容
export function update(year, month) {
  const oTBody = document.querySelector('.my-calendar-body');
  const dateTrs = createDateNode(year, month);
  oTBody.innerHTML = '';


  dateTrs.forEach(tr => {
    oTBody.appendChild(tr);
  });
} 