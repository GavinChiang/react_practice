var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle.js');
var githubhelpers = require('../utils/githubhelpers')	


var ConfirmBattleContainer = React.createClass({
	contextType: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function() {
		return{
			isloading: true,
			playerInfo: [],
		}
	},

	componentWillMount: function() {
		console.log("componentWillMount")
	},

	componentDidMount: function () {
		var query = this.props.location.query;
		// console.log("componentDidMount")
		//fetch info from github
		githubhelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(function (players){
				this.setState({
					isloading: false,
					playersInfo: [players[0], players[1]]
				})
			}.bind(this))
	},

	componentWillReceiveProps: function() {
		console.log("componentWillReceiveProps")
	},

	componentWillUmnount: function(){
		console.log("componentWillUmnount")
	},

	render: function() {
		return (
			<ConfirmBattle 
				isloading={this.state.isloading} 
				playerInfo={this.state.playersInfo} />
		);
	}
});

module.exports = ConfirmBattleContainer;