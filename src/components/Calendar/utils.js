/**
 * 获取当月1号是星期几？
 */

function getFirstWeekDay(year, month) {  // month 其实对应的是 manthIndex 从 0（1 月）到 11（12 月）。  0 代表一月份，1 代表二月份， 2 代表三月份
    const date = new Date(year, month -1, 1); 
    return date.getDay();
}

/**
 * 获取当月有多少天？
 */
function getMonthDayCount(year, month) {
    const date = new Date(year, month, 0);
    return date.getDate();
}
