/**
 * 获取当月1号是星期几？
 */

function getFirstWeekDay(year, month) {  // month 其实对应的是 manthIndex 从 0（1 月）到 11（12 月）。  0 代表一月份，1 代表二月份， 2 代表三月份
    const date = new Date(year, month - 1, 1);
    return date.getDay();
}

/**
 * 获取当月有多少天？
 */
function getMonthDayCount(year, month) {
    const date = new Date(year, month, 0);
    return date.getDate();
}

/**
 * 获取 日历当月前面剩余的天数
 */
function getLastMonthRestDays(year, month) {
    const days = getFirstWeekDay(year, month);
    let lastDate = getMonthDayCount(year, month - 1); // 获取上一个月最后一天
    const restDays = [];

    while (restDays.length < days) {
        restDays.push(lastDate--);
    };

    return restDays.reverse();
}
