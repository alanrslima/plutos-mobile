import React from 'react';
import {
  EmptyState,
  NavigationHeader,
  NavigationLine,
  ScreenContainer,
  Wrapper,
} from 'plutos-react-native-ui';
import {useCategories} from '../../hooks/use-categories';
import {useNavigation} from '@react-navigation/native';

export function CategoriesScreen() {
  const {categories, openCategoryForm} = useCategories();
  const navigate = useNavigation();

  function onPressCategory() {}

  return (
    <ScreenContainer
      withoutTopSpace
      header={
        <NavigationHeader
          title="Categories"
          leftButtons={[{onPress: navigate.goBack, icon: 'ArrowLeft'}]}
          rightButtons={[{onPress: openCategoryForm, icon: 'Plus'}]}
        />
      }>
      <Wrapper px={7} py={7}>
        {!categories.length ? (
          <EmptyState
            title="Add a category"
            description="Include categories to organize yours transactions"
            actionButton={{title: 'Create category', leadingIcon: 'Plus'}}
          />
        ) : (
          <>
            {categories.map(category => (
              <Wrapper px={3} key={category.id}>
                <NavigationLine
                  onPress={onPressCategory}
                  leadingIcon="Tag"
                  title={category.name}
                />
              </Wrapper>
            ))}
          </>
        )}
      </Wrapper>
    </ScreenContainer>
  );
}
