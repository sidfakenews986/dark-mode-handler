import { isDarkModeEnabled, enableDarkMode, disableDarkMode } from './index.js';

document.addEventListener('DOMContentLoaded', () => {
    if (isDarkModeEnabled()) {
        enableDarkMode();
    }

    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', () => {
        if (isDarkModeEnabled()) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
});
