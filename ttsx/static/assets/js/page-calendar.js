


/* 

    App Name    : Bycicle - Responsive Admin Theme
    Author      : Pixelfarm.in
    Author URI  : http://Pixelfarm.in/


*/



var Calendar = function() {

    var handleAdminCalendar = function () {
        
        if (!jQuery().fullCalendar) {
            return;
        }
        
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        
        
        
        
        
        
        $('.calaendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            selectable: true,
            events: [
                {
                    title: 'Lorem ipsum dolor',
                    start: new Date(y, m, 1),
                    msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    color:'#FF5F2D'
                },
                {
                    title: 'consectetur adipiscing',
                    start: new Date(y, m, 3),
                    end: new Date(y, m, 5),
                    msg: 'Nullam sed tortor vel leo convallis facilisis',
                    color:'#517BA8'
                },
                {
                    title: 'Phasellus nisi libero',
                    start: new Date(y, m, d - 3, 16, 0),
                    allDay: false,
                    msg: 'suscipit sed nunc vitae, molestie tempor ex. Proin eget enim ligula. Vestibulum id nisi justo',
                    color:'#FF6562'
                },
                {
                    title: 'Donec aliquet mollis',
                    start: new Date(y, m, d + 4, 16, 0),
                    allDay: false,
                    msg: 'Pellentesque tincidunt et dui vitae iaculis. Nulla facilisi. Proin at nulla sit amet arcu tempus laoreet. Duis nibh velit, dictum consectetur fringilla vitae, tempor eu lectus',
                    color:'#59534A'
                },
                {
                    title: 'Maecenas eu nibh',
                    start: new Date(y, m, d - 5),
                    end: new Date(y, m, d - 2),
                    msg: 'Nullam sed tortor vel leo convallis facilisis',
                    color:'#898BE0'
                },
                {
                    title: 'Cum sociis natoque penatibus',
                    start: new Date(y, m, d - 3, 16, 0),
                    allDay: false,
                    msg: 'Vivamus feugiat nibh ut tortor efficitur volutpat',
                    color:'#B8D67D'
                },
                {
                    title: 'Lorem ipsum dolor sit amet',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false,
                    color:'#7AC70C',
                    msg: 'Sed bibendum felis id magna semper, sit amet volutpat nibh vestibulum',
                    editable: false
                },
                {
                    title: 'Aliquam hendrerit libero',
                    start: new Date(y, m, d + 1, 19, 0),
                    end: new Date(y, m, d + 1, 22, 30),
                    msg: 'Mauris et dignissim augue. Vestibulum a gravida arcu. Vestibulum eget massa faucibus risus pharetra aliquet',
                    color:'#7AC70C'
                },
                {
                    title: 'Personal Leave',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    msg: 'Vestibulum a gravida arcu. Vestibulum eget massa faucibus risus pharetra aliquet',
                    color:'#ff6600'
                },
                {
                    title: 'Planed Leave',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    msg: 'Praesent tincidunt mi volutpat ligula accumsan tristique',
                    color:'#ffb700'
                    
                }
            ],
            eventRender: function (e, elm) {
                elm.popover({
                    title: e.title,
                    placement: 'top',
                    html: true,
                    content: e.msg,
                    trigger: 'click',
                    container: "body"
                });
            }
        });
                
    };      //  Function to handle Full Calendar   

    return {
        init: function() {
            
            handleAdminCalendar();
            
        }

    };
}();    


jQuery(document).ready(function () {
    Calendar.init();
});
