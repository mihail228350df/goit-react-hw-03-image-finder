import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';

export const ImageGallery = ({ items, hendleOpenModal }) => {
  const itemsImages = items.map(item => {
    const { id, webformatURL, tags, largeImageURL } = item;
    return (
      <ImageGalleryItem
        key={id}
        id={id}
        webformatURL={webformatURL}
        tags={tags}
        largeImageURL={largeImageURL}
        onClick={hendleOpenModal}
      />
    );
  });

  return (
    <ImageGalleryStyled className="gallery">{itemsImages}</ImageGalleryStyled>
  );
};

ImageGallery.propTypes = {
  hendleOpenModal: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape),
};