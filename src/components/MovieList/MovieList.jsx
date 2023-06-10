import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Img, Item, Title, Release } from './MovieList.styled';
import { format } from 'date-fns';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const getDate = date => {
    if (!date) return 'Who knows?';
    return format(new Date(Date.parse(date)), 'dd.MM.yyyy');
  };
  return (
    <List>
      {movies.map(({ id, titleName, src, release_date }) => {
        return (
          <Item tabIndex={1} key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Img src={src} alt={titleName} />
              <Title>{titleName}</Title>
              <Release> {getDate(release_date)}</Release>
            </Link>
          </Item>
        );
      })}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      titleName: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};
