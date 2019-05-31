import * as types from './types';

export default {
    [types.LINE_CHART_DATA]: state => {
        return state.chartDataLine;
    },
    [types.PIE_CHART_DATA]: state => {
        return state.chartDataPie;
    },
    [types.TABLE_DATA]: state => {
        return state.tableData;
    },
    [types.OPTIONS]: state => {
        return state.options;
    },
    [types.ALL_RATES]: state => {
        return state.allRates;
    }
}