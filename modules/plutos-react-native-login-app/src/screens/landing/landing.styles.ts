import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  padding: ${({theme}) => theme.spaces[7]};
  justify-content: flex-end;
`;

export const WrapperButton = styled.View`
  align-items: flex-end;
`;
