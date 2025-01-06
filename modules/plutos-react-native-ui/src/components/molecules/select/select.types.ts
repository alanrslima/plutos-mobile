import {Typography} from 'plutos-react-native-ui';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity``;

export const Label = styled(Typography).attrs({type: 'body-default-bold'})``;

export const Content = styled.View`
  border-width: 1.25px;
  border-color: ${({theme}) => theme.colors.borderNeutral};
  padding: ${({theme}) => theme.sizes[4]} ${({theme}) => theme.sizes[5]};
  border-radius: ${({theme}) => theme.radii.md};
`;

export const Value = styled(Typography).attrs({
  type: 'body-large',
})``;
