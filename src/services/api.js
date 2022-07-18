import axios from 'axios';

const API_KEY = '27489474-94b4f7a986300e41a9c081f6f';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (name, page) => {
  const res = await axios.get(
    `?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  const totalImage = res.data.totalHits;
  const images = res.data.hits;
  return {
    totalImage,
    images,
  };
};