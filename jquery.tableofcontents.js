(function ( $ ) {
	var me = this;

	var settings = {
		// only look for H# tags inside the scope
		scope: me ( 'body' ),
		// where the table will be drawn
		table_div: '',
		// the only tags we'll make headers from
		header_tags: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ];
		// will the list be a UL, or OR?
		list_type: 'ul'
	};

	var methods = {
		init : function ( options ) {
			// merge passed settings with our own
			if ( options ) $.extend( settings, options );
		}
	};
	
	$.fn.tableofcontents = function () {
		// Method calling logic
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tableofcontents' );
		}
	}
}) (jQuery);