const chartLine2 = {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "description": "A basic stacked area chart example with tooltip, legend, and smooth interpolation.",
    "width": 550,
    "height": 400,
    "padding": 5,
    
    "data": [
      {
        "name": "table",
        "url": "https://raw.githubusercontent.com/AndyLiu010802/FIT3179/main/depositMeter.json",  
        "format": {"type": "json"},
        "transform": [
          {
            "type": "formula",
            "as": "Date",
            "expr": "toDate(datum.Date)"
          }
        ]
      }
    ],
    
    "scales": [
      {
        "name": "x",
        "type": "time",
        "range": "width",
        "domain": {"data": "table", "field": "Date"}
      },
      {
        "name": "y",
        "type": "linear",
        "range": "height",
        "nice": true,
        "zero": true,
        "domain": {"data": "table", "field": "Value"}
      },
      {
        "name": "color",
        "type": "ordinal",
       "domain": ["Total Deposits", "New Deposits", "Existing Deposits"], 
        "range": ["#b3ffb6", "#8c2bbd", "#ffcfb3"]  
      }
    ],
    
    "axes": [
      {
        "orient": "bottom", 
        "scale": "x", 
        "format": "%Y",
        "encode": {
          "labels": {
            "update": {
              "fill": {"value": "white"},
              "fontSize": {"value": 12}
            }
          }
        }
      },
      {
        "orient": "left", 
        "scale": "y", 
        "title": "Meters (m)",
        "encode": {
          "labels": {
            "update": {
              "fill": {"value": "white"},
              "fontSize": {"value": 12}
            }
          },
          "title": {
            "update": {
              "fill": {"value": "white"},
              "fontSize": {"value": 12}
            }
          }
        }
      }
    ],
    
   
    
    "marks": [
  {
    "type": "group",
    "from": {
      "facet": {
        "name": "series",
        "data": "table",
        "groupby": "Type",
        
      }
    },
    "marks": [
      {
        "type": "area",
        "from": {"data": "series"},
        "encode": {
          "enter": {
            "x": {"scale": "x", "field": "Date"},
            "y": {"scale": "y", "field": "Value"},
            "y2": {"scale": "y", "value": 0},
            "fill": {"scale": "color", "field": "Type"},
            "fillOpacity": {"value": 1},
            "interpolate": {"value": "step"}
          },
          "update": {
            "tooltip": {
              "signal": "{'Date': timeFormat(datum.Date, '%Y-%m'), 'Value': datum.Value, 'Type': datum.Type}"
            }
          }
        }
      }
    ]
  }
]
,
    
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
        "titleFontSize": 12,
      
      }
    }
  }
  
  vegaEmbed('#lineChart2', chartLine2).then(function(result) {
  
  }).catch(console.error);
  