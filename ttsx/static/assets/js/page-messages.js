


/* 
    Created on  : Nov 29, 2016, 12:50:39 AM
    Author      : Prakasam Mathaiyan
    URL         : http://www.prakasam.co
    E-Mail      : hello@prakasam.co
*/



var Compose = function() {
    
    
    var handleSidebarHeight = function() {
        
        var msgGridHeight = $('.right-message-grid').height();
        $('.menu-grid').height(msgGridHeight);
        
    };     // Handle Add New Email ID's
    
    var handleAddEmail = function() {
        
        $(".toUserEmail").chosen({
            width: "100%",
            html_template: '{text} <img class="{class_name}" src="{url}">',
        });

        
    };     // Handle Add New Email ID's
    
    var handleDropZoneUpload = function () {
        "use strict";
        Dropzone.options.uplMngPrss = {
            paramName: "file", // The name that will be used to transfer the file
            maxFilesize: 128, // MB
            acceptedFiles: ".xlsx,.xls,.numbers, .ods, .psd, .png, .jpeg, .jpg, .rar, .zip, .doc, .docx, .ppt, .pptx",
            addRemoveLinks: true
        };

    };	//  Handle Upload
    
    return {
        init: function() {
            handleSidebarHeight();
            handleAddEmail();
            handleDropZoneUpload();
        }
    };
}();