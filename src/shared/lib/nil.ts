// если функция вернёт true, то в блоке if, в котором была вызвана эта функция,
// конструкция (value is T) приведет value к типу переданного значения T,
// исключаяя при этом undefined | null,  что предотвратит предупреждение
// 'variable' is possibly 'undefined' | 'null'

export const isDefined = <T>(value: T | undefined | null): value is T => {
    return value !== undefined && value !== null;
};

export const isFilled = <T>(value: T | undefined | null): value is T => {
    if (value === undefined || value === null) return false;

    if (typeof value === 'string') {
        return value.trim().length > 0;
    }

    if (Array.isArray(value)) {
        return value.length > 0;
    }

    if (typeof value === 'object') {
        return Object.keys(value).length > 0;
    }

    return true;
};

export const isFilledKeys = (
    value: Record<string, unknown> | undefined | null,
): value is Record<string, unknown> => {
    if (value === undefined || value === null) return false;
    return Object.keys(value).some((key) => {
        // TODO: use tech keys dictionary
        if (key === '__typename') return false;
        //
        return isDefined(value[key]);
    });
};
