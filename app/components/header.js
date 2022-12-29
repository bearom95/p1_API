export const insertHeader = (src, alt) => {
  const header = document.createElement("header");
  const app = document.querySelector("#app");
  app.appendChild(header);
  header.innerHTML = `<img src="${src}" alt="${alt}"/>`;
};
