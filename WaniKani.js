


function WaniKani(apiKey) {

	this.apiKey = apiKey;
	this.apiString = "http://www.wanikani.com/api/v1.1/user/"+apiKey+"/";

	this.getUserInformation = function(cb){
		this.sendRequest("user-information", cb);
	}	

	this.getLevelProgression = function(cb){
		this.sendRequest("level-progression", cb);
	}

	this.getSRSDistribution = function(cb){
		this.sendRequest("srs-distribution", cb);
	}

	this.getRecentUnlocks = function(cb, limit){
		this.sendRequest("recent-unlocks", cb);
	}

	this.getCriticalItems = function(cb, percentage){
		this.sendRequest("critical-items", cb);
	}

	this.getRadicalsList = function(cb, levels){
		this.sendRequest("radicals", cb);
	}

	this.getKanjiList = function(cb, levels){
		this.sendRequest("kanji", cb);
	}

	this.getVocabularyList = function(cb, levels){
		this.sendRequest("vocabulary", cb);
	}

	this.sendRequest = function(path,cb){
		sendRequest(this.apiString,path,cb);
	}
}
	var resscript;
	var resultCallback;
	function sendRequest(apiString, path, cb){
   		resscript = document.createElement("script");
   		resscript.src = apiString + path + "?callback=onWaniKaniResult";
   		document.body.appendChild(resscript);
   		resultCallback = cb;
	}

	function onWaniKaniResult(data){
		console.log("Response Recieved");
		document.body.removeChild(resscript);
		resultCallback(null, data);
	}