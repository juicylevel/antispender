import { Grid } from '@mui/material';
import {
    FormContainer,
    FormContainerProps,
    TextFieldElement,
} from 'react-hook-form-mui';
import { DatePickerElement } from 'react-hook-form-mui/date-pickers';
import { DailyRecordValues } from '../model/daily-record.types';
import { datePickerTransform } from 'shared/ui/input/date-picker.lib';
import { inputNumberTransform } from 'shared/ui/input/input-number.lib';

export const DailyRecordForm: React.FC<
    FormContainerProps<DailyRecordValues>
> = (props) => {
    return (
        <FormContainer {...props}>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <DatePickerElement
                        name="recordDate"
                        label="Дата"
                        slotProps={{
                            field: {
                                fullWidth: true,
                            },
                        }}
                        format="DD.MM.YYYY"
                        required
                        rules={{
                            required: true,
                        }}
                        transform={datePickerTransform}
                    />
                </Grid>
                <Grid size={4}>
                    <TextFieldElement
                        name="litersOfBeer"
                        label="Выпито пива (литров)"
                        fullWidth
                        required
                        rules={{
                            required: true,
                        }}
                        transform={inputNumberTransform}
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
                        transform={inputNumberTransform}
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
                        transform={inputNumberTransform}
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
                        transform={inputNumberTransform}
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
                        transform={inputNumberTransform}
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
                        transform={inputNumberTransform}
                    />
                </Grid>
            </Grid>
        </FormContainer>
    );
};
