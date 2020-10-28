<script lang="ts">
    import { video } from '../../stores/VideoStore'
    import type { YouTubeSearchResponseItem } from '../../lib/YouTubeInterfaces';

    export let videoInfo: YouTubeSearchResponseItem;
    export let index: number;
    $: accented = index % 2 === 0

    function selectVideo(e: MouseEvent) {
        video.set(videoInfo);
    };
</script>

<div on:click={selectVideo} class="preview-result-wrapper {accented ? 'accented' : ''}">
    <img 
        src={videoInfo.snippet.thumbnails.medium.url} 
        alt="Thumbnail for video {videoInfo.snippet.title}">
    <div class="video-text-info">
        <div class="result-title">{videoInfo.snippet.title}</div>
        <div class="result-description">{videoInfo.snippet.description}</div>
        <!-- <div class="result-attributes">{videoInfo.snippet.views} views • {previewResult.publishedAt}</div> -->
    </div>
</div>

<style>
    .preview-result-wrapper {
        width: 100%;
        height: 33.3%;
        display: grid;
        grid-template-columns: 1fr 3fr;
        background-color: #ffffff;
        font-family: 'Lato', sans-serif;
    }

    .video-text-info {
        display: grid;
        grid-template-rows: 1fr 3fr;
        grid-column: 2 / 3;
    }

    img {
        grid-column: 1 / 2;
        object-fit: cover;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .result-title {
        align-self: end;
        grid-row: 1 / 2;
        white-space: nowrap;
        overflow: hidden;
        font-size: 1.125rem;
        color: #434343;
    }
    
    .result-description {
        grid-row: 2 / 3;
        max-height: 100%;
        overflow: hidden;
        font-size: 0.875rem;
        color: #5b5b5b;        
    }

    .accented {
        background-color: #f0f0f0;
    }
</style>