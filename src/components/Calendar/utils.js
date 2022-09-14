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

/**
 * 获取 日历当月后面剩余的天数
 */
function getNextMonthRestDays(year, month) {
    const lastMonthRestDayCount = getFirstWeekDay(year, month);
    const currentMonthDayCount = getMonthDayCount(year, month);

    const nextMountRestDayCount = 42 - (lastMonthRestDayCount + currentMonthDayCount);
    let restDays = [];
    for (let i = 1; i <= nextMountRestDayCount; i++) {
        restDays.push(i);
    }
    return restDays;
}

/**
 * 获取时间信息
 */
function getDateInfo(timeStamp) {
    var date = timeStamp ? new Date(timeStamp) : new Date();

    return [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    ];
}

/**
 * 获取格式化时间
 */
function getFormatDate(year, month, date) {
     const dateArr = [year, month, date];

     for (let i = 1; i < dateArr.length; i++) {
        dateArr[i] < 10 && (dateArr[i] = '0' + dateArr[i]);
     }

     return dateArr.join('-');
}
