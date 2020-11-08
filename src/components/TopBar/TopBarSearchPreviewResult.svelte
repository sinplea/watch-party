<script lang="ts">
    import { videoStore } from '../../stores/VideoStore'
    import type { YouTubeSearchResponseItem } from '../../lib/Interfaces/YouTubeInterfaces';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let videoInfo: YouTubeSearchResponseItem;
    export let index: number;

    let mediaQuery: MediaQueryList = window.matchMedia('(max-width: 768px)');
    let isMobile: boolean = mediaQuery.matches;

    $: accented = index % 2 === 0

    mediaQuery.addEventListener('change', () => {
        isMobile = mediaQuery.matches;
    });

    function selectVideo(e: MouseEvent) {
        videoStore.set(videoInfo);
        dispatch('videoSelcted');
    };

    
</script>

<div on:click={selectVideo} class="preview-result-wrapper {accented ? 'accented' : ''}">
    {#if !isMobile}
        <img 
           src={videoInfo.snippet.thumbnails.medium.url} 
           alt="Thumbnail for video {videoInfo.snippet.title}">
    {/if}
        <div class="result-title">{videoInfo.snippet.title}</div>
        <div class="result-description">{videoInfo.snippet.description}</div>
</div>

<style>
    @media (max-width: 768px) {
        .preview-result-wrapper {
            grid-template-columns: auto;
        }

        .result-title {
            font-size: 1em;
        }

        .result-description {
            font-size: 0.825em;
        }
    }

    @media (min-width: 768px) {
        .preview-result-wrapper {
            grid-template-columns: 1fr 3fr;
        }

        .result-title {
            font-size: 1em;
        }

        .result-description {
            font-size: 0.825em;
        }
    }

    .preview-result-wrapper {
        width: 100%;
        height: 33.3%;

        display: grid;
        grid-template-rows: 1fr 2fr;
        gap: 10% 2%;

        background-color: #ffffff;
        font-family: 'Lato', sans-serif;
    }

    .preview-result-wrapper:hover {
        cursor: pointer;
    }

    img {
        width: 100%;
        height: 100%;

        grid-column: 1 / 2;
        grid-row: 1 / 3;
        object-fit: cover;

        overflow: hidden;
    }

    .result-title {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        align-self: end;

        font-weight: 500;
        color: #434343;

        overflow: hidden;
    }
    
    .result-description {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        align-self: start;

        color: #5b5b5b;

        overflow: hidden;
    }

    .accented {
        background-color: #f0f0f0;
    }
</style>