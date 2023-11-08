const renderImages = (
  data: { id: number; urls: { small: string }; description: string }[],
  container: HTMLElement
) => {
  const template = data.map((source) => {
    return ` 
    <div id="${source.id}" class="image-container__image">
    <img src="${source.urls.small}" alt="${source.description}">
    </div>
    `;
  });

  container.innerHTML = template.join("");
};

export default renderImages;
