<script lang="ts">
    import ChatPanel from '../components/Chat/ChatPanel.svelte';
    import TopBar from '../components/TopBar/TopBar.svelte';
    import VideoPlayer from '../components/VideoPlayer/VideoPlayer.svelte';
</script>

<div class="main-page-wrapper">
    <TopBar></TopBar>
    <VideoPlayer></VideoPlayer>
    <ChatPanel></ChatPanel>
</div>

<style>
    .main-page-wrapper {
        display: grid;
        height: 100vh;
        grid-template-columns: 75vw 25vw;
        grid-template-rows: 6vh auto;
    }
</style>