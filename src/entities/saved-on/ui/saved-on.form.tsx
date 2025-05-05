import { Grid } from '@mui/material';
import {
    FormContainer,
    FormContainerProps,
    TextFieldElement,
} from 'react-hook-form-mui';

const transformNumericValue = (value: string) => {
    const output = parseInt(value, 10);
    return isNaN(output) ? '' : output;
};

export type SavedOnFormValues = {
    beer: number;
    cig: number;
};

export const SavedOnForm: React.FC<FormContainerProps<SavedOnFormValues>> = (
    props
) => {
    return (
        <FormContainer<SavedOnFormValues> {...props}>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <TextFieldElement
                        name="beer"
                        label="Потрачено на пиво"
                        fullWidth
                        required
                        rules={{
                            required: true,
                        }}
                        transform={{
                            output: (e) => {
                                return transformNumericValue(e.target.value);
                            },
                        }}
                    />
                </Grid>
                <Grid size={12}>
                    <TextFieldElement
                        name="cig"
                        label="Потрачено на сигареты"
                        fullWidth
                        required
                        rules={{
                            required: true,
                        }}
                        transform={{
                            output: (e) => {
                                return transformNumericValue(e.target.value);
                            },
                        }}
                    />
                </Grid>
            </Grid>
        </FormContainer>
    );
};
