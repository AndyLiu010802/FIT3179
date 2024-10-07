const chartPie = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Pie chart",
    "width": 350,
    "height": 300,
    "padding": { "top": 20, "left": 140, "right": 20, "bottom": 80 },
    "background": "#6b675b",
    "data": {
      "url": "https://raw.githubusercontent.com/AndyLiu010802/FIT3179/main/incomeExpense.json",
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
          "labels": ["2020-21", "2021-22", "2022-23"],
          "name": "Select Year: "
        }
      },
      {
        "name": "selectedDescription",
        "value": "Sales of goods",
        "bind": {
          "input": "select",
          "options": [
            "Sales of goods",
            "Service income",
            "Rent, leasing and hiring income",
            "Amount reimbursed under fuel tax credits",
            "Other operational costs",
            "Total funding from government for operational costs",
            "Interest income",
            "Other income",
            "Purchases of goods and materials",
            "Rent, leasing and hiring expenses",
            "Freight and cartage expenses",
            "Motor vehicle running expenses",
            "Repair and maintenance expenses",
            "Contract mining expenses",
            "Other contract, subcontract and commission expenses",
            "Selected labour costs",
            "Interest expenses",
            "Depreciation and amortisation",
            "Insurance premiums",
            "Natural resource royalties expenses",
            "Bad and doubtful debts",
            "Other expenses"
          ],
          "labels": [
            "Sales of goods",
            "Service income",
            "Rent, leasing and hiring income",
            "Amount reimbursed under fuel tax credits",
            "Other operational costs",
            "Total funding from government for operational costs",
            "Interest income",
            "Other income",
            "Purchases of goods and materials",
            "Rent, leasing and hiring expenses",
            "Freight and cartage expenses",
            "Motor vehicle running expenses",
            "Repair and maintenance expenses",
            "Contract mining expenses",
            "Other contract, subcontract and commission expenses",
            "Selected labour costs",
            "Interest expenses",
            "Depreciation and amortisation",
            "Insurance premiums",
            "Natural resource royalties expenses",
            "Bad and doubtful debts",
            "Other expenses"
          ],
          "name": "Select Description: "
        }
      }
    ],
    "transform": [
      {
        "filter": "datum.Year == selectedYear"
      },
      {
        "filter": "datum.Description == selectedDescription"
      }
    ],
    "mark": {
      "type": "arc",
      
    },
    "encoding": {
      "theta": { "field": "Amount", "type": "quantitative" },
      "color": {
        "field": "Sector",
        "type": "nominal",
        "scale": {
          "domain": [
            "Coal mining",
            "Oil and gas extraction",
            "Metal ore mining",
            "Non-metallic mineral mining and quarrying",
            "Exploration and other mining support services"
          ],
          "range": ["#d3fc81", "#fc81a2", "#81fc9c", "#9181fc", "#81f6fc"]
        },
        "legend": null
      },
      "tooltip": [
        { "field": "Description", "type": "nominal", "title": "Category" },
        { "field": "Amount", "type": "quantitative", "title": "Amount" },
        { "field": "Year", "type": "nominal", "title": "Year" },
        { "field": "Sector", "type": "nominal", "title": "Sector" }
      ]
    }
  };
  
  vegaEmbed('#pieChart', chartPie).then(function(result) {
  
  }).catch(console.error);
  