<script lang="ts">
    import ChatPanel from '../components/Chat/ChatPanel.svelte';
    import TopBar from '../components/TopBar/TopBar.svelte';
    import VideoPlayer from '../components/VideoPlayer/VideoPlayer.svelte';
    import ConfigureModal from '../components/Modals/ConfigureModal/ConfigureModal.svelte';

    let configureModalOpened: boolean = false;

    function openModal(e: CustomEvent) {
        configureModalOpened = true;
    }

    function closeModal(e: CustomEvent) {
        configureModalOpened = false;
    }
</script>

{#if configureModalOpened}
    <ConfigureModal on:close={closeModal} />
{/if}

<div class="main-page-wrapper">
    <TopBar on:configureModalOpened={openModal}></TopBar>
    <VideoPlayer></VideoPlayer>
    <ChatPanel></ChatPanel>
</div>

<style>
    .main-page-wrapper {
        display: grid;
        height: 100vh;
        grid-template-columns: 80vw auto;
        grid-template-rows: 6vh auto;
        background-color: #f0f0f0;
        color: #434343;
    }
</style>