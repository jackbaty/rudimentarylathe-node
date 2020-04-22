/*\
title: $:/plugins/wikilabs/uni-link/filters/aliasbacklinks.js
type: application/javascript
module-type: filteroperator

Filter operator for returning all the backlinks from a tiddler

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Export our filter function
*/
exports.aliasbacklinks = function(source,operator,options) {
	var results = [];
	source(function(tiddler,title) {
		$tw.utils.pushTop(results,options.wiki.getTiddlerAliasBacklinks(title));
	});
	return results;
};

})();



///*\
//title: $:/core/modules/filters/aliases.js
//type: application/javascript
//module-type: filteroperator
//
//Filter operator for returning all the alias-backlinks from a tiddler
//
//\*/
//(function(){
//
///*jslint node: true, browser: true */
///*global $tw: false */
//"use strict";
//
///*
//Export our filter function
//*/
//exports.aliases = function(source,operator,options) {
//	var results = [],
//		field = operator.operand || "aliases";
//
//		source(function(tiddler,title) {
//			if(tiddler) {
//				value = (field === "title") ? title : tiddler.getFieldString(field);
//				if(!$tw.utils.hop(values,value)) {
//					values[value] = true;
//					results.push(title);
//				}
//			}
//		});
//
//	source(function(tiddler,title) {
//		$tw.utils.pushTop(results,options.wiki.getTiddlerAliases(title));
//	});
//	return results;
//};
//
//})();
//
//

///*\
//title: $:/core/modules/filters/each.js
//type: application/javascript
//module-type: filteroperator
//
//Filter operator that selects one tiddler for each unique value of the specified field.
//With suffix "list", selects all tiddlers that are values in a specified list field.
//
//\*/
//(function(){
//
///*jslint node: true, browser: true */
///*global $tw: false */
//"use strict";
//
///*
//Export our filter function
//*/
//exports.each = function(source,operator,options) {
//	var results =[] ,
//		value,values = {},
//		field = operator.operand || "title";
//	if(operator.suffix !== "list-item") {
//		source(function(tiddler,title) {
//			if(tiddler) {
//				value = (field === "title") ? title : tiddler.getFieldString(field);
//				if(!$tw.utils.hop(values,value)) {
//					values[value] = true;
//					results.push(title);
//				}
//			}
//		});
//	} else {
//		source(function(tiddler,title) {
//			if(tiddler) {
//				$tw.utils.each(
//					options.wiki.getTiddlerList(title,field),
//					function(value) {
//						if(!$tw.utils.hop(values,value)) {
//							values[value] = true;
//							results.push(value);
//						}
//					}
//				);
//			}
//		});
//	}
//	return results;
//};
//
//})();
