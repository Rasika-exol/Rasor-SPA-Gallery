import "./style.css";
import fetchImage from "./fetchContent";
import renderImages from "./renderContent";

const imageContainerEl = document.querySelector(
  ".image-container"
) as HTMLElement;

const main = async () => {
  const data = await fetchImage();
  renderImages(data, imageContainerEl);
};

main();
