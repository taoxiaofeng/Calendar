import MyCalendar from './components/Calendar';


;(() => {
    const myCalendar = MyCalendar();  // 输出格式化的年月日 需要用回调传出来
    const oApp = document.querySelector('#app');
    const dateInfo = myCalendar.getDateInfo();  // getDateInfo() 方法不传参 返回当前年月日

    const init = () => {
        render(...dateInfo);
    }

    function render(...args) {
        // console.log(`myCalendar -- `, myCalendar);
        // render 方法传入 年 月 日， 就在页面上渲染 哪一个月的年月日
        oApp.appendChild(myCalendar.render(...args));
    }

    init();

})();