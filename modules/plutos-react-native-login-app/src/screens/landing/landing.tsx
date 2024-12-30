import React from 'react';
import {
  Button,
  ScreenContainer,
  Spacer,
  Typography,
} from 'plutos-react-native-ui';
import {Content, WrapperButton} from './landing.styles';
import LandingImage from '../../assets/images/landing.jpg';
import {useNavigation} from '@react-navigation/native';

export function LandingScreen() {
  const navigation = useNavigation();

  return (
    <ScreenContainer bgSource={LandingImage} type="view" bgColor="secondary">
      <Content>
        <Typography color="whiteA900" type="display-medium">
          Manage your finances{' '}
          <Typography type="display-medium" color="primary">
            simply
          </Typography>
        </Typography>
        <Spacer h={7} />
        <WrapperButton>
          <Button
            title="Get started"
            onPress={() => navigation.navigate('SignIn')}
            trailingIcon="ArrowRight"
            size="xl"
          />
        </WrapperButton>
      </Content>
    </ScreenContainer>
  );
}
