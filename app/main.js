import { insertFooter } from "./components/footer";
import { insertHeader } from "./components/header";
import { insertHome } from "./pages/home";
import "./style.css";

const src =
  "https://res.cloudinary.com/dbdj2oecy/image/upload/v1672334522/Amazon_logo_aklkhu.svg";
const alt = "logo";

insertHeader(src, alt);

const maindiv = document.createElement("div");
app.appendChild(maindiv);
maindiv.classList.add("maindiv");

insertHome();
insertFooter();
