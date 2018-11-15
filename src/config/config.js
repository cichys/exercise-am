export default {
    api: {
        baseUrl: 'https://am-twitter-scrape.herokuapp.com/',
        queryParams: '?pages_limit=3&wait=0',
        hashtagSearch: 'hashtags/%s',
        userSearch: 'users/%s'
    },
    itemsPerPage: 10
};
