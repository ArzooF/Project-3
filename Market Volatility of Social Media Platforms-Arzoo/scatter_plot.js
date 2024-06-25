// // Data for social media platforms (replace with actual volatility data)
// d3.json("http://127.0.0.1:3000/").then((data)=>{
//     console.log(data)
// })
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://127.0.0.1:5000/data").then(response => {
        if (!response.ok) {
            console.log("Error fetching data")
        }
        return response.json()
    })
    .then(data => {
        let facebook = Object.values(data.Facebook);       
        let dates = Object.values(data.Date);
      
        const trace = [{
            x: dates,
            y:facebook,
            type:"scatter"
        }]
        const layout= {
            title: "Facebook"
        }
        Plotly.newPlot("scatterplot", trace, layout)
    })
})

// Generate scatter plot data
// const scatterData = {
//     x: platformNames,
//     y: volatilities,
//     mode: 'markers+text',
//     type: 'scatter',
//     text: platformNames,
//     textposition: 'top center',
//     marker: { size: 12, color: 'rgba(156, 165, 196, 0.95)' },
// };

// // Layout configuration
// const layout = {
//     title: 'Volatility of Social Media Platforms',
//     xaxis: {
//         title: 'Social Media Platforms',
//         tickangle: -45,
//     },
//     yaxis: {
//         title: 'Volatility (Standard Deviation)',
//     },
//     margin: {
//         l: 50,
//         r: 50,
//         b: 150,
//         t: 50,
//         pad: 4
//     },
//     hovermode: 'closest'
// };

// // Render the plot
// Plotly.newPlot('scatterPlot', [scatterData], layout);