var $ = jQuery;

var Post = React.createClass({
	displayName: "Post",
	render: function () {
		return React.createElement(
			'article',
			null,
			React.createElement(
				'h3',
				null,
				this.props.title
			),
			React.createElement(
				'div',
				{
					dangerouslySetInnerHTML: { __html: this.props.content }
				}
			)
		);
	}
});

var APP = React.createClass({
	displayName: "APP",
	render: function () {
		if (this.props && this.props.data.length) {
			console.log(this.props.data);
			var posts = this.props.data.map(function (post) {
				return React.createElement(Post, post);
			})
			
			return React.DOM.div(null, posts);
		}
	}
});