var waterfall = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
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
    "layer": [
      {
        "mark": {
          "type": "bar",
          "tooltip": true
        },
        "encoding": {
          "x": {
            "field": "Sector",
            "title": "Mining Sector",
            "axis": {"labelAngle": 0}
          },
          "y": {
            "field": "Purchases of goods and materials ($m)",
            "title": "Selected Labor Cost"
          },
          "color": {"value": "#4C78A8"}
        }
      },
      {
        "mark": "rule",
        "encoding": {
          "y": {
            "aggregate": "sum",
            "field": "Industry value added ($m)",
            "title": "Total Cost"
          },
          "color": {"value": "green"},
          "size": {"value": 5}
        }
      }
    ]
  }
  vegaEmbed('#waterfall', waterfall).then(function (result) {

  }).catch(console.error);
  