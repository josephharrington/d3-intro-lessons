moduleToLoad = './' + (location.search ? location.search.substring(1) : 'index');
require(moduleToLoad);
