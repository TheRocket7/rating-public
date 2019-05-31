import axios from "axios";
import moment from "moment";
import * as types from './types';

export default {
  //Update data for Line and Pie chart, and data for table
  [types.MUTATE_UPDATE_DATA]: (state, payload) => {
    console.log("Datum: ", payload);
    axios({ method: "GET", "url": "http://localhost:52832/api/stats?date=" + moment(payload).format('YYYY-MM-DD') })
      .then((result) => {
        //Reset vlues
        for(let i = 0; i < state.chartDataLine.datasets.length; i++) {
          state.chartDataLine.datasets[i].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        state.chartDataPie.datasets[0].data = [0, 0, 0, 0, 0];
        for(let i = 0; i < state.tableData.rates.length; i++) {
          state.tableData.rates[i].count = 0;
          state.allRates = 0;
        }

        //Fill data if data from base exist
        if(result.data.length != 0) {
          for (var i = 0; i < result.data.length; i++) {
            console.log(result.data[i]);
            for (var j = 0; j < result.data[i].ratings.length; j++) {
    
                var item = result.data[i].ratings[j];
                var date = new Date(item.Date);
                var hours = date.getHours();
                
                var rating = i;
    
                state.chartDataLine.datasets[rating].data[hours] = state.chartDataLine.datasets[rating].data[hours] + 1;
  
            }
          }
      
          state.chartDataPie.datasets[0].data = [result.data[0].ratings.length, result.data[1].ratings.length, result.data[2].ratings.length, result.data[3].ratings.length, result.data[4].ratings.length];
      
          for(let i = 0; i < state.tableData.rates.length; i++) {
            state.tableData.rates[i].count = result.data[i].ratings.length;
            state.allRates += result.data[i].ratings.length;
          }
        }
      }, error => {
        console.error(error);
      });
  },

  //Update number of rates
  [types.UPDATE_NUMBER_OF_RATES]: (state, payload) => {
    state.settingsData.numberOfRates = Number(payload);
  },

  //Update text message
  [types.UPDATE_TEXT_MESSAGE]: (state, payload) => {
    state.settingsData.thanksMessage = payload;
  },

  //Update tumeout
  [types.UPDATE_TIMEOUT]: (state, payload) => {
    state.settingsData.modalWait = Number(payload);
  },

  //Save settings in base
  [types.SAVE_SETTINGS]: (state) => {
    axios({ method: "SET", "url": "http://localhost:52832/api/setting" })
      .then((result) => {
        console.log(result);
      });
  },

  //Load settings from base
  [types.LOAD_SETTINGS]: (state) => {
    axios({ method: "GET", "url": "http://localhost:52832/api/setting" })
      .then((result) => {
        console.log(result);
      });
  }
};