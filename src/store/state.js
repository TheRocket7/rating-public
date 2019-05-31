export default {
  //Settings
  settingsData: {
    thanksMessage: `Thank you for helping us improve ourselves!`,
    numberOfRates: 5,
    modalWait: 5
  },
  //Data for table
  tableData: {
    headers: [
      {
        text: 'Emotions',
        align: 'left',
        sortable: true,
        value: 'name'
      },
      { 
        text: 'Count',
        value: 'count'
      },
    ],
    rates: [
      {
        name: 'Great',
        count: 0,
      },
      {
        name: 'Good',
        count: 0,
      },
      {
        name: 'Meh',
        count: 0,
      },
      {
        name: 'Bad',
        count: 0,
      },
      {
        name: 'Awfull',
        count: 0,
      }
    ]
  },
  //Data for Line chart
  chartDataLine: {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
    datasets: [
      {
        label: 'Great',
        backgroundColor: 'rgba(0, 168, 107, 0.4)',
        borderColor: 'rgba(0, 168, 107, 1.0)',
        borderWidth: '2',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        label: 'Good',
        backgroundColor: 'rgba(65, 179, 233, 0.4)',
        borderColor: 'rgba(65, 179, 233, 1.0)',
        borderWidth: '2',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        label: 'Meh',
        backgroundColor: 'rgba(122, 122, 122, 0.4)',
        borderColor: 'rgba(122, 122, 122, 1.0)',
        borderWidth: '2',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        label: 'Bad',
        backgroundColor: 'rgba(255, 186, 19, 0.4)',
        borderColor: 'rgba(255, 186, 19, 1.0)',
        borderWidth: '2',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        label: 'Awfull',
        backgroundColor: 'rgba(249, 88, 90, 0.4)',
        borderColor: 'rgba(249, 88, 90, 1.0)',
        borderWidth: '2',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  //Data for Pie chart
  chartDataPie: {
    labels: ['Great', 'Good', 'Meh', 'Bad', 'Awfyll'],
    datasets: [
      {
        label: "Data One",
        backgroundColor: ["rgba(0, 168, 107, 1.0)", "rgba(65, 179, 233, 1.0)", "rgba(122, 122, 122, 1.0)", "rgba(255, 186, 19, 1.0)", "rgba(249, 88, 90, 1.0)"],
        data: [0, 0, 0, 0, 0]
      }
    ]
  },
  //Options for charts
  options: {
    type: Object,
    default: null,
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: 'rgba(255, 255, 255, 0.5)'
      }
    }
  },
  //Sum of all rates for today
  allRates: 0,
  //Validation rules for field number of rates
  numberOfRatesRules: [
      v => v >= 3 || `Can't be less than 3 emotions`,
      v => v <= 5 || `Can't be more than 5 emotions`
  ],
  //Validation rules for field message text
  messageTextRules: [
      v => (v.length >= 3 || v.length == 0) || `Minimum length is 3 characters`,
      v => v.length <= 120 || `Maximum length is 120 characters`
  ],
  //Validation rules for field timeout
  timeoutRules: [
      v => v >= 1 || `Timeout can't be 0`,
      v => v <= 10 || `Timeout can't be longer than 10 seconds`
  ]
};