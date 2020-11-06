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
        width: 100%;
        background-color: #f0f0f0;
        color: #434343;
    }

    /**
        RESPONSIVE BREAKPOINTS
        Based on most common screen sizes of 2019
        https://uxtricks.design/blogs/ux-design/responsive-design/
    */

    @media (min-width: 375px) {
        .main-page-wrapper {
            grid-template-columns: 100%;
            grid-template-rows: 8vh 60vh 60vh;
            height: 100%;
        }
    }

    @media (max-width: 375px) {
        .main-page-wrapper {
            grid-template-columns: 100%;
            grid-template-rows: 8vh 60vh 60vh;
            height: 100%;
        }
    }

    @media (min-width: 768px) {
        .main-page-wrapper {
            grid-template-columns: 100%;
            grid-template-rows: 8vh 60vh 60vh;
            height: 100%;
        }
    }

    @media (min-width: 1366px) {
        .main-page-wrapper {
            grid-template-columns: 80vw auto;
            grid-template-rows: 8vh auto;
            height: 100vh;
        }
    }

    @media (min-width: 1920px) {
        .main-page-wrapper {
            grid-template-columns: 80vw auto;
            grid-template-rows: 8vh auto;
            height: 100vh;
        }
    }
</style>