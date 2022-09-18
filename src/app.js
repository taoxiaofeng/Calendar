import MyCalendar from './components/Calendar';


; (() => {
    const myCalendar = MyCalendar(handler);  // 输出格式化的年月日 需要用回调传出来
    const oApp = document.querySelector('#app');
    const oYear = document.querySelector('.year');
    const oMonth = document.querySelector('.month');
    const oYearSpan = oYear.querySelector('span');
    const oMonthSpan = oMonth.querySelector('span');
    const dateInfo = myCalendar.getDateInfo();  // getDateInfo() 方法不传参 返回当前年月日

    const init = () => {
        render(...dateInfo);
        bindEvent();
    }

    function render(...args) {
        // console.log(`myCalendar -- `, myCalendar);
        // render 方法传入 年 月 日， 就在页面上渲染 哪一个月的年月日
        oApp.appendChild(myCalendar.render(...args));
    }

    function bindEvent() {
        oYear.addEventListener('click',setYear, false);
        oMonth.addEventListener('click', setMonth, false);
    }

    function handler(date) {
        console.log(`selected-date -- `, date);
    }

    function setYear(e) {
        const tar = e.target;
        const className = tar.className;
        const currentYear = Number(oYearSpan.innerText);

        if (className === 'lt' || className === 'gt') {
            switch (className) {
                case 'lt':
                    dateInfo[0] = currentYear - 1;
                    break;
                case 'gt':
                    dateInfo[0] = currentYear + 1;
                    break;
                default:
                    break;
            }

            oYearSpan.innerText = dateInfo[0];
            myCalendar.update(...dateInfo);
        }
    }


    function setMonth(e) {
        const tar = e.target;
        const className = tar.className;
        const currentMonth = Number(oMonthSpan.innerText);

        if (className === 'lt' || className === 'gt') {
            switch (className) {
                case 'lt':
                    dateInfo[1] = currentMonth - 1;
                    break;
                case 'gt':
                    dateInfo[1] = currentMonth + 1;
                    break;
                default:
                    break;
            }

            oMonthSpan.innerText = dateInfo[1];
            myCalendar.update(...dateInfo);
        }
    }

    init();

})();