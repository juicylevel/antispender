import { queryOptions } from '@tanstack/react-query';
import { api } from 'shared/api/axios';
import { DailyRecord } from '../model/daily-record.types';

export const dailyRecordQueries = {
    all: () => ['daily-record'] as const,
    lists: () => [...dailyRecordQueries.all(), 'list'] as const,
    list: () =>
        queryOptions({
            queryKey: [...dailyRecordQueries.lists()],
            queryFn: () =>
                api
                    .get<DailyRecord[]>('/daily-record', {
                        params: {
                            sortBy: '`recordDate`desc',
                        },
                    })
                    .then((res) => res.data),
        }),
};
