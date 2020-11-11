<script lang="ts">
    import ChatPanel from '../components/Chat/ChatPanel.svelte';
    import TopBar from '../components/TopBar/TopBar.svelte';
    import VideoPlayer from '../components/VideoPlayer/VideoPlayer.svelte';
    import SideBar from '../components/SideBar/SideBar.svelte';

    let isSideBarActive: boolean = false;

    function toggleSideBar(e: CustomEvent): void {
        isSideBarActive = !isSideBarActive;
    }
</script>



<div class="main-page-wrapper">
    <TopBar on:toggleSideBar={toggleSideBar}></TopBar>
    <VideoPlayer></VideoPlayer>
    <ChatPanel></ChatPanel>
</div>

{#if isSideBarActive}
    <SideBar on:toggleSideBar={toggleSideBar}></SideBar>
{/if}


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
    @media (max-width: 375px) {
        .main-page-wrapper {
            height: 160vh;
            grid-template-columns: 100%;
            grid-template-rows: 8vh 60vh 92vh;
        }
    }


    @media (min-width: 375px) {
        .main-page-wrapper {
            height: 160vh;
            grid-template-columns: 100%;
            grid-template-rows: 8vh 60vh 92vh;
        }
    }

    
    @media (min-width: 768px) {
        .main-page-wrapper {
            height: 160vh;
            grid-template-columns: 100%;
            grid-template-rows: 8vh 60vh 92vh;
        }
    }

    @media (min-width: 1366px) {
        .main-page-wrapper {
            height: 100vh;
            grid-template-columns: 80vw auto;
            grid-template-rows: 8vh 92vh;
        }
    }
</style>