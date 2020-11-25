<script lang="ts">
  import type { RoomHTMLElementData } from "../../../lib/Interfaces/RoomInterfaces";
  export let roomListing: RoomHTMLElementData;

  function join(): void {}
</script>

<style>
  .thumbnail-container {
    position: relative;
    height: 196.88px;
    width: 350px;
  }

  .view-count {
    display: grid;
    align-items: center;
    justify-items: center;
    padding: 1%;
    border-radius: 1px;
    grid-template-columns: 1fr 2fr;

    position: absolute;
    right: 0;
    top: 0;

    margin-right: 0.5em;
    margin-top: 0.5em;

    background-color: rgba(0, 0, 0, 72%);
    color: white;
  }

  .view-count-icon {
    grid-column: 1 / 2;
    font-size: 16px;
  }

  .view-count-number {
    grid-column: 2 / 3;

    font-size: 12px;
    font-weight: 300;
  }

  .text-content {
    display: grid;
    align-items: center;
    grid-template-rows: repeat(3, 1fr);
    font-family: "Mukta", sans-serif;
    color: #434343;
  }

  .now-watching {
    height: 1em;
    grid-row: 1 / 2;
    margin: 0;

    color: #878787;
    font-style: italic;
    font-weight: 300;
    font-size: 0.8em;
  }

  .preview-title {
    height: 1.2em;
    grid-row: 2 / 3;

    font-size: 1em;
    font-weight: 400;
    margin: 0;
  }

  .preview-topic {
    height: 1.25em;
    grid-row: 3 / 4;

    font-size: 0.8em;
    font-weight: 300;
    margin: 0;
  }
</style>

<div class="query-result" on:click={join}>
  <div class="thumbnail-container">
    <div class="view-count">
      <span class="view-count-icon material-icons">account_circle</span>
      <span class="view-count-number">{roomListing.watchCount}</span>
    </div>

    {#if roomListing.thumbnail !== ''}
      <img src={roomListing.thumbnail} alt="Room thumbnail preview" />
    {:else}
      <img
        src="https://images2.alphacoders.com/942/thumb-1920-942236.jpg"
        alt="A Sekiro Wallpaper" />
    {/if}
  </div>

  <div class="text-content">
    <div class="now-watching">Now watching</div>
    <div class="preview-title">{roomListing.title}</div>
    <div class="preview-topic">{roomListing.topic}</div>
  </div>
</div>
