import { Formik } from 'formik';
import PropTypes from 'prop-types';

import { HeaderStyled, FormStyled, InputStyled } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <HeaderStyled className="searchbar">
      <Formik
        initialValues={{ name: '' }}
        onSubmit={values => {
          onSubmit(values);
        }}
      >
        <FormStyled className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <InputStyled
            name="name"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </FormStyled>
      </Formik>
    </HeaderStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};