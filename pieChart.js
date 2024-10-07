const chartPie = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Pie chart.",
    
    "width": 450,
    "height": 400,
    "background": "#585146",
    "data": {
      "url": "https://raw.githubusercontent.com/AndyLiu010802/FIT3179/main/incomeExpense.json",
      "format": {
        "type": "json"
      }
    },
    "params": [
      {
        "name": "selectedYear",
        "value": "2020-21",
        "bind": {
          "input": "select",
          "options": ["2020-21", "2021-22", "2022-23"],
          "labels": ["2020-21", "2021-22", "2022-23"],
          "name": "Select Year: "
        }
      },
      {
        "name": "selectedType",
        "value": "Income",
        "bind": {
          "input": "select",
          "options": ["Income", "Expense"],
          "labels": ["Income", "Expense"],
          "name": "Select Type: "
        }
      }
    ],
    "transform": [
      {
        "filter": "datum.Year == selectedYear"
      },
      {
        "filter": "datum.Type == selectedType"
      }
    ],
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