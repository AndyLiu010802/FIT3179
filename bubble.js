const chartBubble = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Bubble chart",
    "width": 500,
    "height": 400,
    "background": "#6b675b",
    "padding": 5,
    "data": {
      "url": "https://raw.githubusercontent.com/AndyLiu010802/FIT3179/main/industry.json",
      "format": {
        "type": "json"
      }
    },
    "params": [
      {
        "name": "YearFilter",
        "value": "2020-21", 
        "bind": {
          "input": "select",
          "options": [
            "2020-21",
            "2021-22",
            "2022-23"
          ],
          "name": "Select Year Period: "
        }
      }
    ],
    "transform": [
      {
        "filter": "datum['Year'] == YearFilter"
      }
    ],
    "mark": {
      "type": "circle",
      "opacity": 1
    },
    "encoding": {
      "y": {
        "field": "Total Income ($m)",
        "type": "quantitative",
        "axis": {
          "title": "Total Income ($m)",
          "labelColor": "white",
          "titleColor": "white",
          "labelFontSize": 12,
          "titleFontSize": 12
        }
      },
      "x": {
        "field": "Total Expenses ($m)",
        "type": "quantitative",
        "axis": {
          "title": "Total Expenses ($m)",
          "labelColor": "white",
          "titleColor": "white",
          "labelFontSize": 12,
          "titleFontSize": 12
        }
      },
      "size": {
        "field": "Operating Profit Before Tax ($m)",
        "type": "quantitative",
        "title": "Operating Profit ($m)",
        "scale": {
          "domain": [-15000, 120000],  
          "range": [300, 3000]
        },
        "legend": {
          "title": "Operating Profit ($m)",
          "labelColor": "white", 
          "titleColor": "white", 
          "labelFontSize": 12,
          "titleFontSize": 12
        }
      },
      "color": {
        "field": "Mining Realm",
        "type": "nominal",
        "scale": {
          "domain": ["Coal mining", "Oil and gas extraction", "Metal ore mining", "Non-metallic mineral mining", "Exploration services"],
          "range": ["#d3fc81", "#fc81a2", "#81fc9c", "#9181fc", "#81f6fc"] 
        },
        "legend": {
          "title": "Mining Realm",
          "labelColor": "white",
          "titleColor": "white",
          
          "labelFontSize": 12,
          "titleFontSize": 12
        }
      },
      "tooltip": [
        {"field": "Mining Realm", "type": "nominal", "title": "Mining Realm"},
        {"field": "Total Income ($m)", "type": "quantitative", "title": "Total Income ($m)"},
        {"field": "Total Expenses ($m)", "type": "quantitative", "title": "Total Expenses ($m)"},
        {"field": "Operating Profit Before Tax ($m)", "type": "quantitative", "title": "Operating Profit ($m)"}
      ]
    },
    "config": {
      "axis": {
        "labelColor": "white",
        "titleColor": "white",
        "labelFontSize": 12,
        "titleFontSize": 12
      },
      "legend": {
        "labelColor": "white",
        "titleColor": "white",
        "labelFontSize": 12,
        "titleFontSize": 12
      },
      "title": {
        "color": "white",
        "fontSize": 12
      }
    }
  }
  
  vegaEmbed('#chartBubble', chartBubble).then(function(result) {
  }).catch(console.error);
  