import { queryOptions } from '@tanstack/react-query';
import { api } from 'shared/api/axios';
import { DailyRecord } from '../model/daily-record.types';
import dayjs from 'dayjs';
import { ISO_DATE } from 'shared/config/date';

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
                            pageSize: 100,
                            sortBy: '`recordDate`desc',
                        },
                    })
                    .then((res) => res.data),
            // TODO: format dates with backendless scripts
            select: (data) => {
                if (!data) return;
                return data.map((item) => ({
                    ...item,
                    created: dayjs(item.created).format(ISO_DATE),
                    updated: dayjs(item.updated).format(ISO_DATE),
                    recordDate: dayjs(item.recordDate).format(ISO_DATE),
                }));
            },
            //
        }),
};
