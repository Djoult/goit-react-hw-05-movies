import styled from '@emotion/styled';

export const OutsideWrap = styled.div`
  display: flex;
  gap: 24px;
  padding: 16px;
  background-color: #1a217a;
  border-radius: 16px;
`;

export const ImgWrap = styled.div``;

export const Img = styled.img`
  width: 350px;
  height: 400px;
  /* object-fit: cover; */
`;

export const InsideWrap = styled.div`
  font-size: 16px;
  color: white;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 4px;

  font-size: 32px;
  color: white;
`;
export const Year = styled.p`
  margin-bottom: 8px;
`;

export const Span = styled.span`
  color: #c8c82f;
  color: ${props => props.rating > 60 && 'green'};
  color: ${props => Number(props.rating) < 45 && 'red'};
`;

export const SubTitle = styled.h3`
  margin-top: 16px;
  margin-bottom: 4px;
`;

export const List = styled.ul`
  display: flex;
  gap: 8px;
  color: #2bc098;
`;
