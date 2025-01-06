import CountryFlag from 'react-native-country-flag';
import styled from 'styled-components/native';

export const Container = styled(CountryFlag)<{$rounded?: boolean}>`
  border-radius: ${({$rounded, theme}) =>
    $rounded ? theme.radii.round : '0px'};
`;
