(function ( $ ) {
	var methods = {
		init : function ( options ) {
			// merge passed settings with our own
			settings = $.extend(
			{
				// only look for H# tags inside the scope
				scope: 'body',
				// the only tags we'll make headers from
				header_tags: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ],
				// will the list be a UL, or OR?
				list_type: 'ul',
				// a list of elements to exclude
				exclude: [],
				// empty the $(this) before adding table? true for empty, false for append
				empty: true
			}, options );

			if (settings.empty == true) $(this).children().remove();
			
			
			var toc_id = 1,
                // whilst looping over the array of elements, this'll hold how deep we are
                // into indenting
                current_depth = null,
                // this is the text that'll populate the table. We'll be building it up as
                // a string (of html)
                table_text = "",
                headers = settings.header_tags.join(', '),
                exclude = settings.exclude.join(', ');
			
			// get all the tags we're looking for
			$(settings.scope).find(headers).not(exclude).each(function() {
				// what type of header is this?
				header_tag = this.tagName;
				header_level = header_tag.substr(1,1);

				if (current_depth < header_level) { // if the current_depth is lower than this elements header_level, then we need to start a new <ul>
					table_text += "<ul>";
				} else if (current_depth > header_level) { // if it's greater, then we close the UL we've opened
					table_text += "</ul></li>";
				} else if (current_depth == header_level) {
					table_text += "</li>";
				}

				current_depth = header_level;

				// now we need to start on the text for the table.
				table_text += '<li><a href="#toc_' + toc_id + '">' + $(this).text() + '</a>';
				
				// now add a anchor to each
				$(this).append ('<a name="toc_' + toc_id + '"></a>');
				
				toc_id++;
			});
			
			$(this).append($(table_text));
			
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

