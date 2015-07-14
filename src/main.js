moduleToLoad = './' + (location.hash ? location.hash.substring(1) : 'index');
require(moduleToLoad);
