<script lang="ts">
  import TopBarSearchPreviewResult from "./TopBarSearchPreviewResult.svelte";
  import type { YouTubeSearchResponseItem } from "../../lib/Interfaces/YouTubeInterfaces";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let elements: Array<YouTubeSearchResponseItem>;
  export let loading: boolean;

  function handleSelectedVideo() {
    dispatch("videoSelected");
    console.log("video selected");
  }
</script>

<style>
  .top-bar-search-preview-wrapper {
    height: 35vh;
    position: absolute;
    top: 6vh;

    overflow: auto;

    border-radius: 0px 0px 5px 5px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 25%));
  }

  .loading-grid {
    height: 35vh;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;

    background-color: white;
    font-family: "Mukta", sans-serif;
    color: #434343;
  }

  .loading-wrapper {
    text-align: center;
    align-self: center;
  }

  @media (max-width: 768px) {
    .top-bar-search-preview-wrapper {
      height: 60vh;
      width: 100vw;
      top: 8vh;
      left: 0;
    }

    .loading-grid {
      height: 60vh;
    }
  }

  @media (min-width: 768px) {
    .top-bar-search-preview-wrapper {
      width: 60%;
    }
  }

  @media (min-width: 1366px) {
    .top-bar-search-preview-wrapper {
      width: 50%;
    }
  }
</style>

<div data-testid="search-preview" class="top-bar-search-preview-wrapper">
  {#if loading}
    <div data-testid="search-preview-loading" class="loading-grid">
      <div class="loading-wrapper">
        <span class="material-icons">cached</span>
        <div class="loading-text">Loading</div>
      </div>
    </div>
  {:else}
    <div data-testid="search-preview-content" class="search-preview-content">
      {#each elements as e, i}
        <TopBarSearchPreviewResult
          on:videoSelcted={handleSelectedVideo}
          videoInfo={e}
          index={i} />
      {/each}
    </div>
  {/if}
</div>
