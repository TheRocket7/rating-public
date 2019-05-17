export default {
    updateDataLine(state) {
      state.updatedChartDataLine = state.chartDataRowsLine.map(row => {
        return row.map((item, index) => {
          if (index !== 0) {
            const max = item + 1000;
            const min = 0;
            return Math.floor(Math.random() * (max - min)) + min;
          }
          return item;
        });
      });
    },
    updateDataPie(state) {
      console.log(state);
      state.updatedChartDataPie = state.chartDataRowsPie.map(row => {
        return row.map((item, index) => {
          if (index !== 0) {
            const max = item + 1000;
            const min = 0;
            return Math.floor(Math.random() * (max - min)) + min;
          }
          return item;
        });
      });
    },
    updateDate(state, date) {
      state.dateForData = date;
    }
  };