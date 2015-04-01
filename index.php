<?php get_header(); ?>

<div class="container">
	<div class="row">
		<div class="col-sm-6" ng-app="reang" ng-controller="reang_controller">
			Angular
			<article ng-repeat="post in posts">
				<h1>{{post.title}}</h1>
				<div ng-bind-html="post.content | to_trusted"></div>
			</article>
		</div>
		<div class="col-sm-6">
			React
			<div id="test_react"></div>
		</div>
	</div>
</div>

<?php get_footer(); ?>