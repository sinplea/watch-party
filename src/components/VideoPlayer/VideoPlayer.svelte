<svelte:head>
    <script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<script lang="ts">
    import { afterUpdate } from 'svelte';
    import { video } from '../../stores/VideoStore';
    import 'youtube';

    let player: YT.Player;

    afterUpdate(() => {
        createPlayer()
    })

    function createPlayer() {
        if ($video !== null) {
            player = new YT.Player('player', {
                height: '390',
                width: '640',
                videoId: $video.id.videoId,
                events: {
                    'onReady': onPlayerReady,
                }
            });
        }
    }

    function onPlayerReady(event: YT.PlayerEvent) {
        event.target.playVideo();
    }

    function onLoad() {
        // @ts-ignore
        window.YT.ready(() => {
            createPlayer();
        })
    }
</script>

<div class="video-player-wrapper {$video === null ? 'no-video' : ''}">
    {#if $video === null}
        <div class="no-video-wrapper">
            <div class="material-icons">videocam_off</div>
            <div class="no-video-title">Search for a YouTube video above</div>
            <div class="no-video-subtitle">and watch together with your friends</div>
        </div>
    {:else}
         <!-- else content here -->
         <div id="player"></div>
    {/if}
</div>

<style>
    #player {
        width: 100%;
        height: 100%;
        margin: 0;
        box-sizing: border-box;
        margin-bottom: -10px;
    }

    .video-player-wrapper {
        grid-column: 1 / 2;
        margin: 0;
        width: 100%;
        grid-row: 2 / 3;
    }

    .no-video {
        align-self: center;
    }

    .material-icons {
        font-size: 5em;
    }

    .no-video-wrapper {
        text-align: center;
        margin: 0 auto;
        font-family: 'Mukta', sans-serif;
    }

    .no-video-title {
        font-size: 1em;
        font-weight: bold;
    }

    .no-video-subtitle {
        font-size: 0.875em;
        font-style: italic;
    }


</style>