var reang;
reang = angular.module('reang', ['ngResource'])
.filter('to_trusted', ['$sce', function($sce) {
	return function(text) {
		return $sce.trustAsHtml(text);
	};
}])
.factory('Posts', function($resource) {
	return $resource(ajaxInfo.json_url + 'posts/:id', {
		id: '@id'
	});
})
.controller( 'reang_controller', ['$rootScope', '$scope', 'Posts', function($rootScope, $scope, Posts){
	Posts.query({}, function(res){
		$scope.posts = res;
	});
}]);
var $ = jQuery;