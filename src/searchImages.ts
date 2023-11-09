const searchImages = async (query: string) => {
  if (query === "") {
    query = "dogs";
  }

  const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}`,
    {
      headers: { Authorization: "Client-ID " + ACCESS_KEY },
    }
  );

  const images = await response.json();

  return images.results;
};

export default searchImages;
