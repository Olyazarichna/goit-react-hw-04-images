const KEY = `27598952-802517bdfa4ff8ef34e84ef82`;

export function fetchImgs(search, page) {
  return fetch(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json().then(data => {
        const imgs = data.hits;
        const image = imgs.map(img => {
          const imgObj = {
            id: img.id,
            largeImageURL: img.largeImageURL,
            webformatURL: img.webformatURL,
            tags: img.tags,
          };
          return imgObj;
        });
        return image;
      });
    }
    return Promise.reject(new Error('Something get wrong, try again'));
  });
}
const api = {
  fetchImgs,
};

export default api;
