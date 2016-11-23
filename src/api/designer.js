import mock from 'src/mock/designer';
import { toJSON } from './utils';

const apiBaseURl = 'http://localhost:3001';
const apiUrls = {
  art: term => `${apiBaseURl}/api/art?term=${term}`,
  upload: () => `${apiBaseURl}/api/upload`,
};

const constructRequest = (url, opts = {}) => {
  const appendedOpts = Object.assign({}, opts, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return fetch(url, appendedOpts);
};

const getProducts = () => new Promise((resolve) => {
  if (process.env.NODE_ENV === 'development') {
    resolve(mock.product.products);
  }
});

const uploadPhoto = data => new Promise((resolve, reject) => {
  constructRequest(apiUrls.upload(), {
    body: data,
    method: 'POST',
  })
  .then(() => {
    resolve('Done!');
  })
  .catch(err => reject(err));
});

const getArt = term => new Promise((resolve, reject) => {
  constructRequest(apiUrls.art(term))
    .then(toJSON)
    .then((data) => {
      resolve(data.icons);
    })
    .catch(err => reject(err));
});

module.exports = {
  getProducts,
  getArt,
  uploadPhoto,
};

