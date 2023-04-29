export type LookupItem = {
  term: string,
  display: string
};

export type SelectedItems = {[key: string]: boolean}

export type SelectionItem = {
  id: string,
  value: string
};

export interface SelectionGetter {
  (): {[key: string]: boolean}
}

export interface ValueGetter {
  (): Array<SelectionItem>
}

export interface DropdownMultiProps {
  getSelection: SelectionGetter;
  getValues: ValueGetter;
  values: Array<SelectionItem>;
}

export interface DropdownMultiEvents {
    submit: CustomEvent<SelectedItems>;
}