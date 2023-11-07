import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<nav class="nav">
      <div class="nav__logo">
        <p>Logo</p>
      </div>
      <div class="nav__link">
        <p>Github Link</p>
      </div>
    </nav>
    <main>
      <search class="search">
        <icon class="search__icon"></icon>
        <input class="search__input" type="text" />
      </search>
      <content class="image-container">
        <div class="image-container__image">
          <img src="https://picsum.photos/300/200" alt="image 1" />
        </div>
        <div class="image-container__image">
          <img src="https://picsum.photos/300/200" alt="image 2" />
        </div>
        <div class="image-container__image">
          <img src="https://picsum.photos/300/200" alt="image 3" />
        </div>
        <div class="image-container__image">
          <img src="https://picsum.photos/300/200" alt="image 4" />
        </div>
        <div class="image-container__image">
          <img src="https://picsum.photos/300/200" alt="image 5" />
        </div>
        <div class="image-container__image">
          <img src="https://picsum.photos/300/200" alt="image 6" />
        </div>
        <div class="image-container__image">
          <img src="https://picsum.photos/300/200" alt="image 7" />
        </div>
        <div class="image-container__image">
          <img src="https://picsum.photos/300/200" alt="image 8" />
        </div>
        <div class="image-container__image">
          <img src="https://picsum.photos/300/200" alt="image 9" />
        </div>
        <div class="image-container__image">
          <img src="https://picsum.photos/300/200" alt="image 10" />
        </div>
      </content>
      <div class="menu-buttons">
        <button class="menu-buttons__button">Prev</button
        ><button class="menu-buttons__button">Next</button>
      </div>
    </main>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
