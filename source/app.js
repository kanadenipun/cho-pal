var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
    render: function () {
        return <div>Hello {this.props.name}</div>;
    }
});

ReactDOM.render(
    <div className="jumbotron"><Hello name="twitter" /></div>,
    document.getElementById('react-container')
);
