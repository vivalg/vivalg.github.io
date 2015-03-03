$(function(){
    $('#in1').next('button').click(function(){
        var mode = $('select:first').val();
        var c = $('select:first>option:selected').attr('data-params');

        var text = $(this).prev().val();
	var items = text.split(/[\t ,]+/);
	if(items && items.length == c){
	    var t = '';
            if(mode == 0){
	        t = 'select * from hotel' + '_' + 'linkage where id = ' + items[0] + ';';
            }else if(mode == 1){
	        t = 'select * from hotel' + '_' + 'linkage where wrapper_id = \'' + items[0] + '\' and site_param = \'' + items[1] + '\';';
	    }else if(mode == 2){
	        t = 'select * from linkage' + '_' + 'op_log where linkage_id = ' + items[0] + ' order by id desc limit 5;';
	    }
	    $(this).nextAll('input').first().val(t).focus().select();
	}
    });
    $('select:first').focus();
});
