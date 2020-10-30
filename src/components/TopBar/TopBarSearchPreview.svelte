<script lang="ts">
    import TopBarSearchPreviewResult from './TopBarSearchPreviewResult.svelte';
    import type { YouTubeSearchResponseItem } from '../../lib/Interfaces/YouTubeInterfaces';
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();

    export let elements: Array<YouTubeSearchResponseItem>;
    export let loading: boolean;

    function handleSelectedVideo() {
        dispatch('videoSelected');
        console.log('video selected')
    }
</script>

<div class="top-bar-search-preview-wrapper">
    {#if loading}
        <div class="loading-grid">
            <div class="loading-wrapper">
                <span class="material-icons">cached</span>
                <div class="loading-text">Loading</div>
            </div>
        </div>
    {:else}
        {#each elements as e, i}
            <TopBarSearchPreviewResult 
                on:videoSelcted={handleSelectedVideo}
                videoInfo={e} 
                index={i}></TopBarSearchPreviewResult>
        {/each}
    {/if}
</div>

<style>
    .top-bar-search-preview-wrapper {
        width: 30vw;
        height: 35vh;
        position: absolute;
        overflow: auto;
        border-radius: 0px 0px 5px 5px;
        filter: drop-shadow(0px 4px 4px rgba(0,0,0,25%));
        top: 6vh;
    }

    .loading-grid {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto;
        background-color: white;
        height: 35vh;
        font-family: 'Mukta', sans-serif;
        color: #434343;
    }

    .loading-wrapper {
        text-align: center;
        align-self: center;
    }
</style>