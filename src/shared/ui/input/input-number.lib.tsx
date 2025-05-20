import { TextFieldElementProps } from 'react-hook-form-mui';

export const inputNumberTransform: TextFieldElementProps['transform'] = {
    output: (event) => {
        const output = parseInt(event.target.value, 10);
        return isNaN(output) ? '' : output;
    },
};
