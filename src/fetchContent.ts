const fetchImage = async () => {
  const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

  const response = await fetch(`https://api.unsplash.com/photos/`, {
    headers: { Authorization: "Client-ID " + ACCESS_KEY },
  });

  const images = await response.json();

  return images;
};

export default fetchImage;
