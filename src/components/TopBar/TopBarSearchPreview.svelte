<script lang="ts">
    import TopBarSearchPreviewResult from './TopBarSearchPreviewResult.svelte';
    import type { YouTubeSearchResponseItem } from '../../lib/YouTubeInterfaces';

    export let elements: Array<YouTubeSearchResponseItem>;
</script>

<div class="top-bar-search-preview-wrapper">
    {#each elements as e, i}
        <TopBarSearchPreviewResult videoInfo={e} index={i}></TopBarSearchPreviewResult>
    {/each}
</div>