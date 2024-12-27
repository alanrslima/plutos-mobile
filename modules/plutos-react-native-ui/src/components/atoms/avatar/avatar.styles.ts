import styled from 'styled-components/native';

export const AvatarContainer = styled.View`
  height: 54px;
  width: 54px;
  border-radius: ${({theme}) => theme.radii.round};
  overflow: hidden;
`;

export const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
`;
