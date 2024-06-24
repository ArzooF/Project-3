// Define the years
let years = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

// Define data for each trace
let trace1_bar = {
  x: years,
  y: [3711, 5089, 7872, 12466, 17928, 27638, 40653, 55838, 70697, 85965, 117929, 116609, 134902],
  type: "bar",
  name: "Revenue"
};

let trace2_bar = {
  x: years,
  y: [1955, 4551, 5068, 7472, 11703, 15211, 20450, 30925, 46711, 53294, 71176, 87665, 88151],
  type: "bar",
  name: "costs"

};

let trace3_bar = {
  
  x: years,
  y: [1756, 538, 2804, 4994, 6225, 12427, 20203, 24913, 23986, 32671, 46753, 28944, 46751],
  type: "bar",
  name: "perating Profit"

};

let trace1_scatter = {
  x: years,
  y: [3711, 5089, 7872, 12466, 17928, 27638, 40653, 55838, 70697, 85965, 117929, 116609, 134902],
  type: "scatter",
  mode: "lines+markers",
  name: "Revenue"
};

let trace2_scatter = {
  x: years,
  y: [1955, 4551, 5068, 7472, 11703, 15211, 20450, 30925, 46711, 53294, 71176, 87665, 88151],
  type: "scatter",
  mode: "lines+markers",
  name: "Costs"
};

let trace3_scatter = {
  
  x: years,
  y: [1756, 538, 2804, 4994, 6225, 12427, 20203, 24913, 23986, 32671, 46753, 28944, 46751],
  type: "scatter",
  mode: "lines+markers",
  name: "Operating Profit"
  
};

// Data arrays
let barData = [trace1_bar, trace2_bar, trace3_bar];
let scatterData = [trace1_scatter, trace2_scatter, trace3_scatter];

// Layout for both charts
let layout = {
  title: "Financial Data from 2011-2023 years",
  xaxis: { title: "Year" },
  yaxis: { title: "Amount (in Millions)" },
  legend: {
    x: 1,
    xanchor: 'left',
    y: 1
  }
};

// Initial plot (Grouped Bar Chart)
Plotly.newPlot("plot", barData, layout);

// Function to update chart based on selection
function updateChart(chartType) {
  if (chartType === "bar") {
    Plotly.react("plot", barData, layout);
  } else if (chartType === "scatter") {
    Plotly.react("plot", scatterData, layout);
  }
}

// Event listener for dropdown change
document.getElementById("chartType").addEventListener("change", function() {
  let chartType = this.value;
  updateChart(chartType);
});
