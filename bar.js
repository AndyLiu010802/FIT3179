var bar = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
      "url": "https://raw.githubusercontent.com/AndyLiu010802/FIT3179/main/GeoScience_AUS.json",
        "format": {
          "type": "json"
        }
    },
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "State", 
        "type": "nominal", 
        "axis": {"title": "State"},
        "sort": "-y"
      },
      "y": {
        "aggregate": "count", 
        "field": "Name", 
        "type": "quantitative", 
        "axis": {"title": "Number of Deposits"}
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
              "#dd00ff",
              "#ff00aa",
              "#fab802",
              "#02fa55",
              "#8da0cb",
              "#e78ac3"
            ]
          },
        "legend": null
      },
        "tooltip": [
            {"field": "State", "type": "nominal", "title": "State"},
            {"field": "Name", "type": "quantitative", "title": "Number of Deposits"},
            {"field": "Commodity Group", "type": "nominal", "title": "Commodity Group"}
        ]
    }
  };
  
  vegaEmbed('#bar', bar).then(function (result) {
  }).catch(console.error);
  