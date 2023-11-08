const fetchImage = async () => {
  const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

  const response = await fetch(
    `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`
  );
  const images = await response.json();

  return images;
};

export default fetchImage;
