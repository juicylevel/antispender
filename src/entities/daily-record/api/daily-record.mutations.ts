import { api } from 'shared/api/axios';
import { DailyRecordValues } from '../model/daily-record.types';

export const createDailyRecord = async (data: DailyRecordValues) => {
    return await api.post('/daily-record', data);
};

export const updateDailyRecord = async ({
    id,
    input,
}: {
    id: string;
    input: DailyRecordValues;
}) => {
    return await api.put(`/daily-record/${id}`, input);
};

export const deleteDailyRecord = async (id: string) => {
    return await api.delete(`/daily-record/${id}`);
};
