import { Grid } from '@mui/material';
import {
    FormContainer,
    FormContainerProps,
    TextFieldElement,
} from 'react-hook-form-mui';
import { DailyRecordValues } from '../model/daily-record.types';

const transformNumericValue = (value: string) => {
    const output = parseInt(value, 10);
    return isNaN(output) ? '' : output;
};

export const DailyRecordForm: React.FC<
    FormContainerProps<DailyRecordValues>
> = (props) => {
    return (
        <FormContainer {...props}>
            <Grid container spacing={2}>
                <Grid size={4}>
                    <TextFieldElement
                        name="litersOfBeer"
                        label="Выпито пива (литров)"
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
                <Grid size={4}>
                    <TextFieldElement
                        name="spentOnBeer"
                        label="Потрачено на пиво (руб.)"
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
                <Grid size={4}>
                    <TextFieldElement
                        name="savedOnBeer"
                        label="Сэкономлено на пиве (руб.)"
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
                <Grid size={4}>
                    <TextFieldElement
                        name="cigCount"
                        label="Выкурино"
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
                <Grid size={4}>
                    <TextFieldElement
                        name="spentOnCig"
                        label="Потрачено на сигареты (руб.)"
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
                <Grid size={4}>
                    <TextFieldElement
                        name="savedOnCig"
                        label="Сэкономлено на сигаретах (руб.)"
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
