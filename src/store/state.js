export default {
  chartOptionsLine: {
    chart: {
      title: "Report",
      subtitle: "Report line chart"
    }
  },
  chartDataHeaderLine: ["Year", "Great", "Good", "Meh", "Bad", "Awfull"],
  chartDataRowsLine: [
    ["00:00", 1000, 400, 200, 432, 865],
    ["01:00", 1170, 460, 250, 438, 938],
    ["02:00", 660, 1120, 300, 867, 739],
    ["03:00", 1030, 540, 350, 294, 943]
  ],
  updatedChartDataLine: [],
  chartOptionsPie: {
    chart: {
      title: "Report",
      subtitle: "Report pie chart"
    }
  },
  chartDataHeaderPie: ["Emotion", "Count"],
  chartDataRowsPie: [
    ["Great", 1000],
    ["Good", 1170],
    ["Meh", 660],
    ["Bad", 1030],
    ["Awfull", 1030]
  ],
  updatedChartDataPie: [],
  dateForData: new Date()
};