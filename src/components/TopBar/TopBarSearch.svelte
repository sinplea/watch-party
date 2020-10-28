<script lang="ts">
    import TopBarSearchPreview from './TopBarSearchPreview.svelte';
    import type { YouTubeSearchResponse, YouTubeSearchResponseItem } from '../../lib/YouTubeInterfaces';

    let searchValue: string = "";
    let isPreviewActive: boolean = false;
    let searchResults: Array<YouTubeSearchResponseItem> = [];
    let keyboardTimeout: number = -1;
    let isLoadingPreview: boolean = false;

    $: {
        tryAndCreatePreview(searchValue);
    }

    const KEYDOWN_MS_WAIT_PERIOD: number = 1000

    function tryAndCreatePreview(search: string) {
        isPreviewActive = search !== '';

        if (search.length > 2) {
            isLoadingPreview = true;
            tryToRequest(search);
        } else {
            isLoadingPreview = false;
        };
    };

    function requestYoutubeSearchResults(search: string) {
        const request = {
            "part": ["snippet"],
            "maxResults": 10,
            "q": search,
        }

        // @ts-ignore
        gapi.client.youtube.search.list(request)
            .then(function(res) {
                const results: YouTubeSearchResponse = res.result; 
                console.log(results);
                searchResults = results.items;
                isLoadingPreview = false;
            },
            function(err) { 
                console.error("Execute error", err); 
            });
    }

    /**
     * tryToRequest()
     * Starts a timer if keyboardTimout has not yet been set by setTimeout()
     * If called again before f(x) has run, f(x) will be canceled.
    */
    function tryToRequest(search: string): void {
        clearTimeout(keyboardTimeout);

        keyboardTimeout = setTimeout(() => {
            requestYoutubeSearchResults(search);
        }, KEYDOWN_MS_WAIT_PERIOD)
    }
</script>

<div class="top-bar-search-wrapper">
    <textarea 
        name="top-bar-search" 
        id="top-bar-search" 
        placeholder="Search for a youtube video"
        bind:value={searchValue}></textarea>
    
    {#if isPreviewActive}
        <TopBarSearchPreview loading={isLoadingPreview} elements={searchResults}></TopBarSearchPreview>
    {/if}
</div>

<style>
    .top-bar-search-wrapper {
        width: 30vw;
        grid-column-start: 2;
        grid-column-end: 3;
        align-self: center;
        padding-left: 1.25%;
        height: 2.1875em;
    }

    textarea {
        width: 100%;
        height: 100%;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        font-family: 'Mukta', sans-serif;
        font-weight: lighter;
        padding-top: 0.625em;
        box-sizing: border-box;
        resize: none;
    }
</style>