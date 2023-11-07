import "./style.css";
import fetchImage from "./fetchContent";
import renderImages from "./renderContent";
import searchImages from "./searchImages";
const imageContainerEl = document.querySelector(
  ".image-container"
) as HTMLElement;

const searchButtonEl = document.querySelector(
  "#search_button"
) as HTMLButtonElement;

const main = async () => {
  const data = await fetchImage();
  renderImages(data, imageContainerEl);
};

searchButtonEl.addEventListener("click", async () => {
  const queryRes = await searchImages();
  renderImages(queryRes, imageContainerEl);
});
main();
