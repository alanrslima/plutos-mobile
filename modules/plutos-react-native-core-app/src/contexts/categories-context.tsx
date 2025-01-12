import React, {useCallback} from 'react';
import {createContext, useEffect, useState} from 'react';
import {useServiceDependencies} from '../hooks/use-service-dependencies';
import {CategoryCreate, CategoryList} from '../types/categories';

type CategoriesContextType = {
  categories: CategoryList[];
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

  const fetch = useCallback(async () => {
    categoriesService.list().then(setCategories);
  }, [categoriesService]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  async function create(params: CategoryCreate) {
    categoriesService.create(params).then(fetch);
  }

  return (
    <CategoriesContext.Provider value={{categories, create}}>
      {children}
    </CategoriesContext.Provider>
  );
}
