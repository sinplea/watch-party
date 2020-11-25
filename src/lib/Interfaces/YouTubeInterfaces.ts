// Interfaces for handling data coming from the YouTube API
// Specifically handles data coming from /search & /videos listings
// https://developers.google.com/youtube/v3/docs/search/list
// https://developers.google.com/youtube/v3/docs/videos/list


export interface YouTubeSearchResponseItem {
    kind: string,
    etag: string,
    id: {
        kind: string,
        videoId: string,
    },
    snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
            default: {
                url: string,
                width: number,
                height: number,
            },
            medium: {
                url: string,
                width: number,
                height: number,
            },
            high: {
                url: string,
                width: number,
                height: number,

            },
        },
        channelTitle: string,
        liveBroadcastContent: string,
        publishTime: string,
    }
};

export interface YoutubeVideoStatisticsResponseItem {
    kind: string,
    etag: string,
    id: string,
    statistics: {
        viewCount: string,
        likeCount: string,
        dislikeCount: string,
        favoriteCount: string,
        commentCount: string,
    },
};

export interface YouTubeSearchResponse {
    kind: string,
    etag: string,
    nextPageToken: string,
    regionCode: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number,
    },
    items: [YouTubeSearchResponseItem],
};

export interface YoutubeVideoStatisticsResponse {
    kind: string,
    etag: string,
    items: [YoutubeVideoStatisticsResponseItem],
    pageInfo: {
        totalResults: number,
        resultsPerPage: number,
    },
};
