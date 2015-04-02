"use strict";
var reang;
var $ = jQuery;
reang = angular.module('reang', ['ngResource'])
.filter('to_trusted', ['$sce', function($sce) {
	return function(text) {
		return $sce.trustAsHtml(text);
	};
}])
.factory('Posts', function($resource) {
	return $resource(ajaxInfo.json_url + 'posts/:ID?_wp_json_nonce='+ajaxInfo.nonce, {
		ID: '@ID'
	},{
        'update': { method:'PUT' }
    });
})
.controller( 'reang_controller', ['$rootScope', '$scope', 'Posts', function($rootScope, $scope, Posts){
	$scope.getPosts = function(){
		Posts.query({}, function(res){
			$scope.posts = res;
		});
	}
	
	$scope.getPosts();
	
	
	$('body').on('click', '.edit_post', function(e) {
		var post_id = $(this).data('id');
		console.log(post_id);
		
		Posts.get({ID:post_id}, function(res){
			$scope.editPost = res;
		})
		
	})
	
	$scope.savePost = function() {
		console.log('saving..', $scope.editPost);
		$scope.editPost.content_raw = $scope.editPost.content;
		Posts.update($scope.editPost, function(res){
			$scope.getPosts();
			$('#editPost').modal('hide');
		})
	}
	
}])
.directive('reactposts', function($rootScope) {
	return {
		restrict: 'E',
		scope: { data: '=', id: '@' },
		link: function($scope,elm,attrs) {
			$scope.$watch('data', function(n,o){
				if( n && n.length ) {
					$rootScope.react_app = React.render(
						React.createElement(APP, {data:$scope.data}),
						elm[0]
					)
				}
			});
		}
	}
})
.controller( 'editPostCtrl', ['$rootScope', '$scope', 'Posts', function($rootScope, $scope, Posts){
	console.log('editing..');
	
	$('body').on('click', '.edit_post', function(e) {
		var post_id = $(this).data('id');
		console.log(post_id);
		
		Posts.get({ID:post_id}, function(res){
			$scope.editPost = res;
		})
		
	})
	
	$scope.savePost = function() {
		console.log('saving..', $scope.editPost);
		$scope.editPost.content_raw = $scope.editPost.content;
		Posts.update($scope.editPost, function(res){
			Posts.query({}, function(res){
				$rootScope.react_app.data = res;
				$('#editPost').modal('hide');
				console.log( $rootScope.react_app.data );
			})
		})
	}
}]);
var $ = jQuery;