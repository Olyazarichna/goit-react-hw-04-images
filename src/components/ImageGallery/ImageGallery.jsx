import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
const ImageGallery = ({ imgs, onClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {imgs.map(img => {
        return (
          <ImageGalleryItem
            key={img.id}
            src={img.webformatURL}
            largeImageURL={img.largeImageURL}
            onClick={onClick}
            alt={img.tags}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    }).isRequired
  ),
  onClick: PropTypes.func.isRequired,
};
