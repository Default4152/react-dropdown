var options = {
  thumbnailData: [{
    title: 'See Courses',
    number: '32',
    imageUrl: 'https://facebook.github.io/react/img/logo_og.png',
    header: 'Learn React',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },{
    title: 'See Tutorials',
    number: '16',
    imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400',
    header: 'Learn Gulp',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }]
};

var element = React.createElement(ThumbnailList, options);

React.render(element, document.querySelector('.target'));

var Badge = React.createClass({displayName: "Badge",
  render: function() {
    return (
      React.createElement("button", {className: "btn btn-primary", type: "button"}, 
        this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
      )
    )
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps) {
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });

    return (
      React.createElement("div", null, 
        list
      )
    )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return (
      React.createElement("div", {className: "thumbnail"}, 
      React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
      React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.header), 
        React.createElement("p", null, this.props.description), 
        React.createElement("p", null, 
          React.createElement(Badge, {title: this.props.title, number: this.props.number})
        )
      )
      )
    )
  }
});
