export enum Layout {
    FourSlots = 4,
    FiveSlots = 5,
    SixSlots = 6,
}

export interface Model {
    id: string;
    slot?: number;
}

export interface Schema {
    id: string;
    layout: Layout;
    slots: Model[]
}