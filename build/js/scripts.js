var reang;
reang = angular.module('reang', ['ngResource']);

reang.factory('Posts', function($resource) {
	return $resource(ajaxInfo.json_url + 'posts/:id', {
		id: '@id'
	});
});


reang.run(function($rootScope, Posts){
	Posts.query({}, function(res){
		console.log(res);
	});
})

var $ = jQuery;

$(document).ready(function(){
	console.log('here');
})