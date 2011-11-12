(function ( $ ) {
	var me = this;

	var settings = {
		// only look for H# tags inside the scope
		scope: $( 'body' ),
		// the only tags we'll make headers from
		header_tags: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ],
		// will the list be a UL, or OR?
		list_type: 'ul'
	};

	var methods = {
		init : function ( options ) {
			// merge passed settings with our own
			if ( options ) $.extend( settings, options );
			
			// start on the contents bit
			table = $("<" + settings.list_type + "></" + settings.list_type + ">");
			
			toc_id = 1;
			
			// get all the tags we're looking for
			$(settings.header_tags.join (', ')).each (function () {
				table.append ('<li><a href="#toc_' + toc_id + '">' + $(this).html() + '</a></li>');
				
				// now add a anchore to each
				$(this).html ('<a name="toc_' + toc_id + '"></a>' + $(this).html());
				
				toc_id++;
			});
			
			$(this).append (table);
			
			return $(this);
		}
	};
	
	$.fn.tableofcontents = function (method) {
		// Method calling logic
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || undefined == method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tableofcontents' );
		}
	}
}) (jQuery);