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
    // 那周节点添加到tHead中
    oTHead.appendChild(weekDayNode);
    // 将tHead节点添加到容器中
    container.appendChild(oTHead);

    const obj = createDateNode(year, month);
    console.log(obj);
    return container;
  }
}


export function update() {

} 