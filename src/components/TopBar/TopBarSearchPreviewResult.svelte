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
    <div class="video-text-info">
        <div class="result-title">{videoInfo.snippet.title}</div>
        <div class="result-description">{videoInfo.snippet.description}</div>
        <!-- <div class="result-attributes">{videoInfo.snippet.views} views • {previewResult.publishedAt}</div> -->
    </div>
</div>

<style>
    .preview-result-wrapper {
        width: 100%;
        height: 120px;
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
        justify-self: center;
        align-self:center;
        object-fit: cover;
        overflow: none;
        grid-column: 1 / 2;
        width: 160px;
        height: 90px;
    }

    .result-title {
        align-self: end;
        grid-row: 1 / 2;
        font-size: 18px;
        color: #434343
    }
    
    .result-description {
        grid-row: 2 / 3;
        max-height: 100%;
        overflow: none;
        font-size: 14px;
        color: #5b5b5b;        
    }

    .accented {
        background-color: #f0f0f0;
    }
</style>