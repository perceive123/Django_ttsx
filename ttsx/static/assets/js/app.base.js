

/* 
    Created on  : Tuesday, 28 June 2016 at 1:06 PM
    Author      : Prakasam Mathaiyan
    URL         : http://www.prakasam.co
    E-Mail      : hello@prakasam.co
    Description : This file handles complete list of functions, which is used 
                  for base layout. Kindly Dont delete or make any changes
*/


jQuery(document).ready(function () {
    
    handle_MainMenu();
    handle_ResponsiveMenu();
    handle_ActiveMenu();
    
    handle_PanelTools();
    handle_FlotModals();
    handle_CharacterCounter();
    handle_DatePicker();
    
    handle_Select2();
    handle_CustomSelect();
    handle_DateTimePicker();
    handle_LightGallery();
    
    handle_Trumbowyg();
    handle_EmojiOneArea();
    handle_IonRangeSlider();
    handle_BootstrapElements();
    
    handle_SummerNote();
    handle_SlimScroll();
    handle_DataBgImage();
    handle_Knob();
    
    handle_SparklineCharts();
    handle_Timepicker();
    handle_Colorpicker();
    
});



function handle_MainMenu(){
    
    $('.sidenav-size-toggle').click(function () {
        $('.wrapper').toggleClass('side-nav-sm');
        handle_ResponsiveMenu();
    });

    $('.side-nav-toggle').click(function () {
        $('.wrapper').toggleClass('side-nav-shown');
        $('.main-container').toggleClass('side-nav-shown');
    });

    $('.hover-expand .side-navigation-wrap').hover(
            function () {
                $('.wrapper').addClass('sidenav-active');
                setTimeout(function () {
                    handleResponsiveMenu();
                }, 200);
            },
            function () {
                $('.wrapper').removeClass('sidenav-active');
                setTimeout(function () {
                    handleResponsiveMenu();
                }, 200);
            }
    );

    $("body").on("mouseenter", ".side-nav-sm:not(.hover-expand) .side-nav > .has-submenu", function () {
        $(this).children('.collapse').collapse('show');
    }).on("mouseleave", ".side-nav-sm:not(.hover-expand) .side-nav > .has-submenu", function () {
        $(this).children('.collapse').collapse('hide');
    });

    $('.sidenav-inner').slimscroll({
        height: '100%',
        size: '2px',
        color: '#62657A',
        touchScrollStep: 20
    });
    
    $('.search-toggle').click(function () {
        $('.top-bar').toggleClass('active');
        return false;
    });
}

function handle_ResponsiveMenu(){
    
    if ($('.wrapper').hasClass('nav-top')) {
            var $el, leftPos, newWidth,
            $mainNav = $(".magic-nav");

            var hasActiveLink = false;
            $mainNav.children('li.active').each(function () {
                hasActiveLink = true;
            });

            if (hasActiveLink) {
                $('.magic-line').remove();

                $mainNav.append("<li class='magic-line'></li>");
                var $magicLine = $(".magic-line");

                $magicLine
                    .width($(".magic-nav > .active").width())
                    .css("left", $(".magic-nav > .active").position().left)
                    .data("origLeft", $magicLine.position().left)
                    .data("origWidth", $magicLine.width());

                $(".magic-nav > li > a").hover(function () {
                    $el = $(this);
                    leftPos = $el.parent().position().left;
                    newWidth = $el.parent().width();

                    $magicLine.stop().animate({
                        left: leftPos,
                        width: newWidth
                    });
                }, function () {
                    $magicLine.stop().animate({
                        left: $magicLine.data("origLeft"),
                        width: $magicLine.data("origWidth")
                    });
                });
            }
        } else {
            var $el, topPos, newHeight,
            $sideNav = $(".magic-nav");

            var hasActiveLink = false;
            $sideNav.children('li.active').each(function () {
                hasActiveLink = true;
            });

            if (hasActiveLink) {
                $('.magic-line').remove();

                $sideNav.append("<li class='magic-line'></li>");
                var $magicLine = $(".side-navigation-wrap .magic-line");

                $magicLine
                        .height($(".magic-nav > .active > a").innerHeight())
                        .css("top", $(".magic-nav > .active").position().top)
                        .data("origTop", $magicLine.position().top)
                        .data("origHeight", $magicLine.height());

                $(".magic-nav > li:not(.side-nav-header)").hover(function () {
                    $el = $(this);
                    topPos = $el.position().top;
                    newHeight = $el.children('a').innerHeight();

                    $magicLine.stop().animate({
                        top: topPos,
                        height: newHeight
                    });
                }, function () {
                    $magicLine.stop().animate({
                        top: $magicLine.data("origTop"),
                        height: $magicLine.data("origHeight")
                    });
                });
            }
        }
    
}

