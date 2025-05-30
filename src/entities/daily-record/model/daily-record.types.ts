export type DailyRecordValues = {
    recordDate: string;
    litersOfBeer: number;
    spentOnBeer: number;
    savedOnBeer: number;
    cigCount: number;
    spentOnCig: number;
    savedOnCig: number;
};

export type DailyRecord = DailyRecordValues & {
    objectId: string;
    created: string;
    updated: string;
};
