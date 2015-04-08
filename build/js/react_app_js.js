var $ = jQuery;
var Post = React.createClass({
	displayName: "Post",
	render: function() {
		if (!this.props.single) {
			return React.createElement("article", null, React.createElement("h3", null, this.props.title), React.createElement("div", {
				dangerouslySetInnerHTML: {
					__html: this.props.content
				}
			}), 
			React.createElement("a", {
				href: ajaxInfo.site_url + '/#/post/' + this.props.ID,
				className: 'btn btn-success'
			}, 'View Post'),
			React.createElement("button", {
				onClick: this.editPost,
				"data-id": this.props.ID,
				className: "edit_post btn btn-primary"
			}, "edit post"));
		} else {
			return React.createElement("article", null, React.createElement("h3", null, this.props.title), React.createElement("div", {
				dangerouslySetInnerHTML: {
					__html: this.props.content
				}
			}), React.createElement("button", {
				onClick: this.editPost,
				"data-id": this.props.ID,
				className: "edit_post btn btn-primary"
			}, "edit post"));

		}
	}
});
var APP = React.createClass({
	displayName: "APP",
	render: function() {
		if (this.props && this.props.data.length) {
			var posts = this.props.data.map(function(post) {
				post.single = false;
				return React.createElement(Post, post);
			});
			return React.DOM.div(null, posts);
		} else if (this.props && this.props.data.ID) {
			this.props.data.single = true;
			return React.createElement(Post, this.props.data);
		}
	}
});