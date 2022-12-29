export const agnosticButton = (father, text, callback) => {
  const button = document.createElement("button");
  const fatherName = document.querySelector(father);
  fatherName.appendChild(button);
  button.innerHTML = `<p>${text}</p>`;
  button.addEventListener("click", () => callback());
};
