const DARK_MODE_CHANGED = 'DARKMODE';

export default {
    get() {
        return JSON.parse(localStorage.getItem(DARK_MODE_CHANGED)) || false;
    },
    set(darkMode) {
        localStorage.setItem(DARK_MODE_CHANGED, JSON.stringify(darkMode));
    },
};
