






jQuery(document).ready(function () {
    
    handle_ChartLive();
    handle_ChartBrowserInfo();
    handle_MonthlyCalendar();
    
});


function handle_ChartLive() {
    
    if (!jQuery.plot) {  return; }

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

    var updateInterval = 900;
    var plot_statistics = $.plot($("#chartLive"), [getRandomData()], {
        series: {
            shadowSize: 1
        },
        lines: {
            show: true,
            lineWidth: 0.6,
            fill: true,
            fillColor: {
                colors: [{
                        opacity: .3
                    }, {
                        opacity: .3
                    }]
            }
        },
        yaxis: {
            color:"#8400ff",
            min: 0,
            max: 100,
            tickColor: "rgba(0,0,0,.06)",
            tickFormatter: function (v) {
                return v + "%";
            }
        },
        xaxis: {
            color:"#8400ff",
            show: false
        },
        colors: ["#00c9e6"],
        grid: {
            borderWidth: 0
            
        }
    });

    function statisticsUpdate() {
        plot_statistics.setData([getRandomData()]);
        plot_statistics.draw();
        setTimeout(statisticsUpdate, updateInterval);
    }
    statisticsUpdate();
    
}

function handle_ChartBrowserInfo() {
    
    var d1 = [],
        series = Math.floor(Math.random() * 6) + 3;

    d1[0] = {
        label: "Chrome",
        data: Math.floor(Math.random() * 100) + 1
    };
    d1[1] = {
        label: "Firefox",
        data: Math.floor(Math.random() * 100) + 1
    };
    d1[2] = {
        label: "Safari",
        data: Math.floor(Math.random() * 100) + 1
    };
    d1[3] = {
        label: "Opera",
        data: Math.floor(Math.random() * 100) + 1
    };
    d1[4] = {
        label: "Others",
        data: Math.floor(Math.random() * 100) + 1
    };
    $.plot('#browser-chart', d1, {
        series : {
            pie : {
                innerRadius : 0.4,
                show : true,
                stroke : {
                    width : 0
                },
                label : {
                    show : true,
                    threshold : 0.05
                }
            }
        },
        colors : ['#606ddd','#febf34','#1bc9e4','#ff4a5d','#363b5b'],
        grid : {
            hoverable : true
        }
    });


}

function handle_MonthlyCalendar() {
    
    $('#mycalendar').monthly({
        mode: 'event',
        jsonUrl: 'demo/data/monthly-events.json',
        dataType: 'json'
        //xmlUrl: 'data/events.xml'
    });
    
    switch (window.location.protocol) {
        case 'http:':
        case 'https:':
            // running on a server, should be good.
            break;
        case 'file:':
            alert('Just a heads-up, events will not work when run locally.');
    }
    
};
