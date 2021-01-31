


jQuery(document).ready(function () {
   
    var GageOne = new JustGage({
        id: 'GageOne',
        value: 65,
        min: 0,
        max: 100,
        relativeGaugeSize: true,
        counter: true,
        
    });
    
   
    
    var GageTwo = new JustGage({
        id: 'GageTwo',
        value: 80,
        min: 0,
        max: 100,
        reverse: true,
        relativeGaugeSize: true,
        counter: true,
        valueFontColor: "#00B1FF",
        valueFontFamily: "Lato"
    });
    
    GageTwo.txtValue.attr({
        "font-weight": "300"
    });
    
    
    
    var GageThree = new JustGage({
        id: "GageThree",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        relativeGaugeSize: true,
        gaugeWidthScale: 0.2,
        donut: true,
        valueFontFamily: "Lato"
    });
    
    GageThree.txtValue.attr({
        "font-weight": "300"
    });
    
    
    
    var GageFour = new JustGage({
        id: 'GageFour',
        value: 65,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        gaugeWidthScale: 0.5,
        relativeGaugeSize: true,
        pointerOptions: {
          color: '#00A8C6'
        },
        customSectors: [{
                color: '#E03B30',
                lo: 0,
                hi: 33
            }, {
                color: '#FDBA47',
                lo: 34,
                hi: 65
            },{
                color: '#45B509',
                lo: 66,
                hi: 100
            }],
        counter: true
    });
    
    setInterval(function () {
        GageFour.refresh(getRandomInt(0, 100));
    }, 2500);
    
    
    var GageFIve = new JustGage({
        id: 'GageFIve',
        value: 45,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        relativeGaugeSize: true,
        pointerOptions: {
            toplength: -15,
            bottomlength: 10,
            bottomwidth: 12,
            color: '#8e8e93',
            stroke: '#ffffff',
            stroke_width: 3,
            stroke_linecap: 'round'
        },
        gaugeWidthScale: 0.6,
        counter: true
    });
    
    var GageSix = new JustGage({
        id: 'GageSix',
        value: 40,
        min: 0,
        max: 100,
        symbol: '%',
        donut: true,
        pointer: true,
        gaugeWidthScale: 0.4,
        relativeGaugeSize: true,
        pointerOptions: {
            toplength: 10,
            bottomlength: 10,
            bottomwidth: 8,
            color: '#000'
        },
        customSectors: [{
                color: "#ff0000",
                lo: 50,
                hi: 100
            }, {
                color: "#00ff00",
                lo: 0,
                hi: 50
            }],
        counter: true
    });
    
    var GageSeven = new JustGage({
        id: 'GageSeven',
        value: 70,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        relativeGaugeSize: true,
        pointerOptions: {
            toplength: 8,
            bottomlength: -20,
            bottomwidth: 6,
            color: '#8e8e93'
        },
        gaugeWidthScale: 0.1,
        counter: true
    });
    
    var GageEight = new JustGage({
        id: "GageEight",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        relativeGaugeSize: true,
        label: "Pounds"
    });
    
    var GageNine = new JustGage({
        id: "GageNine",
        value: 50,
        min: 0,
        max: 100,
        label: "temperature",
        pointer: true,
        relativeGaugeSize: true,
        textRenderer: function (val) {
            if (val < 50) {
                return 'Cold';
            } else if (val > 50) {
                return 'Hot';
            } else if (val === 50) {
                return 'OK';
            }
        }
    });
    
    var g21 = new JustGage({
        id: "g21",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        title: "Custom Width",
        label: "",
        relativeGaugeSize: true,
        gaugeWidthScale: 0.2
    });

    var g22 = new JustGage({
        id: "g22",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        relativeGaugeSize: true,
        title: "Custom Shadow",
        label: "",
        shadowOpacity: 1,
        shadowSize: 5,
        shadowVerticalOffset: 10
    });
    
    var g23 = new JustGage({
        id: "g23",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        relativeGaugeSize: true,
        title: "Custom Colors",
        label: "",
        levelColors: [
            "#00fff6",
            "#ff00fc",
            "#1200ff"
        ]
    });
    
    var g24 = new JustGage({
        id: "g24",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        relativeGaugeSize: true,
        title: "Hide Labels",
        hideMinMax: true
    });
    
    var g25 = new JustGage({
        id: "g25",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        relativeGaugeSize: true,
        title: "Animation Type",
        label: "",
        startAnimationTime: 2000,
        startAnimationType: ">",
        refreshAnimationTime: 1000,
        refreshAnimationType: "bounce"
    });
    
    var g26 = new JustGage({
        id: "g26",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        relativeGaugeSize: true,
        title: "Minimal",
        label: "",
        hideMinMax: true,
        gaugeColor: "#fff",
        levelColors: ["#000"],
        hideInnerShadow: true,
        startAnimationTime: 1,
        startAnimationType: "linear",
        refreshAnimationTime: 1,
        refreshAnimationType: "linear"
    });
    
    var g27 = new JustGage({
        id: "g27",
        title: "Font Options",
        value: 72,
        min: 0,
        minTxt: "min",
        max: 100,
        relativeGaugeSize: true,
        maxTxt: "max",
        gaugeWidthScale: 0.6,
        counter: true,
        titleFontColor: "red",
        titleFontFamily: "DIN Next LT Pro",
        titlePosition: "below",
        valueFontColor: "blue",
        valueFontFamily: "Lato"
    });
    
    g27.txtValue.attr({
        "font-weight": "100"
    });
   
});
