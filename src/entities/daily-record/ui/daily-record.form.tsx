import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import {
    FormContainer,
    FormContainerProps,
    TextFieldElement,
    useFormContext,
    useWatch,
} from 'react-hook-form-mui';
import { DatePickerElement } from 'react-hook-form-mui/date-pickers';
import { DailyRecordValues } from '../model/daily-record.types';
import { datePickerTransform } from 'shared/ui/input/date-picker.lib';
import { inputNumberTransform } from 'shared/ui/input/input-number.lib';
import { CheckOutlined, SportsBarOutlined } from '@mui/icons-material';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { isDefined } from 'shared/lib/nil';

enum FormMode {
    SPENDING = 'SPENDING',
    NO_SPENDING = 'NO_SPENDING',
}

const CalcSpentOnBeer = () => {
    const { setValue, formState } = useFormContext<DailyRecordValues>();
    const prevValue = useRef(formState.defaultValues?.litersOfBeer);
    const litersOfBeer = useWatch<DailyRecordValues>({
        name: 'litersOfBeer',
    }) as number;

    useEffect(() => {
        if (isDefined(litersOfBeer) && litersOfBeer !== prevValue.current) {
            const newSpentOnBeer = Math.round(litersOfBeer * 275);
            setValue('spentOnBeer', newSpentOnBeer);
            prevValue.current = newSpentOnBeer;
        }
    }, [litersOfBeer, setValue]);

    return null;
};

const CalcSpentOnCig = () => {
    const { setValue, formState } = useFormContext<DailyRecordValues>();
    const prevValue = useRef(formState.defaultValues?.cigCount);
    const cigCount = useWatch<DailyRecordValues>({
        name: 'cigCount',
    }) as number;

    useEffect(() => {
        if (isDefined(cigCount) && cigCount !== prevValue.current) {
            const newSpentOnCig = Math.round(cigCount * (270 / 20));
            setValue('spentOnCig', newSpentOnCig);
            prevValue.current = newSpentOnCig;
        }
    }, [cigCount, setValue]);

    return null;
};

const defaultValuesByMode: Record<
    FormMode,
    Omit<DailyRecordValues, 'recordDate'>
> = {
    [FormMode.NO_SPENDING]: {
        litersOfBeer: 0,
        spentOnBeer: 0,
        cigCount: 0,
        spentOnCig: 0,
        savedOnBeer: 550,
        savedOnCig: Math.round(7 * (270 / 20)),
    },
    [FormMode.SPENDING]: {
        litersOfBeer: 0,
        spentOnBeer: 0,
        cigCount: 0,
        spentOnCig: 0,
        savedOnBeer: 0,
        savedOnCig: 0,
    },
};

const ChangeModeHandler: React.FC<{ mode?: FormMode }> = ({ mode }) => {
    const { setValue } = useFormContext<DailyRecordValues>();
    const prevMode = useRef(mode);

    useEffect(() => {
        if (isDefined(mode) && mode !== prevMode.current) {
            const defaultValues = defaultValuesByMode[mode];
            Object.entries(defaultValues).forEach(([key, value]) => {
                setValue(key as keyof DailyRecordValues, value);
            });

            prevMode.current = mode;
        }
    }, [mode, setValue]);

    return null;
};

const getModeByValues = (values?: DailyRecordValues): FormMode | undefined => {
    if (!isDefined(values)) return;

    return values.spentOnBeer > 0 || values.spentOnCig > 0
        ? FormMode.SPENDING
        : FormMode.NO_SPENDING;
};

export const DailyRecordForm: React.FC<
    FormContainerProps<DailyRecordValues>
> = (props) => {
    const [mode, setMode] = useState<FormMode | undefined>(() => {
        return getModeByValues(props.defaultValues as DailyRecordValues);
    });

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
                        <CalcSpentOnBeer />
                        <CalcSpentOnCig />
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
            <ChangeModeHandler mode={mode} />
        </FormContainer>
    );
};
