const chartBubble = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Bubble chart for mining data with total income, total expenses, and operating profit.",
    "width": 600,
    "height": 400,
    "data": {
      "values": [
        {"Year": "2020-21", "Mining Realm": "Coal mining", "Total Income ($m)": 53304, "Total Expenses ($m)": 57034, "Operating Profit Before Tax ($m)": -3741},
        {"Year": "2020-21", "Mining Realm": "Oil and gas extraction", "Total Income ($m)": 42118, "Total Expenses ($m)": 55158, "Operating Profit Before Tax ($m)": -13063},
        {"Year": "2020-21", "Mining Realm": "Metal ore mining", "Total Income ($m)": 214116, "Total Expenses ($m)": 103555, "Operating Profit Before Tax ($m)": 111796},
        {"Year": "2020-21", "Mining Realm": "Non-metallic mineral mining", "Total Income ($m)": 8226, "Total Expenses ($m)": 7248, "Operating Profit Before Tax ($m)": 874},
        {"Year": "2020-21", "Mining Realm": "Exploration services", "Total Income ($m)": 18255, "Total Expenses ($m)": 16951, "Operating Profit Before Tax ($m)": 1319},
        {"Year": "2021-22", "Mining Realm": "Coal mining", "Total Income ($m)": 108734, "Total Expenses ($m)": 67354, "Operating Profit Before Tax ($m)": 41519},
        {"Year": "2021-22", "Mining Realm": "Oil and gas extraction", "Total Income ($m)": 92009, "Total Expenses ($m)": 58821, "Operating Profit Before Tax ($m)": 33281},
        {"Year": "2021-22", "Mining Realm": "Metal ore mining", "Total Income ($m)": 221086, "Total Expenses ($m)": 115708, "Operating Profit Before Tax ($m)": 107154},
        {"Year": "2021-22", "Mining Realm": "Non-metallic mineral mining", "Total Income ($m)": 10492, "Total Expenses ($m)": 8627, "Operating Profit Before Tax ($m)": 1939},
        {"Year": "2021-22", "Mining Realm": "Exploration services", "Total Income ($m)": 20388, "Total Expenses ($m)": 19777, "Operating Profit Before Tax ($m)": 766},
        {"Year": "2022-23", "Mining Realm": "Coal mining", "Total Income ($m)": 163013, "Total Expenses ($m)": 90574, "Operating Profit Before Tax ($m)": 73315},
        {"Year": "2022-23", "Mining Realm": "Oil and gas extraction", "Total Income ($m)": 149324, "Total Expenses ($m)": 73499, "Operating Profit Before Tax ($m)": 76562},
        {"Year": "2022-23", "Mining Realm": "Metal ore mining", "Total Income ($m)": 205821, "Total Expenses ($m)": 124998, "Operating Profit Before Tax ($m)": 83041},
        {"Year": "2022-23", "Mining Realm": "Non-metallic mineral mining", "Total Income ($m)": 21816, "Total Expenses ($m)": 11778, "Operating Profit Before Tax ($m)": 10427},
        {"Year": "2022-23", "Mining Realm": "Exploration services", "Total Income ($m)": 21590, "Total Expenses ($m)": 23150, "Operating Profit Before Tax ($m)": -1440}
      ]
    },
    "mark": "circle",
    "encoding": {
      "x": {"field": "Year", "type": "ordinal"},
      "y": {"field": "Mining Realm", "type": "ordinal"},
      "size": {"field": "Operating Profit Before Tax ($m)", "type": "quantitative"},
      "color": {"field": "Mining Realm", "type": "nominal"},
      "tooltip": [
        {"field": "Mining Realm", "type": "nominal", "title": "Mining Realm"},
        {"field": "Total Income ($m)", "type": "quantitative", "title": "Total Income"},
        {"field": "Total Expenses ($m)", "type": "quantitative", "title": "Total Expenses"},
        {"field": "Operating Profit Before Tax ($m)", "type": "quantitative", "title": "Operating Profit Before Tax"}
      ]
    }
  }
  vegaEmbed('#chartBubble ', chartBubble ).then(function (result) {
}).catch(console.error);