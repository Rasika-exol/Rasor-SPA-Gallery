import "./style.css";

const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

// document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
// <nav class="nav">
//       <div class="nav__logo">
//         <p>Logo</p>
//       </div>
//       <div class="nav__link">
//         <p>Github Link</p>
//       </div>
//     </nav>
//     <main>
//       <search class="search">
//         <icon class="search__icon"></icon>
//         <input class="search__input" type="text" />
//       </search>
//       <content class="image-container">

//       </content>
//       <div class="menu-buttons">
//         <button class="menu-buttons__button">Prev</button
//         ><button class="menu-buttons__button">Next</button>
//       </div>
//     </main>
// `;

const imageContainerEl = document.querySelector(
  ".image-container"
) as HTMLElement;

const fetchImage = async () => {
  const response = await fetch(
    `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`
  );
  const images = await response.json();
  console.log(images);

  return images;
};

const renderImages = (
  data: [{ id: number; urls: { small: string }; description: string }]
) => {
  const template = data.map((source) => {
    return ` 
    <div id=${source.id} class="image-container__image">
    <img src=${source.urls.small} alt=${source.description} />
    </div>
    `;
  });

  imageContainerEl.innerHTML = template.join("");
};

const main = async () => {
  const data = await fetchImage();
  renderImages(data);
};

main();
