var waterfall = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 1350,
    "height": 500,
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
        "filter": "datum.Year == selectedYear"
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
      "sort": null,
      "axis": {"LabelAngle": 0, "title": "Months"}
    }
  },
  "layer": [
    {
      "mark": {"type": "bar", "size": 45},
      "encoding": {
        "y": {
          "field": "previous_sum",
          "type": "quantitative",
          "title": "Amount"
        },
        "y2": {"field": "sum"},
        "color": {
          "condition": [
            {
              "test": "datum.Label === 'Begin' || datum.Label === 'Total Mining'",
              "value": "#f7e0b6"
            },
            {"test": "datum.sum < datum.previous_sum", "value": "#f78a64"}
          ],
          "value": "#93c4aa"
        }
      }
    },
    {
      "mark": {
        "type": "rule",
        "color": "#404040",
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
      "mark": {"type": "text", "dy": {"expr": "datum.Amount >= 0 ? -4 : 4"}, "baseline": {"expr": "datum.Amount >= 0 ? 'bottom' : 'top'"}},
      "encoding": {
        "y": {"field": "sum", "type": "quantitative"},
        "text": {"field": "sum", "type": "nominal"}
      }
    },
    {
      "mark": {"type": "text", "fontWeight": "bold", "baseline": "middle"},
      "encoding": {
        "y": {"field": "center", "type": "quantitative"},
        "text": {"field": "text_Amount", "type": "nominal"},
        "color": {
          "scale": {
          "domain": ["Begin", "Oil and gas extraction", "Metal ore mining", "Non-metallic mineral mining", "Exploration services"],
          "range": ["#d3fc81", "#fc81a2", "#81fc9c", "#9181fc", "#81f6fc"] 
        },
        }
      }
    }
  ],
  "config": {"text": {"fontWeight": "bold", "color": "#404040"}}
}


  vegaEmbed('#waterfall', waterfall).then(function (result) {

  }).catch(console.error);
  