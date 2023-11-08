import renderImages from "../src/renderContent";

import jsdom from "jsdom";
const { JSDOM } = jsdom;
const { document } = new JSDOM(`...`).window;

describe("Render images", () => {
  it("should render all images in list", () => {
    const element = document.createElement("div");
    const data = [
      { id: 1, urls: { small: "cool" }, description: "cool_stuff" },
    ];

    renderImages(data, element);
    expect(element.innerHTML).toBe(` 
    <div id="${data[0].id.toString()}" class="image-container__image">
    <img src="${data[0].urls.small}" alt="${data[0].description}">
    </div>
    `);
  });
});
