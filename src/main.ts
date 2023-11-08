import "./style.css";
import fetchImage from "./fetchContent";
import renderImages from "./renderContent";
import searchImages from "./searchImages";

const imageContainerEl = document.querySelector(
  ".image-container"
) as HTMLElement;

const formEl = document.querySelector("#searchForm") as HTMLFormElement;

const main = async () => {
  const data = await fetchImage();
  renderImages(data, imageContainerEl);
};

formEl.addEventListener("submit", async (event: Event) => {
  event.preventDefault();
  const searchValue = (
    (event.target as HTMLFormElement).elements[0] as HTMLInputElement
  ).value;

  const storedDataJSON = localStorage.getItem("values");
  const storedData = storedDataJSON ? JSON.parse(storedDataJSON) : [];
  const changedData = [...storedData, searchValue];
  localStorage.setItem("values", JSON.stringify(changedData));

  const queryRes = await searchImages(searchValue);
  renderImages(queryRes, imageContainerEl);
});

main();
