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
}])
.directive('reactposts', function() {
	return {
		restrict: 'E',
		scope: { data: '=', id: '@' },
		link: function($scope,elm,attrs) {
			$scope.$watch('data', function(n,o){
				if( n && n.length ) {
					React.render(
						React.createElement(APP, {data:$scope.data}),
						elm[0]
					)
				}
			})
		}
	}
});