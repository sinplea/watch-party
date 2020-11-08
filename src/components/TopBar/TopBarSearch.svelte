<script lang="ts">
    import TopBarSearchPreview from './TopBarSearchPreview.svelte';
    import type { YouTubeSearchResponse, YouTubeSearchResponseItem } from '../../lib/Interfaces/YouTubeInterfaces';

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
        console.log({
            searchValue,
            isPreviewActive,
            isLoadingPreview,
        })
        isPreviewActive = search !== '';

        if (search.length > 2) {
            isLoadingPreview = true;
            tryToRequest(search);
        } else {
            isLoadingPreview = false;
            isPreviewActive = false;
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

    function handleVideoSelection() {
        searchValue = '';
    }
</script>

<div class="top-bar-search-wrapper">
    <textarea 
        name="top-bar-search" 
        id="top-bar-search" 
        placeholder="Search for a youtube video"
        bind:value={searchValue}></textarea>
    
    {#if isPreviewActive}
        <TopBarSearchPreview 
            on:videoSelected={handleVideoSelection}
            loading={isLoadingPreview} 
            elements={searchResults}>
        </TopBarSearchPreview>
    {/if}
</div>

<style>
    .top-bar-search-wrapper {
        width: 100%;
        margin: 0;
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        align-self: center;
    }

    textarea {
        display: inline-block;
        height: 100%;
        width: 100%;
        margin: 0;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        font-family: 'Mukta', sans-serif;
        font-weight: lighter;
        box-sizing: border-box;
        resize: none;
        padding-left: 1%;
        border: 1px solid gray;
        display: block;
    }

    ::placeholder {
        color: #AAA;
    }

    @media (max-width: 768px) {
        .top-bar-search-wrapper {
            justify-self: center;
            height: 2.1em;
        }

        textarea {
            padding-top: 0.5em;
        }
    }

    @media (min-width: 768px) {
        .top-bar-search-wrapper {
            height: 2.15em;
            justify-self: start;
        }

        textarea {
            padding-top: 0.5em;
        }
    }

    @media (min-width: 1366px) {
        .top-bar-search-wrapper {
            height: 2.1875em;
        }

        textarea {
            padding-top: 0.625em;
        }

    }
</style>