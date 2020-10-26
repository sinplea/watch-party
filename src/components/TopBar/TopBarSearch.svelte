<script lang="ts">
    import TopBarSearchPreview from './TopBarSearchPreview.svelte';
    import type { VideoResult } from '../../lib/VideoInterfaces';

    let searchValue: string = "";
    let searchResult: JSON;
    let isPreviewActive: boolean = false;

    function onKeydown(e: KeyboardEvent) {
        if (searchValue.length > 2) {
            isPreviewActive = true;
            requestYoutubeSearchResults();
        } else {
            isPreviewActive = false
        }
    }

    function requestYoutubeSearchResults() {
        const request = {
            "part": ["snippet"],
            "maxResults": 3,
            "order": "relevance",
        }

        // @ts-ignore
        gapi.client.youtube.search.list(request)
            .then(function(response) {
                handleYoutubeSearchResponse(response);
            },
            function(err) { console.error("Execute error", err); });
    }

    function handleYoutubeSearchResponse(res: string) {
        const results = JSON.parse(res); 

        const videoResults = results.items.map(item => {
            let videoResult: VideoResult = { 
                title: item.snippet.title,
                description: item.snippet.description,
                publishedAt: item.snippet.publishedAt,
                thumbnail: item.thumbnails.high.url,
                views: 0,
            };

            return videoResult
        });
    }
</script>

<div class="top-bar-search-wrapper">
    <textarea 
        name="top-bar-search" 
        id="top-bar-search" 
        placeholder="Search for a youtube video"
        bind:value={searchValue}
        on:keydown={onKeydown}></textarea>
    
    {#if isPreviewActive}
        <TopBarSearchPreview></TopBarSearchPreview>
    {/if}
</div>

<style>
    textarea {
        width: 100%;
        height: 40px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        font-family: 'Mukta', sans-serif;
        font-weight: lighter;
    }
</style>