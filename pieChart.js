const chartPie = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Pie chart displaying income and expense data by year, type, and sector.",
    "width": 400,
    "height": 300,
   "padding": { "top": 0, "left": 10, "right": 200, "bottom": 50 },
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
        "value": "income",
        "bind": {
          "input": "select",
          "options": ["income", "expense"],
          "labels": ["Income", "Expense"],
          "name": "Select Type: "
        }
      },
      {
        "name": "selectedSector",
        "value": "Coal mining",
        "bind": {
          "input": "select",
          "options": [
            "Coal mining",
            "Oil and gas extraction",
            "Metal ore mining",
            "Non-metallic mineral mining and quarrying",
            "Exploration and other mining support services"
          ],
          "labels": [
            "Coal mining",
            "Oil and gas extraction",
            "Metal ore mining",
            "Non-metallic mineral mining and quarrying",
            "Exploration and other mining support services"
          ],
          "name": "Select Sector: "
        }
      }
    ],
    "transform": [
      {
        "filter": "datum.Year == selectedYear"
      },
      {
        "filter": "datum.Type == selectedType"
      },
      {
        "filter": "datum.Sector == selectedSector"
      }
    ],
    "mark": "arc",
    "encoding": {
      "theta": { "field": "Amount", "type": "quantitative" },
      "color": { "field": "Description", "type": "nominal" },
      "tooltip": [
        { "field": "Description", "type": "nominal", "title": "Category" },
        { "field": "Amount", "type": "quantitative", "title": "Amount" },
        { "field": "Year", "type": "nominal", "title": "Year" },
        { "field": "Type", "type": "nominal", "title": "Type" },
        { "field": "Sector", "type": "nominal", "title": "Sector" }
      ]
    }
  };
  
  vegaEmbed('#pieChart', chartPie).then(function(result) {
  
  }).catch(console.error);
  