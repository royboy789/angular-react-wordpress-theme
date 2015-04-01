var reang;
reang = angular.module('reang', ['ngResource'])
.factory('Posts', function($resource) {
	return $resource(ajaxInfo.json_url + 'posts/:id', {
		id: '@id'
	});
})
.controller( 'reang_controller', ['$rootScope', '$scope', 'Posts', function($rootScope, $scope, Posts){
	Posts.query({}, function(res){
		console.log(res);
	});
})