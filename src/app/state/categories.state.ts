import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { GetCategories } from './categories.actions';
import { Category } from 'src/app/models/category';
import { CategoriesService } from './categories.service';

export class CategoriesStateModel {
  categories: Category[];
}

const defaults = {
  categories: []
};

@State<CategoriesStateModel>({
  name: 'categories',
  //defaults
})
@Injectable()
export class CategoriesState {

  constructor(private categories: CategoriesService) {}

  @Action(GetCategories)
  add({ getState, setState }: StateContext<CategoriesStateModel>) {

  }
}
