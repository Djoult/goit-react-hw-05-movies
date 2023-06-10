import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 195px);
  gap: 24px;
`;

export const Item = styled.li`
  font-size: 12px;
  border: 1px solid transparent;
  transition: transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    box-shadow 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    border-color 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  :hover,
  :focus {
    transform: scale(1.05);
    border-color: #958c8c;
  }
  overflow: hidden;
  border-radius: 12px;
`;

export const Img = styled.img`
  width: 195px;
  height: 225px;
  /* object-fit: cover; */
`;

export const Title = styled.h2`
  /* height: 40px; */
  padding: 6px;
  color: #0d0080;
  background-color: transparent;
`;
export const Release = styled.p`
  width: 80px;
  margin-left: auto;
  font-weight: 500;
`;
