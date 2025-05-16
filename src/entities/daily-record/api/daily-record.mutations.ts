import { api } from 'shared/api/axios';
import { DailyRecordValues } from '../model/daily-record.types';

export const createDailyRecord = async (data: DailyRecordValues) => {
    return await api.post('/daily-record', data);
};

export const updateDailyRecord = async (data: DailyRecordValues) => {
    return await api.put('/daily-record', data);
};

export const deleteDailyRecord = async (id: string) => {
    return await api.delete('/daily-record', { params: { objectId: id } });
};
