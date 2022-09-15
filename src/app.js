import MyCalendar from './components/Calendar';


; (() => {
    const myCalendar = MyCalendar();
    const oApp = document.querySelector('#app');
    const dateInfo = myCalendar.getDateInfo();  // getDateInfo() 方法不传参 返回当前年月日

    const init = () => {
        render(dateInfo);
    }

    function render(...args) {
        oApp.appendChild(MyCalendar.render(...args));
    }

    init();

})();