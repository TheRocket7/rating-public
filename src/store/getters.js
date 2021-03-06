import * as types from './types';

export default {
    [types.SETTINGS_DATA]: state => {
        return state.settingsData;
    },
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
    },
    [types.VALIDATION_RULES_NUMBER_OF_RATINGS]: state => {
        return state.numberOfRatesRules;
    },
    [types.VALIDATION_RULES_MESSAGE_TEXT]: state => {
        return state.messageTextRules;
    },
    [types.VALIDATION_RULES_TIMEOUT]: state => {
        return state.timeoutRules;
    }
}