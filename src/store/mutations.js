export default {
    updateDataLine(state) {
      let result = [
        {
          RatingValueId: 1,
          Value: 'Great',
          ratings: [
            {
              RatingId: 1,
              RatingValueId: 1,
              User: 'Sale',
              Date: '2019-05-20 07:00'
            },
                  {
              RatingId: 5,
              RatingValueId: 1,
              User: 'Sale',
              Date: '2019-05-20 08:00'
            },
                  {
              RatingId: 6,
              RatingValueId: 1,
              User: 'Sale',
              Date: '2019-05-20 09:00'
            }
          ]
        },
          {
          RatingValueId: 2,
          Value: 'Good',
          ratings: [
            {
              RatingId: 2,
              RatingValueId: 2,
              User: 'Sale',
              Date: '2019-05-20 10:00'
            }
          ]
        },
          {
          RatingValueId: 3,
          Value: 'Meh',
          ratings: [
            {
              RatingId: 3,
              RatingValueId: 3,
              User: 'Sale',
              Date: '2019-05-20 11:00'
            }
          ]
        },	
        {
          RatingValueId: 4,
          Value: 'Bad',
          ratings: [
            {
              RatingId: 4,
              RatingValueId: 5,
              User: 'Sale',
              Date: '2019-05-20 06:00'
            }
          ]
        },
          {
          RatingValueId: 5,
          Value: 'Awfull',
          ratings: []
        }
      ];

      for (var i = 0; i < result.length; i++) {
        for (var j = 0; j < result[i].ratings.length; j++) {

          var item = result[i].ratings[j];
          var date = new Date(item.Date);
          var hours = date.getHours();
          
          var rating = i + 1;

          state.chartDataRowsLine[hours][rating] = state.chartDataRowsLine[hours][rating] + 1;

        }
      }

      console.log(state.chartDataRowsLine);

      state.updatedChartDataLine = state.chartDataRowsLine;

      console.log(state.updatedChartDataLine);
    },
    updateDataPie(state) {
      let result = [
        {
          RatingValueId: 1,
          Value: 'Great',
          ratings: [
            {
              RatingId: 1,
              RatingValueId: 1,
              User: 'Sale',
              Date: '2019-05-20 07:00'
            },
                  {
              RatingId: 5,
              RatingValueId: 1,
              User: 'Sale',
              Date: '2019-05-20 08:00'
            },
                  {
              RatingId: 6,
              RatingValueId: 1,
              User: 'Sale',
              Date: '2019-05-20 09:00'
            }
          ]
        },
          {
          RatingValueId: 2,
          Value: 'Good',
          ratings: [
            {
              RatingId: 2,
              RatingValueId: 2,
              User: 'Sale',
              Date: '2019-05-20 10:00'
            }
          ]
        },
          {
          RatingValueId: 3,
          Value: 'Meh',
          ratings: [
            {
              RatingId: 3,
              RatingValueId: 3,
              User: 'Sale',
              Date: '2019-05-20 11:00'
            }
          ]
        },	
        {
          RatingValueId: 4,
          Value: 'Bad',
          ratings: [
            {
              RatingId: 4,
              RatingValueId: 5,
              User: 'Sale',
              Date: '2019-05-20 06:00'
            }
          ]
        },
          {
          RatingValueId: 5,
          Value: 'Awfull',
          ratings: []
        }
      ];
      
      for (var i = 0; i < result.length; i++) {
        state.chartDataRowsPie[i][1] = result[i].ratings.length;
      }

      state.updatedChartDataPie = state.chartDataRowsPie;
    },
    updateData(state, data) {
      state.dataFromBase = data;
    }
  };