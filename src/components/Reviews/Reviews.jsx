import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/movieAPI/movieAPI';
import { ReviewItem } from 'components';
import { List, NoInfo } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId)
      .then(data => {
        setReviews(data);
      })
      .catch(console.log);
  }, [movieId]);
  return (
    <>
      {reviews.length ? (
        <List>
          {reviews.map(review => (
            <ReviewItem key={review.id} {...review} />
          ))}
        </List>
      ) : (
        <NoInfo>There are not any reviews for this movie yet </NoInfo>
      )}
    </>
  );
};

export default Reviews;
