var $ = jQuery;

var Post = React.createClass({
  displayName: "Post",
  editPost: function () {
    $('#editPost').modal('show');
  },
  render: function () {
    return React.createElement(
      "article",
      null,
      React.createElement(
        "h3",
        null,
        this.props.title
      ),
      React.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.content } }),
      React.createElement(
        "button",
        { onClick: this.editPost, "data-id": this.props.ID, className: "edit_post" },
        "edit post"
      )
    );
  }
});

var APP = React.createClass({
  displayName: "APP",
  render: function () {
    if (this.props && this.props.data.length) {
      var posts = this.props.data.map(function (post) {
        return React.createElement(Post, post);
      });

      return React.DOM.div(null, posts);
    }
  }
});