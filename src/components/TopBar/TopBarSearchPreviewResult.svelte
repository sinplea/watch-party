<script lang="ts">
    import type { VideoResult } from '../../lib/VideoInterfaces';

    export let previewResult: VideoResult;
    export let index: number;
    $: accented = index % 2 === 0
</script>

<div class="preview-result-wrapper {accented ? 'accented' : ''}">
    <img src={previewResult.thumbnail.toString()} alt="Thumbnail for video {previewResult.title}">
    <div class="result-title">{previewResult.title}</div>
    <div class="result-description">{previewResult.description}</div>
    <div class="result-attributes">{previewResult.views} views • {previewResult.publishedAt}</div>
</div>

<style>
    .accented {
        background-color: #f0f0f0;
    }
</style>