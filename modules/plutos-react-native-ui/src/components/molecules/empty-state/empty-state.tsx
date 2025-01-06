import {View} from 'react-native';
import {useStyles} from '../../../hooks';
import {createStyles} from './empty-state.styles';
import {Button, Spacer, Typography} from '../../atoms';

export function EmptyState() {
  const styles = useStyles(createStyles);

  return (
    <View style={styles.container}>
      <Typography style={styles.text} type="title-subsection">
        Add an account
      </Typography>
      <Typography color="onSurfaceSecondary" style={styles.text}>
        Add accounts so you are ready to register yours transactions
      </Typography>
      <Spacer h={4} />
      <Button title="Create account" full />
    </View>
  );
}
