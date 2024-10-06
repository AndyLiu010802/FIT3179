const chartLine = {
//     "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
//     "data": {
//       "url": "https://raw.githubusercontent.com/AndyLiu010802/FIT3179-w10/main/Expenditure.json",
//       "format": {
//         "type": "json"
//       }
//     },
//     "transform": [
//       {
//         "fold": ["Total Deposits ($M)", "New Deposits ($M)", "Existing Deposits ($M)"],
//         "as": ["Deposit Type", "Value"]
//       },
//       {
//         "calculate": "toDate(datum.Date)",
//         "as": "ParsedDate"
//       }
//     ],
//     "mark": "line",
//     "encoding": {
//       "x": {
//         "field": "ParsedDate",
//         "type": "temporal",
//         "axis": {"title": "Date"}
//       },
//       "y": {
//         "field": "Value",
//         "type": "quantitative",
//         "axis": {"title": "Deposit Value ($M)"}
//       },
//       "color": {
//         "field": "Deposit Type",
//         "type": "nominal",
//         "scale": {
//           "domain": ["Total Deposits ($M)", "New Deposits ($M)", "Existing Deposits ($M)"],
//           "range": ["#1f77b4", "#ff7f0e", "#2ca02c"]
//         },
//         "legend": {"title": "Deposit Type"}
//       }
//     }
//   }
  
 
  
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "description": "A basic line chart example.",
    "width": 500,
    "height": 200,
    "padding": 5,
    
    "signals": [
      {
        "name": "interpolate",
        "value": "linear",
        "bind": {
          "input": "select",
          "options": [
            "basis",
            "cardinal",
            "catmull-rom",
            "linear",
            "monotone",
            "natural",
            "step",
            "step-after",
            "step-before"
          ]
        }
      }
    ],
  
    "data": {
        "name": "table",
      "url": "https://raw.githubusercontent.com/AndyLiu010802/FIT3179-w10/main/Expenditure.json",
      "format": {
        "type": "json"
      }
    },

   "scales": [
      {
        "name": "x",
        "type": "point",
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
        "range": "category",
        "domain": {"data": "table", "field": "Type"}
      }
    ],
  
    "axes": [
      {"orient": "bottom", "scale": "x"},
      {"orient": "left", "scale": "y"}
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
                "x": {"scale": "x", "field": "x"},
                "y": {"scale": "y", "field": "y"},
                "stroke": {"scale": "color", "field": "Type"},
                "strokeWidth": {"value": 2}
              },
              "update": {
                "interpolate": {"signal": "interpolate"},
                "strokeOpacity": {"value": 1}
              },
              "hover": {
                "strokeOpacity": {"value": 0.5}
              }
            }
          }
        ]
      }
    ]
  }
  
  

vegaEmbed('#lineChart', chartLine).then(function(result) {
}).catch(console.error);
  