import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


//===================================== CARD DATA FOR DASHBOARD =========================================================

const cardData = [
    { title: "Customers", value: "3,781", change: "+11.01%", color: "#E3F5FF", icon: TrendingUpIcon  },
    { title: "Orders", value: "1,219", change: "-00.03%", color: "#F7F9FB", icon: TrendingDownIcon },
    { title: "Revenue", value: "$695", change: "+15.03%", color: "#F7F9FB", icon: TrendingUpIcon },
    { title: "Growth", value: "30.1%", change: "+06.08%", color: "#E5ECF6", icon: TrendingUpIcon },
  ];


//===================================== BAR GRAPH DATA AND CHART DATA =========================================================

const getBarData = (darkMode) => {
    const backgroundColorProjections = darkMode ? "#A8C5DA" : "#A8C5DA"; 
    const backgroundColorActuals = darkMode
      ? "rgba(168, 197, 218, 0.5)" 
      : "#CFDEEA"; 
  
    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], 
      datasets: [
        {
          categoryPercentage: 0.4,
          barPercentage: 0.9,
          label: "Projections", 
          data: [12, 19, 3, 5, 2, 3], 
          backgroundColor: backgroundColorProjections, 
          borderRadius: 5, 
        },
        {
          categoryPercentage: 0.4,
          barPercentage: 0.9,
          label: "Actuals", 
          data: [7, 9, 8, 10, 5, 6], 
          backgroundColor: backgroundColorActuals, 
          borderRadius: 5, 
        },
      ],
    };
  };


 const barchartOptions = (darkMode) => ({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        min: 0, 
        max: 30, 
        ticks: {
          color: darkMode ? "#FFFFFF66" : "#1C1C1C66", 
          font: { size: 12 },
          callback: (value) => {
            if (value === 0) return "0"; 
            if (value === 10) return "10M";
            if (value === 20) return "20M";
            if (value === 30) return "30M";
          },
        },
        grid: {
          color: darkMode ? "#FFFFFF22" : "#1C1C1C11", 
          borderDash: [5, 5],
        },
      },
      x: {
        stacked: true,
        ticks: {
          color: darkMode ? "#FFFFFF66" : "#1C1C1C66", 
          font: { size: 12 },
        },
        grid: {
          display: false,
        },
        barPercentage: 0.2,
        categoryPercentage: 0.9,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  });


//===================================== LINE GRAPH DATA AND CHART DATA =========================================================

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const datasets = (darkMode) => [
  {
    label: "Current Week",
    data: [14, 6, 7, 18, 15, 18],
    borderColor: darkMode ? "#C6C7F8" : "#1E1E1E",
    fill: false,
    tension: 0.3,
    borderDash: [0],
    pointRadius: 0, 
    segment: {
     
      borderDash: (context) => {
        if (context.p0DataIndex >= 3) {
          return [5, 5]; 
        }
        return []; 
      },
    },
  },
  {
    label: "Previous Week",
    data: [7, 20, 21, 13, 15, 20],
    borderColor: "#A8C5DA", 
    fill: false,
    tension: 0.3,
    pointRadius: 0, 
  },
];

const linechartOptions = (darkMode) => ({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 30, 
      ticks: {
        color: darkMode ? "#FFFFFF66" : "#1C1C1C66",
        stepSize: 10,
        callback: (value) => {
          if (value === 0) return "0";
          return `${value}M`;
        },
 
      },
      grid: {
        color: darkMode ? "#FFFFFF22" : "#1C1C1C11",
        borderDash: [5, 5], 
      },
      
    },
    x: {
      color: darkMode ? "#FFFFFF66" : "#1C1C1C66",
      grid: { display: false },
    },
  },
  plugins: { legend: { display: false } },
});


//===================================== GEO GRAPH DATA AND CHART DATA =========================================================




  const locations = [
    {
      city: "New York",
      revenue: 72,
      coordinates: [-74.006, 40.7128],
      color: "#A8C5DA"
    },
    {
      city: "San Francisco",
      revenue: 39,
      coordinates: [-122.4194, 37.7749],
      color: "#A8C5DA"
    },
    {
      city: "Sydney",
      revenue: 25,
      coordinates: [151.2093, -33.8688],
      color: "#A8C5DA"
    },
    {
      city: "Singapore",
      revenue: 61,
      coordinates: [103.8198, 1.3521],
      color: "#A8C5DA"
    },
  ];

  
  const darkModeSettings = {
    geographyFill: "#526F84",
    geographyStroke: "#000",
    markerFill: "#C6C7F8",
    markerStroke: "#FFF",
    // progressBarBackground: "#A8C5DA",
  };

  const lightModeSettings = {
    geographyFill: "#A8C5DA",
    geographyStroke: "#FFF",
    markerFill: "#000",
    markerStroke: "#FFF",
    // progressBarBackground: "#A8C5DA",
  };



//===================================== TABLE DATA =========================================================


  const tableData = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
    { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' },
  ];
  


//===================================== EXPORT =========================================================

  export{
    cardData,
    getBarData,
    barchartOptions,
    labels,
    datasets,
    linechartOptions,
    locations,
    darkModeSettings,
    lightModeSettings,
    tableData
  };