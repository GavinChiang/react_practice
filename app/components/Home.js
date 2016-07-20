var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
	render: function(){
		return(
			<div className="jumbotron col-sm-12 text-center" style={transparentBg}>
				<h1> battle </h1>
				<p className='lead'> No pay no gain </p>
				<Link to='/playerOne'>
					<button type='button' className="btn btn-lg btn-success"> Get Start </button>
				</Link>
			</div>
		)
	}
});

module.exports = Home;