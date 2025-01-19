import React, {useCallback} from 'react';
import {createContext, useEffect, useState} from 'react';
import {useServiceDependencies} from '../hooks/use-service-dependencies';
import {CategoryCreate, CategoryList} from '../types/categories';
import {Modal, Wrapper} from 'plutos-react-native-ui';
import {CategoryForm} from '../components/category-form/category-form';

type CategoriesContextType = {
  categories: CategoryList[];
  openCategoryForm(): void;
  create(props: CategoryCreate): Promise<void>;
};

type CategoriesProviderProps = {
  children: React.ReactNode;
};

export const CategoriesContext = createContext<CategoriesContextType | null>(
  null,
);

export function CategoriesProvider({children}: CategoriesProviderProps) {
  const {categoriesService} = useServiceDependencies();
  const [categories, setCategories] = useState<CategoryList[]>([]);
  const [showCategoryForm, setShowCategoryForm] = useState(false);

  const fetch = useCallback(async () => {
    categoriesService.list().then(setCategories);
  }, [categoriesService]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  async function create(params: CategoryCreate) {
    await categoriesService.create(params);
    fetch();
    closeCategoryForm();
  }

  function openCategoryForm() {
    setShowCategoryForm(true);
  }

  function closeCategoryForm() {
    setShowCategoryForm(false);
  }

  return (
    <CategoriesContext.Provider value={{categories, create, openCategoryForm}}>
      {children}
      <Modal
        visible={showCategoryForm}
        onRequestClose={closeCategoryForm}
        navigationHeader={{title: 'Category'}}>
        <Wrapper py={7} px={7}>
          <CategoryForm onSubmit={create} />
        </Wrapper>
      </Modal>
    </CategoriesContext.Provider>
  );
}
