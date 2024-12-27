import React from 'react';
import {AvatarContainer, AvatarImage} from './avatar.styles';
import {ImageSourcePropType} from 'react-native';

export type AvatarProps = {
  source?: ImageSourcePropType;
};

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage source={props.source} />
    </AvatarContainer>
  );
}
