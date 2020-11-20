<script lang="ts">
  import ChatPanel from "../components/Chat/ChatPanel.svelte";
  import TopBar from "../components/TopBar/TopBar.svelte";
  import VideoPlayer from "../components/VideoPlayer/VideoPlayer.svelte";
  import SideBar from "../components/SideBar/SideBar.svelte";
  import type { Message } from "../lib/Interfaces/ChatInterfaces";

  export let socket: unknown;
  let incomingMessage: Message;

  let isSideBarActive: boolean = false;

  function toggleSideBar(e: CustomEvent): void {
    isSideBarActive = !isSideBarActive;
  }

  function handleSocketIO() {
    //@ts-ignore
    socket = io(LUNA_DEV_SERVER);

    //@ts-ignore
    socket.on("message-captured", (message: Message) => {
      incomingMessage = message;
    });
  }
</script>

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

<svelte:head>
  <script
    src="https://cdn.socket.io/socket.io-3.0.1.js"
    on:load={handleSocketIO}>
  </script>
</svelte:head>
<div class="main-page-wrapper">
  <TopBar gridColEnd={3} on:toggleSideBar={toggleSideBar} />
  <VideoPlayer />
  <ChatPanel {incomingMessage} {socket} />
</div>

{#if isSideBarActive}
  <SideBar on:toggleSideBar={toggleSideBar} />
{/if}
