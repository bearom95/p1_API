import cleanPage from "../utils/cleanpage";

export const categoriesPage = () => {
  const maindiv = document.querySelector(".maindiv");
  cleanPage(maindiv);
  maindiv.innerHTML = "<p>pues ahora van las categories</p>";
};
