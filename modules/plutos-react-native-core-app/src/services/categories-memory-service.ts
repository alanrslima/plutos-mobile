import {randomUUID} from 'plutos-react-native-commun';
import {CategoryCreate, CategoryList} from '../types/categories';
import {CategoriesService} from './contracts/categories-service';

export class CategoriesMemoryService implements CategoriesService {
  public data: CategoryList[];

  constructor(mock?: CategoryList[]) {
    this.data = mock || [];
  }

  async list(): Promise<CategoryList[]> {
    return this.data;
  }

  async create(params: CategoryCreate): Promise<void> {
    this.data = [{...params, id: randomUUID()}, ...this.data];
  }
}
