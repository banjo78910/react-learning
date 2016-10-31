var axios = require('axios');

var id = "CLIENT_ID"
var sec = "SECRET_ID"
var param = '';
// var param = "?client_id=" + id + "?client_secret=" + sec;

getUserInfo = function(username){
	return axios.get('http://api.github.com/users/' + username + param)
}

var helpers = {
	getPlayersInfo(players) {
		return axios.all(players.map(function(username){
			return getUserInfo(username);
		})).then(function(info){
			return info.map(function(user){
				return user.data;
			})
		}).catch(function(err){
			console.warn('Error in getPlayersInfo', err);
		})
	}
}

module.exports = helpers;