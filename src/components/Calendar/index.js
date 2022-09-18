import { getDateInfo } from './utils';
import { render, update } from './render';
import event from './event';
import './index.scss';

export default (handler) => {
    const oContainer = document.createElement('div');
    oContainer.className = 'my-calendar';

    // 执行event
    event(oContainer, handler);

    return {
        render: render(oContainer),
        update,
        getDateInfo
    }
} 