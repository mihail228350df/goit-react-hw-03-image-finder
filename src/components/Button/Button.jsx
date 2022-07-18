import PropTypes from 'prop-types';

import { ButtonStyled } from './Button.styled';

export const Button = ({ onClick, children }) => {
  return (
    <ButtonStyled onClick={onClick} type="button">
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};