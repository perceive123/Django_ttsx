


jQuery(document).ready(function () {
    "use strict";
    
    $(".range_2").ionRangeSlider({
        type: "double",
        min: 1000000,
        max: 2000000,
        grid: true
    });
    
    $(".range_3").ionRangeSlider({
        type: "double",
        min: 1000000,
        max: 2000000,
        grid: true,
        force_edges: true
    });
    
    $(".range_4").ionRangeSlider({
        type: "double",
        min: 0,
        max: 10000,
        grid: true
    });

    $(".range_5").ionRangeSlider({
        type: "double",
        min: 0,
        max: 10000,
        grid: true,
        grid_num: 10
    });

    $(".range_6").ionRangeSlider({
        type: "double",
        min: 0,
        max: 10000,
        step: 500,
        grid: true,
        grid_snap: true
    });

    $(".range_7").ionRangeSlider({
        type: "single",
        min: 0,
        max: 10,
        step: 2.34,
        grid: true,
        grid_snap: true
    });

    $(".range_8").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 30,
        to: 70,
        from_fixed: true
    });

    $(".range_9").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 30,
        to: 70,
        from_fixed: true,
        to_fixed: true
    });

    $(".range_10").ionRangeSlider({
        min: 0,
        max: 100,
        from: 30,
        from_min: 10,
        from_max: 50
    });

    $(".range_11").ionRangeSlider({
        min: 0,
        max: 100,
        from: 30,
        from_min: 10,
        from_max: 50,
        from_shadow: true
    });

    $(".range_12").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 20,
        from_min: 10,
        from_max: 30,
        from_shadow: true,
        to: 80,
        to_min: 70,
        to_max: 90,
        to_shadow: true,
        grid: true,
        grid_num: 10
    });

    $(".range_13").ionRangeSlider({
        min: 0,
        max: 100,
        from: 30,
        disable: true
    });
    

});