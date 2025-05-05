import { queryOptions } from '@tanstack/react-query';
import { api } from 'shared/api/axios';
import { SavedOn } from '../model/saved-on.types';

export const savedOnQueries = {
    all: () => ['saved-on'] as const,
    lists: () => [...savedOnQueries.all(), 'list'] as const,
    list: () =>
        queryOptions({
            queryKey: [...savedOnQueries.lists()],
            queryFn: () =>
                api.get<SavedOn[]>('/saved-on').then((res) => res.data),
        }),
};
