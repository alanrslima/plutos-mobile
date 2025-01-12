import {View} from 'react-native';
import {useStyles} from '../../../hooks';
import {createStyles} from './empty-state.styles';
import {Button, ButtonProps, Spacer, Typography} from '../../atoms';

export type EmptyStateProps = {
  title: string;
  description: string;
  actionButton: ButtonProps;
};

export function EmptyState(props: EmptyStateProps) {
  const styles = useStyles(createStyles);

  return (
    <View style={styles.container}>
      <Typography style={styles.text} type="title-subsection">
        {props.title}
      </Typography>
      <Typography color="onSurfaceSecondary" style={styles.text}>
        {props.description}
      </Typography>
      <Spacer h={4} />
      <Button {...props.actionButton} full />
    </View>
  );
}
