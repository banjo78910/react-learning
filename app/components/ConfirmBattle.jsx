var React = require("react");

function printObj(obj){
	return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle(props){
	return props.isLoading === true
	? <p>Loading</p>
	: <p>confirm battle?? {printObj(props)}</p>
}

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	onInitBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;