import { agnosticButton } from "../components/button";
import { categoriesPage } from "./categories";

export const insertHome = () => {
  const maindiv = document.querySelector(".maindiv");
  maindiv.innerHTML = `
  <h1>Top products at a glance</h1>
  <h2>Several categories</h2>
  <h3>Latest release</h3>
  `;
  agnosticButton(".maindiv", "Categories", () => categoriesPage());
};
