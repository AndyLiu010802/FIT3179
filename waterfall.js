var waterfall = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 1350,
    "height": 350,
    "background": "#6b675b",
    "data": {
      "url": "https://raw.githubusercontent.com/AndyLiu010802/FIT3179/main/labour.json",
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
          "name": "Select Sector: "
        }
      }
    ],
    "transform": [
      {
        "filter": "datum.Year == selectedYear && datum.Label != 'Start'" 
      },
      {"window": [{"op": "sum", "field": "Amount", "as": "sum"}]},
      {"window": [{"op": "lead", "field": "Label", "as": "lead"}]},
      {
        "calculate": "datum.lead === null ? datum.Label : datum.lead",
        "as": "lead"
      },
      {
        "calculate": "datum.Label === 'Total Mining' ? 0 : datum.sum - datum.Amount",
        "as": "previous_sum"
      },
      {
        "calculate": "datum.Label === 'Total Mining' ? datum.sum : datum.Amount",
        "as": "Amount"
      },
      {
        "calculate": "(datum.Label !== 'Begin' && datum.Label !== 'Total Mining' && datum.Amount > 0 ? '+' : '') + datum.Amount",
        "as": "text_Amount"
      },
      {"calculate": "(datum.sum + datum.previous_sum) / 2", "as": "center"}
    ],
    "encoding": {
      "x": {
        "field": "Label",
        "type": "ordinal",
        "title":null,
        "sort": null,
        "axis": {
          "LabelAngle": 0,
          "labelColor": "white",
          "titleColor": "white",
          "labelFontSize": 12,
          "titleFontSize": 12
        }
      }
    },
    "layer": [
      {
        "mark": {"type": "bar", "size": 45},
        "encoding": {
          "y": {
            "field": "previous_sum",
            "type": "quantitative",
            "title": "Millions ($)",
            "axis": {
              "labelColor": "white",
              "titleColor": "white",
              "labelFontSize": 12,
              "titleFontSize": 12
            }
          },
          "y2": {"field": "sum"},
          "color": {
            "field": "Label",
            "legend": null,
            "scale": {
              "domain": [
                "Coal mining",
                "Oil and gas extraction",
                "Metal ore mining",
                "Non-metallic mineral mining",
                "Exploration services",
                "Total Mining"
              ],
              "range": ["#d3fc81", "#fc81a2", "#81fc9c", "#9181fc", "#81f6fc", "#fc8181"]
            }
          },
          "tooltip": [
            {"field": "Label", "type": "nominal", "title": "Sector"},
            {"field": "Amount", "type": "quantitative", "title": "Amount (Millions $)"}
          ]
        }
      },
      {
        "mark": {
          "type": "rule",
          "color": "black",
          "opacity": 1,
          "strokeWidth": 2,
          "xOffset": -22.5,
          "x2Offset": 22.5
        },
        "encoding": {
          "x2": {"field": "lead"},
          "y": {"field": "sum", "type": "quantitative"}
        }
      },
      {
        "mark": {
          "type": "text",
          "dy": {"expr": "datum.Amount >= 0 ? -4 : 4"},
          "baseline": {"expr": "datum.Amount >= 0 ? 'bottom' : 'top'"},
          "color": "white",
          "fontSize": 12
        },
        "encoding": {
          "y": {"field": "sum", "type": "quantitative"},
          "text": {"field": "sum", "type": "nominal"}
        }
      },
      {
        "mark": {
          "type": "text",
          "fontWeight": "bold",
          "baseline": "middle",
          "color": "black",
          "fontSize": 12
        },
        "encoding": {
          "y": {"field": "center", "type": "quantitative"},
          "text": {"field": "text_Amount", "type": "nominal"}
        }
      }
    ],
    "config": {
      "text": {"fontWeight": "bold", "color": "white", "fontSize": 12},
      "axis": {"labelColor": "white", "titleColor": "white", "labelFontSize": 12, "titleFontSize": 12}
    }
}

vegaEmbed('#waterfall', waterfall).then(function (result) {

}).catch(console.error);
