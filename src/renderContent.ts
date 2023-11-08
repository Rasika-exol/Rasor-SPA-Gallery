const renderImages = (
  data: { id: number; urls: { small: string }; description: string }[],
  container: HTMLElement
) => {
  let text = "";
  data.forEach((source) => {
    text += ` 
    <div id="${source.id}" class="image-container__image">
    <img src="${source.urls.small}" alt="${source.description}">
    </div>
    `;
  });

  container.innerHTML = text;
};

export default renderImages;
