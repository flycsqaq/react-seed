/** @format */

export interface SatisfationData {
    name: string;
    value: number;
    id: number;
}

interface LineData {
    name: string;
    value: number;
}

export interface SatisfationTotal {
    title: string;
    markLineData: LineData[];
    data: SatisfationData[];
}

export interface SatisfationTotalOption {
    title: {
        text: string;
    };
    tooltip?: {};
    legend?: {
        data: string;
    };
    xAxis?: {
        data: string[];
    };
}
