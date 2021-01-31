





var Nestable = function() {
    
    var handleCategories1 = function () {
        
        $('#sortable-0').sortable({
            data: '[{"title":"Hi, drag me!","customSelect":"select something...","select2ScrollPosition":{"x":0,"y":0}},{"title":"No! Wait, drag me instead!","customSelect":"http://test.com","select2ScrollPosition":{"x":0,"y":0}}]'
        }).parseJson();
        
    };  // Function to handle Main Menu
    
    var handleCategories2 = function () {
        
        var menuItem = $('#MenuItem');
        var mnuItemOutPut = menuItem.sortable();
        
        menuItem.sortable({
            data: '[{"title":"Account","customSelect":"select something...","select2ScrollPosition":{"x":0,"y":0}},{"title":"Settings","customSelect":"select something...","select2ScrollPosition":{"x":0,"y":0}},{"title":"Call","customSelect":"select something..."},{"title":"Support","customSelect":"select something..."},{"title":"Email","customSelect":"select something..."},{"title":"Orders","customSelect":"select something..."},{"title":"Manage","customSelect":"select something..."},{"title":"Settings","customSelect":"select something..."}]'
        }).parseJson()
            .on(['onItemCollapsed', 'onItemExpanded', 'onItemAdded', 'onSaveEditBoxInput', 'onItemDrop', 'onItemDrag', 'onItemRemoved', 'onItemEndEdit'], function (a, b, c) {
                $('.Mnu1jsonOutput').text(mnuItemOutPut.toJson());
            });
        
        $('.Mnu1jsonOutput').text(mnuItemOutPut.toJson());
        
    };  // Function to handle Main Menu
    
    var handleshopMenu = function () {
        
        var menuItem = $('#shopMenu');
        var mnuItemOutPut = menuItem.sortable();
        
        menuItem.sortable({
            select2: {
                support: true,
                params: {
                    tags: true
                }
            },
            data: '[{"id":11,"title":"Another list","http":"","superselect":"2","customSelect":"select something...","children":[{"id":10,"title":"News","http":"","superselect":"1","customSelect":"select something..."},{"id":9,"title":"Categories","http":"","superselect":"1","customSelect":"2"}]},{"title":"Check","customSelect":"select something..."},{"title":"New","customSelect":"select something..."}]'
        }).parseJson()
            .on(['onItemCollapsed', 'onItemExpanded', 'onItemAdded', 'onSaveEditBoxInput', 'onItemDrop', 'onItemDrag', 'onItemRemoved', 'onItemEndEdit'], function (a, b, c) {
                $('.MnuShopjsonOutput').text(mnuItemOutPut.toJson());
            });
            
        $('.MnuShopjsonOutput').text(mnuItemOutPut.toJson());
        
    };  // Function to handle Main Menu
    
    
    

    return {
        init: function() {

            handleCategories1();
            handleCategories2();
            handleshopMenu();

        }

    };
}();    // Handel Produce Categories


