<script lang="ts">
    import TopBarSearchPreviewResult from './TopBarSearchPreviewResult.svelte';
    import type { YouTubeSearchResponseItem } from '../../lib/YouTubeInterfaces';

    export let elements: Array<YouTubeSearchResponseItem>;
    export let loading: boolean;
</script>

<div class="top-bar-search-preview-wrapper">
    {#if loading}
        <div class="loading">Loading</div>
    {:else}
        {#each elements as e, i}
            <TopBarSearchPreviewResult 
                videoInfo={e} 
                index={i}></TopBarSearchPreviewResult>
        {/each}
    {/if}
</div>

<style>
    .top-bar-search-preview-wrapper {
        width: 680px;
        height: 360px;
        position: absolute;
        overflow: auto;
        border-radius: 0px 0px 5px 5px;
        filter: drop-shadow(0px 4px 4px rgba(0,0,0,25%))
    }
</style>