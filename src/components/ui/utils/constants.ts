export enum SIZES {
    XS = 'xs',
    SM = 'sm',
    MD = 'md',
    LG = 'lg',
}

export const CONTROL_SIZES = {
    [SIZES.XS]: 7,
    [SIZES.SM]: 9,
    [SIZES.MD]: 11,
    [SIZES.LG]: 14,
}

export const LAYOUT = {
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
    INLINE: 'inline',
}

export const DIRECTIONS = {
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left',
}

export const SELECTION_MODES = {
    YEAR: 'year',
    MONTH: 'month',
    DAY: 'day',
}

export const PICKER_VIEWS = {
    YEAR: 'year',
    MONTH: 'month',
    DATE: 'date',
}

export const STATUS = {
    DANGER: 'danger',
    SUCCESS: 'success',
    WARNING: 'warning',
}

export const STEPS_STATUS = {
    COMPLETE: 'complete',
    PENDING: 'pending',
    IN_PROGRESS: 'in-progress',
    ERROR: 'error',
}

export const PLACEMENT = {
    TOP_START: 'top-start',
    TOP_CENTER: 'top-center',
    TOP_END: 'top-end',
    BOTTOM_START: 'bottom-start',
    BOTTOM_CENTER: 'bottom-center',
    BOTTOM_END: 'bottom-end',
    MIDDLE_START_TOP: 'middle-start-top',
    MIDDLE_START_BOTTOM: 'middle-start-bottom',
    MIDDLE_END_TOP: 'middle-end-top',
    MIDDLE_END_BOTTOM: 'middle-end-bottom',
}

export const DROPDOWN_ITEM_TYPE: Record<
    string,
    'default' | 'header' | 'divider' | 'custom'
> = {
    DEFAULT: 'default',
    HEADER: 'header',
    DIVIDER: 'divider',
    CUSTOM: 'custom',
}

export const  fontSize = {
    font10: "text-[10px]",
    font11: "text-[11px]",
    font12: "text-[12px]",
    font13: "text-[13px]",
    font14: "text-[14px]",
    font15: "text-[15px]",
    font16: "text-[16px]",
    font17: "text-[17px]",
    font18: "text-[18px]",
    font19: "text-[19px]",
    font20: "text-[20px]"
}


export const DAY_DURATION = 86400000
