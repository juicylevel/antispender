import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import {
    FormContainer,
    FormContainerProps,
    TextFieldElement,
} from 'react-hook-form-mui';
import { DatePickerElement } from 'react-hook-form-mui/date-pickers';
import { DailyRecordValues } from '../model/daily-record.types';
import { datePickerTransform } from 'shared/ui/input/date-picker.lib';
import { inputNumberTransform } from 'shared/ui/input/input-number.lib';
import { CheckOutlined, SportsBarOutlined } from '@mui/icons-material';
import { MouseEvent, useState } from 'react';

enum FormMode {
    SPENDING = 'SPENDING',
    NO_SPENDING = 'NO_SPENDING',
}

export const DailyRecordForm: React.FC<
    FormContainerProps<DailyRecordValues>
> = (props) => {
    const [mode, setMode] = useState<FormMode>(FormMode.NO_SPENDING);
    const handleChangeMode = (
        _: MouseEvent<HTMLElement>,
        newMode: FormMode,
    ) => {
        setMode(newMode);
    };
    return (
        <FormContainer {...props}>
            <Grid container spacing={3}>
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
                <Grid size={12}>
                    <ToggleButtonGroup
                        value={mode}
                        exclusive
                        onChange={handleChangeMode}
                    >
                        <ToggleButton
                            value={FormMode.NO_SPENDING}
                            color="success"
                        >
                            <CheckOutlined /> Трат не было
                        </ToggleButton>
                        <ToggleButton value={FormMode.SPENDING} color="error">
                            <SportsBarOutlined /> Траты были
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                {mode === FormMode.SPENDING && (
                    <>
                        <Grid size={6}>
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
                        <Grid size={6}>
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
                        <Grid size={6}>
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
                        <Grid size={6}>
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
                    </>
                )}
                {mode === FormMode.NO_SPENDING && (
                    <>
                        <Grid size={6}>
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
                        <Grid size={6}>
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
                    </>
                )}
            </Grid>
        </FormContainer>
    );
};
