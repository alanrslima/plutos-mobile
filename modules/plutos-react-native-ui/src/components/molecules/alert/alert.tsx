import {View} from 'react-native';
import {Button, ButtonProps, Typography} from '../../atoms';
import {useStyles} from '../../../hooks';
import {createStyles} from './alert.styles';

export type AlertProps = {
  title?: string;
  message: string;
  actionButton?: ButtonProps;
};

export function Alert() {
  const styles = useStyles(createStyles);

  return (
    <View style={styles.container}>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, aut
        quaerat. Ea tenetur architecto beatae debitis quaerat alias cumque optio
        quos repellendus quo dolor, fugiat exercitationem mollitia libero
        aspernatur! Excepturi.
      </Typography>
      <Button title="Add money" variant="tertiary" fit />
    </View>
  );
}
