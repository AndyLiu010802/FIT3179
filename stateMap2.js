var map = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 950,
  "height": 650,
  "background": "#585146",
  "autosize": {
    "type": "fit",
    "contains": "padding"
  },
  "padding": { "top": 20, "left": 60, "right": 60, "bottom": 0 },
  
  "params": [
    {
      "name": "stateFilter",
      "value": "NSW", 
      "bind": {
        "input": "select",
        "options": [
          "NSW",
          "VIC",
          "QLD",
          "SA",
          "WA",
          "TAS",
          "NT",
          
        ],
        "name": "State: ",
        "padding": { "top": 0, "left": 1000, "right": 10, "bottom": 0 },
      }
    }
  ],
  "projection": {
    "type": "mercator"
  },
  "layer": [
    {
      "data": {
        "url": "https://raw.githubusercontent.com/AndyLiu010802/FIT3179/main/georef-australia-state@public.json",
        "format": {
          "type": "topojson",
          "feature": "georef-australia-state@public"
        }
      },
      "transform": [
        {
          "filter": "datum.properties.ste_iso3166_code == stateFilter"
        }
      ],
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
            "field": "properties.ste_name[0]",
            "type": "nominal",
            "title": "State Name"
          },
          {
            "field": "properties.ste_iso3166_code",
            "type": "nominal",
            "title": "State Code"
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
        "longitude": { "field": "properties.geo_point_2d.lon", "type": "quantitative" },
        "latitude": { "field": "properties.geo_point_2d.lat", "type": "quantitative" },
        "text": {
          "field": "properties.ste_name[0]",
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
        {
          "filter": "datum.State == stateFilter"
        }
      ],
      "mark": {
        "type": "point",
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
              "Vanadium",
              "REE, Zirconium, Niobium, +/- Hafnium, Lithium, Tantalum, Gallium"
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
          "legend": null  
        },
        "shape": {
          "field": "Status",
          "type": "nominal",
          "legend": null  
        },
        "tooltip": [
          { "field": "Name", "type": "nominal", "title": "Site" },
          { "field": "State", "type": "nominal" },
          { "field": "Commodity Group", "type": "nominal" },
          { "field": "Status", "type": "nominal" }
        ]
      }
    }
  ]
};

vegaEmbed('#vis-compare2', map).then(function (result) {

}).catch(console.error);
