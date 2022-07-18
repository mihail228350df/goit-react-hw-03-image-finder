import PropTypes from 'prop-types';

import { ImageGalleryItemStyled } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  onClick,
}) => {
  return (
    <ImageGalleryItemStyled
      id={id}
      onClick={() => onClick(largeImageURL, tags)}
      className="gallery-item"
    >
      <img src={webformatURL} alt={tags} />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};