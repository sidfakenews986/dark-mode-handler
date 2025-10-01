const DARK_MODE_KEY = 'darkModeEnabled';

export function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem(DARK_MODE_KEY, 'true');
}

export function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem(DARK_MODE_KEY, 'false');
}

export function isDarkModeEnabled() {
    return localStorage.getItem(DARK_MODE_KEY) === 'true';
}

export function toggleDarkMode() {
    if (isDarkModeEnabled()) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}
