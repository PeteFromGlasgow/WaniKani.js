WaniKani.js
===========

A library for interfacing with WaniKani in Javascript applications using JSONP. It returns the same structure of JSON objects as WaniKani's API documentation.

It now also caches requests for 20 minutes, after which the cache will invalidate.

Basic Usage
-----------

```javascript
	var wk = new WaniKani(apiKey);

	wk.getKanjiList(function(err, kanji){
		console.log(kanji.requested_information);
	})

```


Available Functions
-------------------
* getUserInformation(callback)
* getLevelProgression(callback)
* getSRSDistribution(callback)
* getRecentUnlocks(callback, limit)
* getCriticalItems(callback, percentage)
* getRadicalsList(callback, levels)
* getKanjiList(callback, levels)
* getVocabularyList(callback, levels)

