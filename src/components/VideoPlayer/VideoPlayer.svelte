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

<div class="video-player-wrapper">
    {#if $video === null}
        <div class="no-video-wrapper">
            Search for a video and watch together with friends.
        </div>
    {:else}
         <!-- else content here -->
         <div id="player"></div>
    {/if}
</div>

<style>
    .video-player-wrapper {
        grid-column: 1 / 2;
        margin: 0;
        width: 100%;
        grid-row: 2 / 3;
    }

    #player {
        width: 100%;
        height: 100%;
        margin: 0;
        box-sizing: border-box;
        margin-bottom: -10px;
    }
</style>