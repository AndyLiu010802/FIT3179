var waterfall = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 950,
    "height": 650,
    "data": {
     "url": "https://raw.githubusercontent.com/AndyLiu010802/FIT3179/main/waterfall.json",
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
          "name": "Select Year: "
        }
      },
      {
        "name": "selectedSector",
        "value": "Coal mining",
        "bind": {
          "input": "select",
          "options": ["Coal mining", "Oil and gas extraction", "Iron ore mining", "Copper ore mining", "Gold ore mining", "Mineral sand mining"],
          "name": "Select Sector: "
        }
      }
    ],
    "transform": [
      {
        "filter": "datum.Year == selectedYear && datum.Sector == selectedSector"
      }
    ],
    "transform": [
    {"window": [{"op": "sum", "field": "amount", "as": "sum"}]},
    {"window": [{"op": "lead", "field": "label", "as": "lead"}]},
    {
      "calculate": "datum.lead === null ? datum.label : datum.lead",
      "as": "lead"
    },
    {
      "calculate": "datum.label === 'End' ? 0 : datum.sum - datum.amount",
      "as": "previous_sum"
    },
    {
      "calculate": "datum.label === 'End' ? datum.sum : datum.amount",
      "as": "amount"
    },
    {
      "calculate": "(datum.label !== 'Begin' && datum.label !== 'End' && datum.amount > 0 ? '+' : '') + datum.amount",
      "as": "text_amount"
    },
    {"calculate": "(datum.sum + datum.previous_sum) / 2", "as": "center"}
  ],
  "encoding": {
    "x": {
      "field": "label",
      "type": "ordinal",
      "sort": null,
      "axis": {"labelAngle": 0, "title": "Months"}
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
              "test": "datum.label === 'Begin' || datum.label === 'End'",
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
      "mark": {"type": "text", "dy": {"expr": "datum.amount >= 0 ? -4 : 4"}, "baseline": {"expr": "datum.amount >= 0 ? 'bottom' : 'top'"}},
      "encoding": {
        "y": {"field": "sum", "type": "quantitative"},
        "text": {"field": "sum", "type": "nominal"}
      }
    },
    {
      "mark": {"type": "text", "fontWeight": "bold", "baseline": "middle"},
      "encoding": {
        "y": {"field": "center", "type": "quantitative"},
        "text": {"field": "text_amount", "type": "nominal"},
        "color": {
          "condition": [
            {
              "test": "datum.label === 'Begin' || datum.label === 'End'",
              "value": "#725a30"
            }
          ],
          "value": "white"
        }
      }
    }
  ],
  "config": {"text": {"fontWeight": "bold", "color": "#404040"}}
}

  vegaEmbed('#waterfall', waterfall).then(function (result) {

  }).catch(console.error);
  