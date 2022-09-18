// 导入周配置
import { WEEK_DAYS } from './config';
import { getLastMonthRestDays, getMonthDayCount, getNextMonthRestDays, getDateInfo, getFormatDate } from './utils';

// 创建 周日 周一 周二 周三 周四 周五 周六 节点
export function createWeekDaysNode() {
  const oTr = document.createElement('tr');
  oTr.className = 'week-day';

  oTr.innerHTML = WEEK_DAYS.map(item => (
    `<th>${item} </th>`
  )).join('');

  return oTr;
}

// 创建时间节点
export function createDateNode(year, month) {
  const lastMonthRestDays = getLastMonthRestDays(year, month);
  const currentMonthDayCount = getMonthDayCount(year, month);
  const nextMonthRestDays = getNextMonthRestDays(year, month);
  const dateTrArr = createDateTrs(6);

  const lastMonthRestDaysTD = createRestDaysTD(lastMonthRestDays);
  const currentMonthDaysTD = createCurrentDaysTD(currentMonthDayCount, year, month);
  const nextMonthRestDaysTD = createRestDaysTD(nextMonthRestDays);

  // return {
  // lastMonthRestDays,
  // currentMonthDayCount,
  // nextMonthRestDays,
  // lastMonthRestDaysTD,
  // currentMonthDaysTD,
  // nextMonthRestDaysTD
  // }
  const tdArr = [
    ...lastMonthRestDaysTD,
    ...currentMonthDaysTD,
    ...nextMonthRestDaysTD
  ];

  // 记步
  let index = 0;

  dateTrArr.forEach(tr => {
    for (let i = 0; i < 7; i++) {
      tr.appendChild(tdArr[index]);
      index++;
    }
  });

  return dateTrArr;
}

// 创建tr
export function createDateTrs(count) {
  const trArr = [];

  for (let i = 0; i < count; i++) {
    const oTr = document.createElement('tr');
    trArr.push(oTr);
  }

  return trArr;
}

// 创建 日历 前面几天 和 后面几天 的 td
function createRestDaysTD(restDays) {
  return restDays.map(item => {
    const oTd = document.createElement('td');
    oTd.className = 'day rest-day';
    oTd.innerText = item;

    return oTd;
  })
}

// 创建日历当月的td
function createCurrentDaysTD(currentDayCount, year, month) {
  let tdArr = [];

  const [currentYear, currentMonth, currentDate] = getDateInfo();

  for (let i = 1; i <= currentDayCount; i++) {
    const oTd = document.createElement('td');

    if (currentYear === year && currentMonth === month && currentDate === i) {
      oTd.className = 'day current-day current';
    } else {
      oTd.className = 'day current-day';
    }

    oTd.innerText = i;
    // 在td上增加一个自定义属性，把时间放在td的自定义属性上
    oTd.setAttribute('data-date', getFormatDate(year, month, i))

    tdArr.push(oTd);
  }

  return tdArr;
}

// 创建控制区域
export function createControlArea (year, month   ) {
   const oArea = document.createElement('div');
   oArea.className = 'control-area';

   oArea.innerHTML  =  `
    <span></span>
    <span></span>
    <span>
      <span></span>
      <span></span>
    </span>
    <span></span>
    <span></span>
   `;
}
