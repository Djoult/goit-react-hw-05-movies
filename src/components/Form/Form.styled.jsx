import styled from '@emotion/styled';

export const StyledForm = styled.form`
  margin-bottom: 32px;
  display: flex;
`;

export const Input = styled.input`
  display: inline-block;
  padding: 8px;
  border-radius: 1px;
  width: 200px;
  font-family: inherit;
  font-size: 14px;
  transition: box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover,
  :focus {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  height: 40px;
  width: 40px;
  font-weight: 700;

  color: white;
  background-color: #4e4ebc;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover,
  :focus {
    background-color: #299cb9;
    color: #140707;
  }
`;
