


function WaniKani(apiKey) {

	this.apiKey = apiKey;
	this.apiString = "http://www.wanikani.com/api/v1.2/user/"+apiKey+"/";

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
		var arguments = (limit != null) ? "/"+limit : "";
		this.sendRequest("recent-unlocks"+arguments, cb);
	}

	this.getCriticalItems = function(cb, percentage){
		var arguments = (percentage != null) ? "/"+percentage : "";
		this.sendRequest("critical-items"+arguments, cb);
	}

	this.getRadicalsList = function(cb, levels){
		var arguments = (levels != null) ? "/"+levels : "";
		this.sendRequest("radicals"+arguments, cb);
	}

	this.getKanjiList = function(cb, levels){
		var arguments = (levels != null) ? "/"+levels : "";
		this.sendRequest("kanji"+arguments, cb);
	}

	this.getVocabularyList = function(cb, levels){
		var arguments = (levels != null) ? "/"+levels : "";
		this.sendRequest("vocabulary"+arguments, cb);

	}

	this.sendRequest = function(path,cb){
		sendRequest(this.apiString,path,cb);
	}
}
	var resscript;
	var resultCallback;
	function sendRequest(apiString, path, cb){
		if ((new Date().getTime()-localStorage[path+"_cachetime"]) < 1200000){
			console.log("Loading "+path+" from cache");
			cb(null, JSON.parse(localStorage[path+"_data"]));
		} else {
   			resscript = document.createElement("script");
   			resscript.src = apiString + path + "?callback=onWaniKaniResult";
   			document.body.appendChild(resscript);
   			resultCallback = cb;
   			currentPath = path;
   		}
	}

	function onWaniKaniResult(data){
		if (localStorage){
			localStorage[currentPath+"_data"] = JSON.stringify(data);
			localStorage[currentPath+"_cachetime"] = new Date().getTime();
		}
		console.log("Response Recieved");
		document.body.removeChild(resscript);
		resultCallback(null, data);

	}