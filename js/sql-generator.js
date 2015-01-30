$(function(){
    $('#in1').next('button').click(function(){
        var text = $(this).prev().val();
	var items = text.split(/[\t ,]+/);
	if(items && items.length == 2){
	    $(this).nextAll('input').first().val('select * from hotel_linkage where wrapper_id = \'' + items[0] + '\' and site_param = ' + items[1] + ';').focus().select();
	}
    });
    $('#in2').next('button').click(function(){
        var text = $(this).prev().val();
	if(text){
	    $(this).nextAll('input').first().val('select * from hotel_linkage_log where linkage_id = ' + text + ' order by id desc limit 5;').focus().select();
	}
    });

    $('input:first').focus();
});
