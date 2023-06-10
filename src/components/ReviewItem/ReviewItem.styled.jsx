import styled from '@emotion/styled';
import { BsPersonFill } from 'react-icons/bs';

export const Item = styled.li``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
export const StyledIcon = styled(BsPersonFill)`
  color: ${props => props.inputcolor || 'palevioletred'};
`;

export const Title = styled.h3`
  color: #434245;
`;

export const Content = styled.p`
  color: #968787;
`;
