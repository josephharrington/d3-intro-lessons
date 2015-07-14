moduleToLoad = location.search ? location.search.substring(1) : 'lesson0';
require('./' + moduleToLoad);
