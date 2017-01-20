export enum MenuItemType
{
    OldTestament,
    NewTestament,
    Extras
}

/**
 * An item in the main menu
 */
export class MenuItem {
    readonly type: MenuItemType;
    readonly text: string;

    constructor(type: MenuItemType, text: string) {
        this.type = type;
        this.text = text;
    }
}