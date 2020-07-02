import { BaseActions } from '../../base/actions';

export interface SearchActionsType {
  'search/setKeyword': {
    keyword: string;
  };
}

export class SearchActions extends BaseActions<SearchActionsType> {
  search(keyword: string): void {
    this.dispatch('search/setKeyword', {
      keyword: keyword,
    });
  }
}
