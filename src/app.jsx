var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert', // what should show up on the button to open
  items: [ // List of items to show in the dropdown
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.target'));
