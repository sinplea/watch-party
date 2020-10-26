<script lang="ts">
    import TopBarSearchPreview from './TopBarSearchPreview.svelte';
    import type { VideoResult } from '../../lib/VideoInterfaces';
    import type { YouTubeSearchResponse, YouTubeSearchResponseItem } from '../../lib/YouTubeInterfaces';

    let searchValue: string = "";
    let isPreviewActive: boolean = false;
    let searchResults: Array<YouTubeSearchResponseItem> = [];
    let isOffCooldown: boolean = false;
    let keyboardTimeout: number = -1;

    const KEYDOWN_MS_WAIT_PERIOD: number = 2000

    function onKeydown(e: KeyboardEvent) {
        if (searchValue.length > 2) {
            handleTimer();
            isPreviewActive = true;
        } else {
            isPreviewActive = false
        }
    }

    function requestYoutubeSearchResults() {
        const request = {
            "part": ["snippet"],
            "maxResults": 10,
            "order": "relevance",
        }

        // @ts-ignore
        gapi.client.youtube.search.list(request)
            .then(function(res) {
                const results: YouTubeSearchResponse = JSON.parse(res); 
                searchResults = results.items;
            },
            function(err) { console.error("Execute error", err); });
    }

    /**
     * handleTimer()
     * Starts a timer if keyboardTimout has not yet been set by setTimeout()
     * If called again before f(x) has run, f(x) will be canceled.
    */
    function handleTimer(): void {
        // NOTE: I think this works to throttle requests to the YouTube API, so that
        // we don't spam request every time we type

        // If keyboardTimeout is set to anything besides -1, 
        // that means we have a function that is going to fire which we want to cancel.
        if (keyboardTimeout !== -1) {
            clearTimeout(keyboardTimeout);
            keyboardTimeout = -1;
        } else {
            keyboardTimeout = setTimeout(() => {
                requestYoutubeSearchResults();
            }, KEYDOWN_MS_WAIT_PERIOD)
        }
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
        <TopBarSearchPreview elements={searchResults}></TopBarSearchPreview>
    {/if}
</div>

<style>
    .top-bar-search-wrapper {
        width: 680px;
        grid-column-start: 2;
        grid-column-end: 3;
        align-self: center;
        padding-left: 20px;
    }

    textarea {
        width: 100%;
        height: 40px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        font-family: 'Mukta', sans-serif;
        font-weight: lighter;
        padding-top: 10px;
        box-sizing: border-box;
        resize: none;
    }
</style>