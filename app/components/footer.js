export const insertFooter = () => {
  const footer = document.createElement("footer");
  const app = document.querySelector("#app");
  app.appendChild(footer);
  footer.innerHTML = "<p>el footer</p>";
};
