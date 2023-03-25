# React Charts

This is a playground to evaluate React charting libraries.

Libraries tried are:

- [x] [Highcharts](https://github.com/highcharts/highcharts-react) 🚀
- [x] [Apache Echarts](https://echarts.apache.org/en/index.html) 🚀
- [x] [ApexCharts](https://github.com/apexcharts/react-apexcharts) 🤔
- [x] [VisX](https://airbnb.io/visx/) 🤔
- [x] [Recharts](https://recharts.org/) 🤔
- [x] [Chart.js](https://github.com/reactchartjs/react-chartjs-2) 🤔
- [x] [Plotly](https://plotly.com/javascript/) 🤔

Libraries tried but not included here are:

- [x] [AM Charts](https://amcharts.com/) 👎  
       - Too complicated API when used in React.
- [x] [Frappe](https://frappe.io/charts) 👎  
       + Nice visually.  
       - Not enough chart types. Poor documentation.
- [x] [Charts.css](https://chartscss.org/) 👎  
       - Not enough chart types. Interesting idea but in early stages.
- [x] [Polaris viz](https://github.com/Shopify/polaris-viz) 👎  
       + Nice visually.  
       - Not enough chart types.
- [x] [Unovis](https://github.com/f5/unovis) 👎  
       - Not enough chart types. Has complicated API.
- [x] [ObservableHQ Plot](https://github.com/observablehq/plot) 👎  
       - Does not have good React support.
- [ ] [Nivo](https://nivo.rocks/components)  
       + Has many chart types.
- [ ] [Victory](https://formidable.com/open-source/victory/)  
       - Does not have heatmap or sunburst charts.
- [ ] [Billboard](https://naver.github.io/billboard.js/)

## Results

### **Highcharts**

[Documentation](https://www.highcharts.com/docs/)

#### Pros

1. Many chart types and options.
2. Extensive API.
3. Good documentation.

#### Cons

1. It mutates the original data array. [Related Github issue](https://github.com/highcharts/highcharts-react/issues/326).
2. It is a paid product for commercial use.
3. Responsive charts can be tricky to achieve.

#### Unique features

1. [Breadcrumbs](https://www.highcharts.com/docs/advanced-chart-features/breadcrumbs)
2. [Debugger module](https://www.highcharts.com/docs/advanced-chart-features/debugger-mode)
3. [Boost module](https://www.highcharts.com/docs/advanced-chart-features/boost-module)

---

### **Apache Echarts**

[Documentation](https://echarts.apache.org/handbook/en/get-started/)

#### Pros

1. Very nice visually.
2. Many chart types and customization options.
3. Extensive API.
4. Good documentation.
5. Responsive charts.

#### Cons

1. Does not have a React library, but is easily integratable.

---

### **VisX**

[Documentation](https://airbnb.io/visx/docs)

#### Pros

1. Has an extensive API since it's a D3 wrapper.
2. Nice visually.

#### Cons

1. Has a steep learning curve, since it's a D3 wrapper.
2. Does not have more complex charts, eg. sunburst.
3. Responsive charts require an additional wrapper.

#### Unique features

1. Uses [D3](https://d3js.org/).

---

### **Recharts**

[Documentation](https://recharts.org/en-US/api)

#### Pros

1. Extensive API.
2. Nice documentation.
3. Responsive charts.

#### Cons

1. Does not have many chart types, eg. heatmap, sunburst or polar charts.

---

### **Chart.js**

[Documentation](https://www.chartjs.org/docs/latest/)

#### Pros

1. Easy to use.
2. Nice documentation.
3. Responsive charts.

#### Cons

1. Does not have many chart types, eg. heatmap or sunburst charts.
2. Does not have an extensive API and many customization options.
3. Does not adjust its aspect ratio to its container.

---

### **Plotly**

[Documentation](https://plotly.com/javascript/)

#### Pros

1. Has many chart types and options.
2. Responsive charts.

#### Cons

1. Not the best Typescript support. Working, but may require some manual typing.

---

### **ApexCharts**

[Documentation](https://apexcharts.com/docs/installation/)

#### Pros

1. Has many chart types.
2. Has a simple API.
3. Nice visually.

#### Cons

1. Does not adjust its aspect ratio to its container.
2. To be responsive you need to provide width and height explicitly.
3. Does not have sunburst.

## TODO

- [ ] Performance benchmark on many data points
