import { BaseActions } from '../base/actions';
import { Comparator, TCell } from '../../types';

export interface TableActionsType {
  'sort/setColumn': {
    index: number;
    direction: 1 | -1;
    multi?: boolean;
    compare?: Comparator<TCell>;
  };

  'sort/toggleColumn': {
    index: number;
    multi?: boolean;
    compare?: Comparator<TCell>;
  };
}

export class TableActions extends BaseActions<TableActionsType> {
  sortColumn(
    index: number,
    direction: 1 | -1,
    multi?: boolean,
    compare?: Comparator<TCell>,
  ): void {
    this.dispatch('sort/setColumn', {
      index: index,
      direction: direction,
      multi: multi,
      compare: compare,
    });
  }

  sortToggle(
    index: number,
    multi?: boolean,
    compare?: Comparator<TCell>,
  ): void {
    this.dispatch('sort/toggleColumn', {
      index: index,
      multi: multi,
      compare: compare,
    });
  }
}
