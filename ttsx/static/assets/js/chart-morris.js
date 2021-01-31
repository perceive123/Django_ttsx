


/* 

    App Name    : Bycicle - Responsive Admin Theme
    Author      : Pixelfarm.in
    Author URI  : http://Pixelfarm.in/


*/



var MorrisCharts = function() {
    
    var handleAreaChart = function () {
        
        // Use Morris.Area instead of Morris.Line
        Morris.Area({
            element: 'areaChart',
            behaveLikeLine: true,
            data: [
                {x: '2011 Q1', y: 3, z: 3},
                {x: '2011 Q2', y: 2, z: 1},
                {x: '2011 Q3', y: 2, z: 4},
                {x: '2011 Q4', y: 3, z: 3}
            ],
            xkey: 'x',
            ykeys: ['y', 'z'],
            labels: ['Y', 'Z'],
            lineColors: ["#00A8C6", "#EB6841"],
            lineWidth: '1',
            resize: 'true',
            gridTextFamily: 'DIN Next LT Pro'
            
        });
        
    };      //  Function to handle Area Chart   
    
    var handleBarChart = function () {
        
        // Use Morris.Bar
        Morris.Bar({
            element: 'barChart',
            data: [
                {x: '2011 Q1', y: 3, z: 2, a: 3},
                {x: '2011 Q2', y: 2, z: 3, a: 1},
                {x: '2011 Q3', y: 4, z: 2, a: 4},
                {x: '2011 Q4', y: 2, z: 4, a: 3}
            ],
            xkey: 'x',
            ykeys: ['y', 'z', 'a'],
            labels: ['Y', 'Z', 'A'],
            barColors: ["#00A8C6", "#94C64B", "#EB6841"],
            lineWidth: '1',
            resize: 'true',
            gridTextFamily: 'DIN Next LT Pro'
        });
        
    };      //  Function to handle Area Chart   
    
    var handleDonutChart = function () {
        
        Morris.Donut({
            element: 'donutChart',
            data: [
                {value: 70, label: 'foo'},
                {value: 15, label: 'bar'},
                {value: 10, label: 'baz'},
                {value: 5, label: 'A really really long label'}
            ],
            colors: ["#00A8C6", "#94C64B", "#FFBE40", "#EB6841"],
            gridTextFamily: 'DIN Next LT Pro',
            resize: 'true',
            formatter: function (x) {
                return x + "%"
            }
        });
        
    };      //  Function to handle Donut Chart   
    

    return {
        init: function() {
            
            handleAreaChart();
            handleBarChart();
            handleDonutChart();
            
        }

    };
}();    
