const chartPie = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Pie chart showing income and expense details.",
    "data": {
      "url": "https://raw.githubusercontent.com/AndyLiu010802/FIT3179-w10/main/pieChart.json",
      "format": {
        "type": "json"
      }
    },
    "mark": "arc",
    "encoding": {
      "theta": {"field": "Amount", "type": "quantitative"},
      "color": {"field": "Description", "type": "nominal"},
      "tooltip": [
        {"field": "Description", "type": "nominal", "title": "Category"},
        {"field": "Amount", "type": "quantitative", "title": "Amount"},
        {"field": "Year", "type": "nominal", "title": "Year"},
        {"field": "Type", "type": "nominal", "title": "Type"}
      ]
    }
  }
  vegaEmbed('#pieChart', chartPie).then(function(result) {
  
  }).catch(console.error);