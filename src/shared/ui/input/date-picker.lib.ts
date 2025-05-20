import dayjs from 'dayjs';
import { DatePickerElementProps } from 'react-hook-form-mui/date-pickers';
import { ISO_DATE } from 'shared/config/date';

export const datePickerTransform: DatePickerElementProps['transform'] = {
    input: (value) => {
        return dayjs(value);
    },
    output: (value) => {
        return dayjs(value).format(ISO_DATE);
    },
};
