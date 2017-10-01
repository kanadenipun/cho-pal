var React = require('react');
var ReactDOM = require('react-dom');


var ChoPal = React.createClass({
    render: function () {
        return(
            <div>
                Hello
            </div>
        )
    }
});

ReactDOM.render(
    <ChoPal/>,
    document.getElementById('react-container')
);
