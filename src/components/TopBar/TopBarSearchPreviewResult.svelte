<script lang="ts">
    import type { YouTubeSearchResponseItem } from '../../lib/YouTubeInterfaces';

    export let videoInfo: YouTubeSearchResponseItem;
    export let index: number;
    $: accented = index % 2 === 0
</script>

<div class="preview-result-wrapper {accented ? 'accented' : ''}">
    <img 
        src={videoInfo.snippet.thumbnails.high.url} 
        alt="Thumbnail for video {videoInfo.snippet.title}">
    <div class="result-title">{videoInfo.snippet.title}</div>
    <div class="result-description">{videoInfo.snippet.description}</div>
    <!-- <div class="result-attributes">{videoInfo.snippet.views} views • {previewResult.publishedAt}</div> -->
</div>

<style>
    .accented {
        background-color: #f0f0f0;
    }
</style>