<?php get_header(); ?>

<div class="container">
	<div class="row">
		<div class="col-sm-12">
			<h1><a ui-sref="list">Blog</a></h1>
			<!-- UI VIEW -->
			<div ui-view></div>
						
			<!-- EDIT MODAL -->
			<div class="modal fade" id="editPost" tabindex="-1" role="dialog" aria-labelledby="editPost" aria-hidden="true" >
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 class="modal-title text-center" id="myModalLabel">Edit Post</h4>
						</div>
						<div class="modal-body">
							<form ng-submit="savePost()">
								<div class="form-group">
									<input ng-model="editPost.title" class="form-control" />
								</div>
								<div class="form-group">
									<textarea ng-model="editPost.content" class="form-control" rows="10"></textarea>
								</div>
								<button type="submit" class="btn btn-default">Save Post</button>
							</form>
						</div>				  
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<?php get_footer(); ?>