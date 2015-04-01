var React = require('react');
var $ = jQuery;

var Post = React.createClass({
	render: function(){
		return (
			<article>
				<h1>{this.props.post.title}</h1>
				{this.props.post.content}
			</article>
		)
	}
})


var App = React.createClass({
	
	getposts: function() {
		console.log('getting posts..');
		$.ajax({
			url: 'http://dclient.dev/wp-json/posts',
			dataType: 'json',
			method: 'GET',
			success: function(res){
				console.log( res );
				this.setState({data:res})
			}.bind(this)
		});	
	},
	
	getInitialState: function() {
		return { data: [{ title: 'test'}] }
	},
	
	componentDidMount: function() {
		this.getposts();
	},
	
	render: function() { 
		if(this.state.data.length) {
			return (
				<div>
					{this.state.data.map(function(post){
						return (
							<Post post={post}></Post>
						)
					})}
				</div>
			)
		}
	}
});

React.render(<App/>, document.getElementById( 'test_react' ) );