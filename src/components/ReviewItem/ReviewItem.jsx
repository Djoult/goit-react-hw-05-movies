import React from 'react';
import PropTypes from 'prop-types';
import { Content, Item, StyledIcon, Title, Wrapper } from './ReviewItem.styled';

const ReviewItem = ({ author, content }) => {
  return (
    <Item>
      <Wrapper>
        <StyledIcon
          inputcolor={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
        />
        <Title>{author}</Title>
      </Wrapper>
      <Content>{content}</Content>
    </Item>
  );
};

ReviewItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ReviewItem;
