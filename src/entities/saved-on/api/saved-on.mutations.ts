import { api } from 'shared/api/axios';
import { SavedOn } from '../model/saved-on.types';

type CreateSavedOnData = Pick<SavedOn, 'beer' | 'cig'>;

export const createSavedOn = async (data: CreateSavedOnData) => {
    return await api.post('/saved-on', data);
};
