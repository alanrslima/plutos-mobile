import React from 'react';
import {FlatList, FlatListProps} from 'react-native';

export type ListProps<T> = FlatListProps<T>;

export function List<T>(props: ListProps<T>) {
  return <FlatList {...props} />;
}
