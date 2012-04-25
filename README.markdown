What?
=====

I wanted to make a quick table of contents plugin for jQuery which can automatically generate a well formatted
contents section for long pieces of text, which use the header tags smartly.

How?
====

Call the tableofcontents() function on the selector you wish to be filled with the table.

There are a few arguments you can pass through to the function to make it better suited for your needs:

    scope (default: body)
	
This defines where you want the table to be populated from. Usually "body" is a bad choice, so you may want to
switch this to "#content", or "article". It's just another jQuery selector.

    header_tags (default: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])

This is an array of tags which you'd like to be considered as new sections of your content. If your content
starts at a 'h2', you may want to redefine this without the h1.

    list_type (default: ul)

What should the list type of the table be? Depends on how you want to present the table.

    exclude (default: $())

A list of DOM elements, or a jQuery collection, of elements you want to ignore whilst creating the table.

    empty (default: true)

Should the list be emptied before the table is created, or should the table be appeneded?