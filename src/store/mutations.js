export default {
    updateDataLine(state) {
      console.log(state.dataFromBase);
      for (var i = 0; i < state.dataFromBase.length; i++) {
        for (var j = 0; j < state.dataFromBase[i].ratings.length; j++) {

          var item = state.dataFromBase[i].ratings[j];
          var date = new Date(item.Date);
          var hours = date.getHours();
          
          var rating = i + 1;

          state.chartDataRowsLine[hours][rating] = state.chartDataRowsLine[hours][rating] + 1;

        }
      }

      console.log(state.chartDataRowsLine);

      state.updatedChartDataLine = state.chartDataRowsLine;
    },

    updateDataPie(state) {
      
      for (var i = 0; i < state.dataFromBase.length; i++) {
        state.chartDataRowsPie[i][1] = state.dataFromBase[i].ratings.length;
      }

      if(state.dataFromBase.length == 0) {
        state.chartDataRowsPie[0][1] = 0;
        state.chartDataRowsPie[1][1] = 0;
        state.chartDataRowsPie[2][1] = 0;
        state.chartDataRowsPie[3][1] = 0;
        state.chartDataRowsPie[4][1] = 0;
      }

      console.log(state.chartDataRowsPie);

      state.updatedChartDataPie = state.chartDataRowsPie;
    },

    updateData(state, dataRequest) {
      state.dataFromBase = dataRequest.data;
    }
  };