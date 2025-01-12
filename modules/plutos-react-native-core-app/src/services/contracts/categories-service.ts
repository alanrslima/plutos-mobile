import {CategoryCreate, CategoryList} from '../../types/categories';

export interface CategoriesService {
  list(): Promise<CategoryList[]>;
  create(params: CategoryCreate): Promise<void>;
}
