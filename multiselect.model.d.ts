export interface IDropdownSettings {
    singleSelection?: boolean;
    allowAddChoice?: boolean;
    idField?: string;
    textField?: string;
    enableCheckAll?: boolean;
    selectAllText?: string;
    unSelectAllText?: string;
    allowSearchFilter?: boolean;
    clearSearchFilter?: boolean;
    maxHeight?: number;
    itemsShowLimit?: number;
    limitSelection?: number;
    searchPlaceholderText?: string;
    noDataAvailablePlaceholderText?: string;
    closeDropDownOnSelection?: boolean;
    showSelectedItemsAtTop?: boolean;
}
export declare class ListItem {
    id: String;
    text: String;
    constructor(source: any);
}
