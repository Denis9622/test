import { initSliders } from './slider-init.js';

document.addEventListener('DOMContentLoaded', () => {
  const loadElements = document.querySelectorAll('load[src]');

  loadElements.forEach(async loadElement => {
    const src = loadElement.getAttribute('src');

    try {
      const response = await fetch(src);
      if (!response.ok) throw new Error(`Failed to fetch ${src}`);

      const content = await response.text();
      const wrapper = document.createElement('div');
      wrapper.innerHTML = content;

      // Заменяем <load> на загруженный контент
      loadElement.replaceWith(wrapper);

      // Если загружается слайдер, инициализируй слайдеры
      if (src.includes('slider.html') || src.includes('dobiti.html')) {
        initSliders(); // Вызов функции инициализации
      }
    } catch (error) {
      console.error('Error loading file:', error);
    }
  });
});
