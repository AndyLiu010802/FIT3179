var map = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 1350,
  "height": 650,
  "background": "#6b675b",
  "autosize": {
    "type": "fit",
    "contains": "padding"
  },
  "padding": {"top": 50, "left": 0, "right": 0, "bottom": 120},
  "params": [
    {
      "name": "statusFilter",
      "value": "Operating mine",
      "bind": {
        "input": "select",
        "options": [
          "Operating mine",
          "Mineral deposit",
          "Mine - care and maintenance",
          "Mine - under development"
        ],
        "name": "Select Status: "
      }
    }
  ],
  "layer": [
    {
      "data": {
        "url": "https://raw.githubusercontent.com/AndyLiu010802/FIT3179/main/georef-australia-state@public.json",
        "format": {
          "type": "topojson",
          "feature": "georef-australia-state@public"
        }
      },
      
      "mark": {
        "type": "geoshape",
        "stroke": "black",
        "strokeWidth": 1,
        "fill": "#705834"
      },
      "encoding": {
        "shape": {
          "field": "geometry",
          "type": "geojson"
        },
        "tooltip": [
          {
            "calculate": "stateAbbreviations[datum['properties.ste_iso3166_code']]",
            "as": "StateFullName"
          },
          {
            "field": "properties.ste_iso3166_code",
            "type": "nominal",
            "title": "State"
          }
        ]
      }
    },
    {
      "mark": {
        "type": "text",
        "fontSize": 12,
        "dy": -10,
        "dx": 5,
        "align": "center",
        "color": "white"
      },
      "encoding": {
        "longitude": {"field": "properties.centroid[0]", "type": "quantitative"},
        "latitude": {"field": "properties.centroid[1]", "type": "quantitative"},
        "text": {
          "field": "properties.NAME",
          "type": "nominal",
          "title": "State Name"
        }
      }
    },
    {
      "data": {
        "url": "https://raw.githubusercontent.com/AndyLiu010802/FIT3179/main/GeoScience_AUS.json",
        "format": {
          "type": "json"
        }
      },
      "transform": [
        {"filter": "datum.Status == statusFilter"},
      ],
      "mark": {
        "type": "circle",
        "size": 70,
        "clip": false
      },
      "encoding": {
        "longitude": {
          "field": "Longitude",
          "type": "quantitative"
        },
        "latitude": {
          "field": "Latitude",
          "type": "quantitative"
        },
        "color": {
          "field": "Commodity Group",
          "type": "nominal",
          "scale": {
            "domain": [
              "Antimony",
              "Cobalt",
              "Heavy mineral sands - Titanium, Zirconium",
              "Lithium +/- Tantalum +/- Niobium",
              "Magnesium",
              "Manganese Ore",
              "Molybdenum +/- Rhenium",
              "Nickel +/- Cobalt +/- PGE",
              "Rare Earth Elements (REE)",
              "Silicon (High purity silica/quartz)",
              "Titanium, Vanadium",
              "Tungsten",
              "Vanadium"
            ],
            "range": [
              "#ff6a00",
              "#ff0400",
              "#eeff00",
              "#5eff00",
              "#00fff2",
              "#0037ff",
              "#7700ff",
              "#54407d",
              "#ff00aa",
              "#fab802",
              "#22662d",
              "#8da0cb",
              "#e78ac3"
            ]
          },
          "legend": {
            "orient": "left",
            "title": "Commodity Group",
            "offset": 60,
            "padding": 0,
            "labelFontSize": 12,
            "labelColor": "white",
            "titleFontSize": 14,
            "titleColor": "white",
            "labelLimit": 0,
            "labelExpr": "length(datum.label) > 20 ? substring(datum.label, 0, 20) + '\\n' + substring(datum.label, 20) : datum.label",
            "columns": 1,
            "symbolPadding": 5,
            "rowPadding": 5
          }
        },
        "tooltip": [
          {"field": "Name", "type": "nominal", "title": "Site"},
          {"field": "State", "type": "nominal"},
          {"field": "Commodity Group", "type": "nominal"},
          {"field": "Status", "type": "nominal"}
        ]
      }
    }
  ]
};

vegaEmbed('#vis', map).then(function(result) {

}).catch(console.error);

