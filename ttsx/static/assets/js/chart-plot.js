


/* 

    App Name    : Bycicle - Responsive Admin Theme
    Author      : Pixelfarm.in
    Author URI  : http://Pixelfarm.in/


*/


var FlotChart = function (){
    
    if (!jQuery.plot) { return; }
    
    // Real time Chart
    var handleRealTimeChart = function() {

        if (!jQuery.plot) {
            return;
        }

        var data = [];
        var totalPoints = 250;

        // random data generator for plot charts
        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);
            // do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50;
                var y = prev + Math.random() * 10 - 5;
                if (y < 0)
                    y = 0;
                if (y > 100)
                    y = 100;
                data.push(y);
            }
            // zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i)
                res.push([i, data[i]])
            return res;
        }

        function randValue() {
            return (Math.floor(Math.random() * (1 + 50 - 20))) + 10;
        }

        var visitors = [
            [1, randValue() - 5],
            [2, randValue() - 5],
            [3, randValue() - 5],
            [4, 6 + randValue()],
            [5, 5 + randValue()],
            [6, 20 + randValue()],
            [7, 25 + randValue()],
            [8, 36 + randValue()],
            [9, 26 + randValue()],
            [10, 38 + randValue()],
            [11, 39 + randValue()],
            [12, 50 + randValue()],
            [13, 51 + randValue()],
            [14, 12 + randValue()],
            [15, 13 + randValue()],
            [16, 14 + randValue()],
            [17, 15 + randValue()],
            [18, 15 + randValue()],
            [19, 16 + randValue()],
            [20, 17 + randValue()],
            [21, 18 + randValue()],
            [22, 19 + randValue()],
            [23, 20 + randValue()],
            [24, 21 + randValue()],
            [25, 14 + randValue()],
            [26, 24 + randValue()],
            [27, 25 + randValue()],
            [28, 26 + randValue()],
            [29, 27 + randValue()],
            [30, 31 + randValue()]
        ];

        var updateInterval = 30;
        var plot_statistics = $.plot($("#realTimeChart"), [getRandomData()], {
            series: {
                shadowSize: 1
            },
            lines: {
                show: true,
                lineWidth: 0.2,
                fill: true,
                fillColor: {
                    colors: [{
                            opacity: 1
                        }, {
                            opacity: 1
                        }]
                }
            },
            yaxis: {
                min: 0,
                max: 100,
                tickFormatter: function(v) {
                    return v + "%";
                }
            },
            xaxis: {
                show: false
            },
            colors: ["#FDBA47"],
            grid: {
                tickColor: "#EEEEEE",
                borderWidth: 0
            }
        });

        function statisticsUpdate() {
            plot_statistics.setData([getRandomData()]);
            plot_statistics.draw();
            setTimeout(statisticsUpdate, updateInterval);
        }
        statisticsUpdate();

       
    };
    
    // Function to handel Basic Charts
    var handelBasicChart = function () {
        var d1 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.25) {
            d1.push([i, Math.sin(i)]);
        }

        var d2 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.25) {
            d2.push([i, Math.cos(i)]);
        }


        $.plot("#basicChart", [
            {label: "sin(x)", data: d1, color: '#45B509'},
            {label: "cos(x)", data: d2, color: '#E03B30'}
        ], {
            series: {
                lines: {show: true},
                points: {show: true}
            },
            xaxis: {
                ticks: [
                    0, [Math.PI / 2, "\u03c0/2"], [Math.PI, "\u03c0"],
                    [Math.PI * 3 / 2, "3\u03c0/2"], [Math.PI * 2, "2\u03c0"]
                ]
            },
            yaxis: {
                ticks: 10,
                min: -2,
                max: 2,
                tickDecimals: 3
            },
            grid: {
                hoverable: true,
                backgroundColor: {colors: ["#fff", "#fff"]},
                borderWidth: {
                    top: 1,
                    right: 1,
                    bottom: 2,
                    left: 2
                }
            },
            tooltip: true,
            tooltipOpts: {
                content: "'%s' of %x.1 is %y.4",
                shifts: {
                    x: -60,
                    y: 25
                }
            }
        });
    }
    
    // Function For Tracking Curves
    var handelTrackingCurves = function () {
  
        var sin = [],
                cos = [];
        for (var i = 0; i < 14; i += 0.1) {
            sin.push([i, Math.sin(i)]);
            cos.push([i, Math.cos(i)]);
        }

        plot = $.plot($("#trackingCurves"), [{
                data: sin,
                label: "sin(x) = -0.00",
                color: '#00B1FF'
            }, {
                data: cos,
                label: "cos(x) = -0.00",
                color: '#FDBA47'
            }], {
            series: {
                lines: {
                    show: true
                }
            },
            crosshair: {
                mode: "x"
            },
            grid: {
                hoverable: true,
                autoHighlight: false
            },
            yaxis: {
                min: -1.2,
                max: 1.2
            },
            tooltip: true,
            tooltipOpts: {
                content: "'%s' of %x.1 is %y.4",
                shifts: {
                    x: -60,
                    y: 25
                }
            }
        });

        var legends = $("#trackingCurves .legendLabel");
        legends.each(function() {
            // fix the widths so they don't jump around
            $(this).css('width', $(this).width());
        });

        var updateLegendTimeout = null;
        var latestPosition = null;

        function updateLegend() {
            updateLegendTimeout = null;

            var pos = latestPosition;

            var axes = plot.getAxes();
            if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max || pos.y < axes.yaxis.min || pos.y > axes.yaxis.max)
                return;

            var i, j, dataset = plot.getData();
            for (i = 0; i < dataset.length; ++i) {
                var series = dataset[i];

                // find the nearest points, x-wise
                for (j = 0; j < series.data.length; ++j)
                    if (series.data[j][0] > pos.x)
                        break;

                // now interpolate
                var y, p1 = series.data[j - 1],
                        p2 = series.data[j];
                if (p1 == null)
                    y = p2[1];
                else if (p2 == null)
                    y = p1[1];
                else
                    y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);

                legends.eq(i).text(series.label.replace(/=.*/, "= " + y.toFixed(2)));
            }
        }

        $("#trackingCurves").bind("plothover", function(event, pos, item) {
            latestPosition = pos;
            if (!updateLegendTimeout)
                updateLegendTimeout = setTimeout(updateLegend, 50);
        });
    }
    
    // Function For Area Curves
    var handleAreaChart = function () {
        
        var data1 = [
            [new Date("2016/01/03"), 10], 
            [new Date("2016/01/04"), 7], 
            [new Date("2016/01/05"), 9], 
            [new Date("2016/01/06"), 11], 
            [new Date("2016/01/07"), 8],
            [new Date("2016/01/08"), 12],
            [new Date("2016/01/09"), 16],
            [new Date("2016/01/10"), 10],
            [new Date("2016/01/11"), 14],
            [new Date("2016/01/12"), 9],
            [new Date("2016/01/13"), 14]
        ];
        
        var data2 = [
            [new Date("2016/01/03"), 14], 
            [new Date("2016/01/04"), 11], 
            [new Date("2016/01/05"), 10], 
            [new Date("2016/01/06"), 12], 
            [new Date("2016/01/07"), 14],
            [new Date("2016/01/08"), 11],
            [new Date("2016/01/09"), 8],
            [new Date("2016/01/10"), 11],
            [new Date("2016/01/11"), 15],
            [new Date("2016/01/12"), 10],
            [new Date("2016/01/13"), 16]
        ];

        var data3 = [
            [new Date("2016/01/03"), 18], 
            [new Date("2016/01/04"), 9], 
            [new Date("2016/01/05"), 13], 
            [new Date("2016/01/06"), 11], 
            [new Date("2016/01/07"), 15],
            [new Date("2016/01/08"), 12],
            [new Date("2016/01/09"), 9],
            [new Date("2016/01/10"), 11],
            [new Date("2016/01/11"), 8],
            [new Date("2016/01/12"), 13],
            [new Date("2016/01/13"), 14]
        ];
        
        //flot options
        var options = {
                
            series: {
                curvedLines: {
                    apply: true,
                    active: true,
                    monotonicFit: true
                }                
            },
            legend:{
                show: false
            },
            grid: {
                hoverable: true,
                borderWidth: {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1
                },
                borderColor: {
                    top: 'rgba(0,0,0,.1)', 
                    bottom: 'rgba(0,0,0,.1)', 
                    left: 'rgba(0,0,0,.1)',
                    right: 'rgba(0,0,0,.1)'
                }
            },
            yaxis: {
                color: '#2695a6',
                tickColor: 'rgba(0,0,0,.1)'               
            }, 
            xaxis: {
                show: true,
                color: '#f5f5f5',
                mode: "time",
                tickSize: [1, "day"],
                tickLength: 0,
                timeformat: "%d/%m",
                axisLabel: "Date"
            }, 
            tooltip: true,
            tooltipOpts: {
                content: "<strong>%s</strong><br> %x/16 : %y"
            },
            lines: {
                show: true,
                fill: .15,
                lineWidth: 1
            },
            stack: true,
            points: {
                show: false,
                lineWidth: 1.5,
                radius: 2,
                symbol: "circle",
                fill: true,
                fillColor: "#ffffff"
            }
            
        };
        
        $.plot($("#areaChart"), [ 
            {            
                data: data1,                
                label: "Jarno Fabritius's Sale",
                color: '#00A8C6'
            },
            {
                data: data2,                 
                label: "Jakub Antalík's Sale", 
                color: '#94C64B'
            },
            {
                data: data3,
                label: "Piotr Adam Kwiatkowski's Sale",                                 
                color: '#EB6841'
            }
        ], options);
        
    };      
    
    // Function to handel Bar Chart
    var handelBarChart = function () {
        var dataforBar = [
            {
                data: [[0, 4.1]],
                color: "#00A8C6"
            },
            {
                data: [[1, 1.8]],
                color: "#94C64B"
            },
            {
                data: [[2, 2]],
                color: "#EB6841"
            },
            {
                data: [[3, 4.5]],
                color: "#FFBE40"
            },
            {
                data: [[4, 3.7]],
                color: "#3C3251"
            },
            {
                data: [[5, 5.6]],
                color: "#BBBB88"
            },
            {
                data: [[6, 2.6]],
                color: "#4F5367"
            }
        ];

        $.plot($("#barChart"), dataforBar, {
            series: {
                lines: {
                    fill: false
                },
                points: {show: false},
                bars: {
                    show: true,
                    align: 'center',
                    barWidth: 0.5,
                    fill: 1,
                    lineWidth: 1
                }
            },
            xaxis: {
                tickLength: 0,
                ticks: [
                    [0, "Data One"],
                    [1, "Data Two"],
                    [2, "Data Three"],
                    [3, "Data Four"],
                    [4, "Data Five"],
                    [5, "Data Six"],
                    [6, "Data Seven"]]
            },
            yaxis: {
                min: 0
            },
            grid: {
                borderWidth: 0,
                hoverable: true
            },
            tooltip: true,
            tooltipOpts: {
                content: "Value: %y"
            }
        });
    }
    
    //  Function To handel Multi Bar Chart
    var handelMultiBarChart = function() {
         
        var d1_1 = [
            [1325376000000, 50],
            [1328054400000, 70],
            [1330560000000, 100],
            [1333238400000, 60],
            [1335830400000, 35]
        ];

        var d1_2 = [
            [1325376000000, 80],
            [1328054400000, 60],
            [1330560000000, 30],
            [1333238400000, 35],
            [1335830400000, 30]
        ];

        var d1_3 = [
            [1325376000000, 60],
            [1328054400000, 40],
            [1330560000000, 30],
            [1333238400000, 20],
            [1335830400000, 10]
        ];

        var d1_4 = [
            [1325376000000, 15],
            [1328054400000, 10],
            [1330560000000, 15],
            [1333238400000, 20],
            [1335830400000, 15]
        ];

        var data1 = [
            {
                label: "Leigh Taylor",
                data: d1_1,
                bars: {
                    show: true,
                    barWidth: 12 * 24 * 60 * 60 * 300,
                    fill: true,
                    lineWidth: 1,
                    order: 1,
                    fillColor: "#00A8C6"
                },
                color: "#00A8C6"
            },
            {
                label: "Dave Gamache",
                data: d1_2,
                bars: {
                    show: true,
                    barWidth: 12 * 24 * 60 * 60 * 300,
                    fill: true,
                    lineWidth: 1,
                    order: 2,
                    fillColor: "#94C64B"
                },
                color: "#94C64B"
            },
            {
                label: "Athul Athreya",
                data: d1_3,
                bars: {
                    show: true,
                    barWidth: 12 * 24 * 60 * 60 * 300,
                    fill: true,
                    lineWidth: 1,
                    order: 3,
                    fillColor: "#EB6841"
                },
                color: "#EB6841"
            },
            {
                label: "Danilo Tanić",
                data: d1_4,
                bars: {
                    show: true,
                    barWidth: 12 * 24 * 60 * 60 * 300,
                    fill: true,
                    lineWidth: 1,
                    order: 4,
                    fillColor: "#3C3251"
                },
                color: "#3C3251"
            }
        ];

        $.plot($("#multiBarChart"), data1, {
            xaxis: {
                min: (new Date(2011, 11, 15)).getTime(),
                max: (new Date(2012, 04, 18)).getTime(),
                mode: "time",
                timeformat: "%b",
                tickSize: [1, "month"],
                monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                tickLength: 0, // hide gridlines
                axisLabel: 'Month',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelPadding: 5
            },
            yaxis: {
                axisLabel: 'Value',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelPadding: 5
            },
            grid: {
                hoverable: true,
                clickable: false,
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,.1)'
            },
            tooltip: true,
            tooltipOpts: {
                content: "Sales: %y"
            },
            legend: {
                labelBoxBorderColor: "none",
                position: "left"
            },
            series: {
                shadowSize: 1
            }
        });
    };
    
    //  Function To Handel Pie Chart
    var handelPieChart = function () {
        var dataforPie = [
            {
                label: "Leigh Taylor",
                data: 150,
                color: "#00A8C6"
            },
            {
                label: "Dave Gamache",
                data: 100,
                color: "#94C64B"
            },
            {
                label: "Athul Athreya",
                data: 250,
                color: "#EB6841"
            },
            {
                label: "Danilo Tanić",
                data: 250,
                color: "#FFBE40"
            },
            {
                label: "Cihangir Öziş",
                data: 250,
                color: "#3C3251"
            },
            {
                label: "Nicolas Quod",
                data: 250,
                color: "#BBBB88"
            }
        ];

        var options = {
            series: {
                pie: {
                    show: true
                }
            },
            grid: {
                hoverable: true
            },
            tooltip: true,
            tooltipOpts: {
                content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
                shifts: {
                    x: 20,
                    y: 0
                },
                defaultTheme: false
            },
            legend: {
                show: true
            }
        };

        $.plot($("#pieChart"), dataforPie, options);
    };
    
    // Function To handel Donut Chart
    var handelDonutChart = function () {
        var dataforPie = [
            {
                label: "Leigh Taylor",
                data: 150,
                color: "#00A8C6"
            },
            {
                label: "Dave Gamache",
                data: 100,
                color: "#94C64B"
            },
            {
                label: "Athul Athreya",
                data: 250,
                color: "#EB6841"
            },
            {
                label: "Danilo Tanić",
                data: 250,
                color: "#FFBE40"
            },
            {
                label: "Cihangir Öziş",
                data: 250,
                color: "#3C3251"
            },
            {
                label: "Nicolas Quod",
                data: 250,
                color: "#BBBB88"
            }
        ];

        var options = {
            series: {
                pie: {
                    innerRadius: 0.5,
                    show: true
                }
            },
            grid: {
                hoverable: true
            },
            tooltip: true,
            tooltipOpts: {
                content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
                shifts: {
                    x: 20,
                    y: 0
                },
                defaultTheme: false
            },
            legend: {
                show: true
            }
        };

        $.plot($("#donutChart"), dataforPie, options);
    }
    
    
    return {
        init: function() {
            
            handleRealTimeChart();
            handelBasicChart();
            handelTrackingCurves();
            handleAreaChart();
            handelBarChart();
            handelMultiBarChart();
            handelPieChart();
            handelDonutChart();
        }
        
    };
}();    // Float Chart Scripts
