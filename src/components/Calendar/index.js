import { getDateInfo } from './utils';
import { render, update } from './render';

export default () => {
    const oContainer = document.createElement('table');
    oContainer.className = 'my-calendar';

    return {
        render,
        update,
        getDateInfo
    }
}