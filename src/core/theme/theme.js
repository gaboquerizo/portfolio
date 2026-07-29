'use strict';

const THEME_STORAGE_KEY = 'prefers-color-scheme';

export const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
};

export function getStoredTheme() {
    return localStorage.getItem(THEME_STORAGE_KEY);
}

export function getSystemTheme() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDarkMode ? THEMES.DARK : THEMES.LIGHT;
}

export function getCurrentTheme() {
    return document.documentElement.dataset.theme || THEMES.LIGHT;
}

export function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    window.dispatchEvent(
        new CustomEvent('themechange', {
            detail: {
                theme,
            },
        }),
    );
    return theme;
}

export function initTheme() {
    const initialTheme = getStoredTheme() || getSystemTheme();
    return applyTheme(initialTheme);
}