function handle_ActiveMenu(){
    
    $(".side-nav li.has-submenu .sub-menu ul li a").each(function () {
        if (this.href == window.location.href) {
            $(this).closest('li').addClass("active");
            $(this).closest('div.sub-menu').addClass("in");
            $(this).closest('li.has-submenu').find('> a').attr('aria-expanded','true');
        }
    });
    
}

function handle_PanelTools(){
    
    $panel_collapse = $('.panel .tools>.panel-collapse');
    $panel_reload = $('.panel .tools>.reload');
    $panel_expand = $('.panel .tools>.expand');
    $panel_close = $('.panel .tools>.panel-close');


    // For Panel Collapse and expend
    $($panel_collapse).bind('click', function () {
        var panel_body = $(this).parent().closest(".panel").children(".slimScrollDiv");
        var panel_slim_scroll = $(this).parent().closest(".panel").children(".panel-body");

        if ($(this).hasClass("collapses")) {
            $(this).addClass("panel-expand").removeClass("collapses");
            panel_body.slideUp(200);
            panel_slim_scroll.slideUp(200);
        } else {
            $(this).addClass("collapses").removeClass("panel-expand");
            panel_body.slideDown(200);
            panel_slim_scroll.slideDown(200);
        }
    });

    // For Panel Referesh
    $($panel_reload).bind('click', function () {
        var panel = $(this).parents(".panel");
        panel.block({
            overlayCSS: {
                backgroundColor: '#FFFFFF'
            },
            message: '<img src="assets/images/hourglass.svg">',
            css: {
                border: 'none',
                color: '#333333',
                background: 'none'
            }
        });

        window.setTimeout(function () {
            panel.unblock();
        }, 3000);

    });

    //  For full Screen
    $($panel_expand).bind('click', function () {

        $panel = $(this).parents('.panel');
        $panel.removeAttr('style');
        $panel_tools = $(this).closest('.tools').find('a').not(this);

        if ($panel.hasClass('panel-full-screen')) {
            $panel.removeClass('panel-full-screen');
            $panel_tools.show();
        } else {
            $panel_tools.hide();
            $panel.addClass('panel-full-screen');
        }
    });

    //  Panel Close
    $($panel_close).bind('click', function () {
        $(this).parents(".panel").remove();
    });
    
}   // function to activate the panel tools

function handle_FlotModals(){
    
    $(document).on('click', '[data-toggle="modal-float"]', function () {
        var target = $(this).data('target');
        $(target).toggleClass('open');
    });

    $(document).on('click', '[data-trigger="modal-float"]', function () {
        var target = $(this).data('target');
        $(target).addClass('open');
    });

    $(document).on('click', '[data-dismiss="modal-flot"]', function () {
        $(this).closest('.modal-flot').removeClass('open');
    });
    
}   //  Function to handle Float Modals

function handle_CharacterCounter(){
    if(jQuery().characterCounter) {
        $(".txtCharCounter").each(function() {
            $(this).characterCounter({
                maxLen: $(this).attr("maxlength"),
                warningLen: 5,
                showMsg: true,
                customMsg: "You have exceeded the permissible limit of characters..",
                separator: "/",
                warningColor: "#E03B30"
            });
        });
    }
}

function handle_DatePicker(){
    if(jQuery().datepicker) {
        $(".date-picker").each(function() {
            $(this).datepicker({
                autoclose:($(this).attr("data-autoclose") == "1" ? true : false),
                startDate: $(this).attr("data-startDate"),
                clearBtn: ($(this).attr("data-clearBtn") == "1" ? true : false),
            });
        });
    }
}   // function to handle Bootstrap3 Date Picker

function handle_Select2(){
    if(jQuery().select2) {
        
        $(".select2").each(function() {
            $(this).select2({
                placeholder: 'Select an option',
                minimumResultsForSearch: Infinity
            });
        });
        
        $(".select2Search").each(function() {
            $(this).select2({
                
            });
        });
        
        $(".select2Tags").each(function() {
            $(this).select2({
                tags: "true",
                placeholder: "Select an option",
                allowClear: true
            });
        });
        
    }
}   // function to handle Select 2

