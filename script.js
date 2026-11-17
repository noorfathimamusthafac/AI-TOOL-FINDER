/**
 * AI Tool Finder - Step 1: Initial Setup
 * Theme Management (Light / Dark Mode with LocalStorage)
 */

const THEME_STORAGE_KEY = 'ai_tool_finder_theme';

function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn?.querySelector('.theme-icon');
  const themeText = themeToggleBtn?.querySelector('.theme-text');

  // Check saved preference or system preference
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  // Apply current theme
  applyTheme(currentTheme, themeIcon, themeText);

  // Toggle listener
  themeToggleBtn?.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme, themeIcon, themeText);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  });
}

function applyTheme(theme, iconEl, textEl) {
  document.documentElement.setAttribute('data-theme', theme);
  if (iconEl && textEl) {
    if (theme === 'dark') {
      iconEl.textContent = '☀️';
      textEl.textContent = 'Light Mode';
    } else {
      iconEl.textContent = '🌙';
      textEl.textContent = 'Dark Mode';
    }
  }
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  console.log('⚡ AI Tool Finder - Step 1 Initialized successfully.');
});
