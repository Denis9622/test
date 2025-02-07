// load.js
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

      // Replace <load> tag with fetched content
      loadElement.replaceWith(wrapper);
    } catch (error) {
      console.error('Error loading file:', error);
      loadElement.replaceWith(
        `<div class="load-error">Error loading ${src}</div>`
      );
    }
  });
});
