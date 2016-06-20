var config = {
	url: 'localhost:3000'
};

config.pages = {
	index: config.url, 
	main: config.url + '/#/main',
	news: config.url + '/#/news',
	singleNews: config.url + '/#/news/1'
}

config.elems = {
	DM_CONTAINER_CLS: 'newsDataManager_container',
    DM_PREFIX: 'newsDataManager_',
    NEWS_LIST_CONTAINER_CLS: 'newsListContainer',
    NEWS_CATEGORY_CLS: 'newsItem_field-category',
    NEWS_DATE_CLS: 'newsItem_field-dt',
    NEWS_HEADER_CLS: 'newsItem_field-header',
    NEWS_ITEM_CONTAINER: 'newsItem_container',
    NEWS_ITEM_FIELD: 'newsItem_field'
}

module.exports = config;