function handle_CustomSelect(){
    
    if(jQuery().customSelect) {
        
        $(".custom-Select").each(function() {
            $(this).customSelect({
                placeholder: $(this).attr("data-placeholder"),
                okCancelInMulti: ($(this).attr("data-okCancelInMulti") == "1" ? true : false),
                selectAll: ($(this).attr("data-selectAll") == "1" ? true : false),
                triggerChangeCombined: ($(this).attr("data-TCC") == "1" ? true : false),
                forceCustomRendering: ($(this).attr("data-fCR") == "1" ? true : false),
            });
        });
        
    }
    
}   // function to handle Custom Select

function handle_DateTimePicker(){
    
    if(jQuery().datetimepicker) {
        
        $(".dateTime-picker").each(function() {
            $(this).datetimepicker({
                locale: $(this).attr("data-locale"),
                viewMode: $(this).attr("data-viewMode"),
                format: $(this).attr("data-format"),
                inline: ($(this).attr("data-inline") == "1" ? true : false),
                sideBySide: ($(this).attr("data-sideBySide") == "1" ? true : false),
            });
        });
        
    }
    
}   // function to handle Bootstrap3 Date and Time Picker

function handle_LightGallery(){
    
    if(jQuery().lightGallery) {
        
        $(".lightgallery").each(function() {
            $(this).lightGallery({
                
            });
        });
        
    }
    
}   // function to handle Bootstrap3 Date and Time Picker

function handle_Trumbowyg(){
    
    if(jQuery().trumbowyg) {
        
        $(".editorTrumbowyg").each(function() {
            $(this).trumbowyg();
        });
        
    }
    
}   // function to handle 

function handle_EmojiOneArea(){
    
    if(jQuery().emojioneArea) {
        $(".txt-emoji").each(function() {
            $(this).emojioneArea({
                pickerPosition: $(this).attr("data-position"),
                filtersPosition: "bottom",
                tonesStyle: "square"
            });
        });
    }
    
}   // function to handle 

function handle_IonRangeSlider(){
    
    if(jQuery().ionRangeSlider) {
        $(".ion-slider").each(function() {
            $(this).ionRangeSlider({
                min: 0,
                max: 10000,
                from: 1000,
                to: 9000,
                type: 'double',
                prefix: "$",
                grid: true,
                grid_num: 10
            });
        });
    }
    
}   // function to handle 

function handle_BootstrapElements(){
    
    $('[data-toggle="tooltip"]').tooltip();
    
    $('[data-toggle="popover"]').popover();
    
}   // function to handle 

function handle_SummerNote(){
    
    var height = $('.summernote').data('height');
        
    if ($().summernote) {
        $('.summernote').summernote({
            height: height, // set editor height
            focus: true 
        });
    }
    
}   // function to handle 

function handle_SlimScroll(){
    
    if ($().slimScroll) {
        $(".scroller").each(function () {
            $(this).slimScroll({
                size: "5px",
                opacity: "0.5",
                position: $(this).attr("data-position"),
                height: $(this).attr("data-height"),
                alwaysVisible: ($(this).attr("data-always-visible") == "1" ? true : false),
                railVisible: ($(this).attr("data-rail-visible") == "1" ? true : false),
                disableFadeOut: true
            });
        });
    }
    
}   // function to handle 

function handle_DataBgImage() {                
        
    $(".dataBgImage").each(function () {            
        var bg_image = $(this).attr('data-bg-image');            
        $(this).css('background-image', 'url(' + bg_image + ')');
    });
    
};      //  Function to handle data-bg-image

function handle_Knob() {
    
    if ($().knob) {
        $(".chart-knob").each(function () {
            $(this).knob({
               
            });
        });
    }
    
};      //  Function to Knob Chart

function handle_SparklineCharts() {
    
    if ($().sparkline) {
        $(".sparkline-bar").each(function () {
            $(this).sparkline("html",{
               type: 'bar',
               height: $(this).attr("data-height"),
               lineColor: $(this).attr("data-lineColor"),
               barWidth: $(this).attr("data-barWidth"),
               barColor: $(this).attr("data-barColor")
            });
        });
    }
    

    if ($().sparkline) {
        $(".sparkline-pie").each(function () {
            $(this).sparkline("html",{
               type: 'pie',
               width: $(this).attr("data-width"),
               height: $(this).attr("data-height")
            });
        });
    }
    
    
};      //  Function to Sparkline Chart

function handle_Timepicker() {
            
    if ($().timepicker) {
        $(".time-picker").each(function () {
            $(this).timepicker({
               
            });
        });
    }
    
};      //  Function to handle Time picker

function handle_Colorpicker() {
            
    if ($().colorpicker) {
        $(".color-picker").each(function () {
            $(this).colorpicker({
               
            });
        });
    }
    
};      //  Function to handle Time picker
    

