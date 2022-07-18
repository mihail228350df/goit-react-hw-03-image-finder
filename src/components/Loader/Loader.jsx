import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { LoaderStyled } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <TailSpin height="100" width="100" color="green" ariaLabel="loading" />
    </LoaderStyled>
  );
};