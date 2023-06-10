import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Loader, Movie } from 'components';
import { fetchMovie } from 'services/movieAPI/movieAPI';
import { GiReturnArrow } from 'react-icons/gi';
import {
  ExtraInfo,
  LinkList,
  LinkStyled,
  StyledLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const backUpLinkRef = useRef(location.state?.from ?? '/movies');

  const [movieData, setMovieData] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    fetchMovie(Number(movieId))
      .then(setMovieData)
      .catch(console.log)
      .finally(() => setShowLoader(false));
  }, [movieId]);

  return (
    <section>
      <LinkStyled to={backUpLinkRef.current}>
        <GiReturnArrow />
      </LinkStyled>
      {showLoader && <Loader visible={showLoader} />}
      {movieData && <Movie movieData={movieData} />}
      <ExtraInfo>Additionally</ExtraInfo>
      <LinkList>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </LinkList>
      <Suspense fallback={<div>Wait</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetails;
