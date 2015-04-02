var React = require('react');
var $ = jQuery;

var Post = React.createClass({
	render: function(){
		function post_content(html){ return {__html: html } }
		return (
			<article>
				<h1>{this.props.post.title}</h1>
				<div dangerouslySetInnerHTML={{__html: this.props.post.content}}></div>
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
				this.setState({data:res})
			}.bind(this)
		});	
	},
	
	getInitialState: function() {
		return { data: [{ title: 'test', content: '<p>test</p>'}] }
	},
	
	componentWillMount: function() {
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