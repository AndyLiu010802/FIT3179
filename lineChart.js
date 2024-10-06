const chartLine = {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "description": "A basic line chart example with tooltip and legend.",
    "width": 500,
    "height": 400,
    "padding": 5,
    
    "data": [
      {
        "name": "table",
        "url": "https://raw.githubusercontent.com/AndyLiu010802/FIT3179/main/Expenditure.json",  
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
        "domain": ["Total Deposits ($M)", "New Deposits ($M)", "Existing Deposits ($M)"], 
        "range": ["#b3ffb6", "#fff2b3", "#ffcfb3"]  
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
        "title": "Value",
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
    
    "legends": [
      {
        "fill": "color",
        "title": "Type",
        "orient": "right",
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
            "groupby": "Type"
          }
        },
        "marks": [
          {
            "type": "line",
            "from": {"data": "series"},
            "encode": {
              "enter": {
                "x": {"scale": "x", "field": "Date"},
                "y": {"scale": "y", "field": "Value"},
                "stroke": {"scale": "color", "field": "Type"},
                "strokeWidth": {"value": 2}
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
    ],
    
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
      }
    }
  };
  
  vegaEmbed('#lineChart', chartLine).then(function(result) {
  
  }).catch(console.error);
  