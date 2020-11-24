<script lang="ts">
  import type { RoomHTMLElementData } from "../../../lib/Interfaces/RoomInterfaces";
  export let roomListing: RoomHTMLElementData;

  function join(): void {}
</script>

<style>
</style>

<div class="query-result" on:click={join}>
  <div class="thumbnail-container">
    <div class="view-count">
      <span class="material-icons">account_circle</span>
      <span>{roomListing.watchCount}</span>
    </div>
    <div class="thumbnail">
      <img src={roomListing.thumbnail} alt="Room thumbnail preview" />
    </div>
  </div>

  <div class="now-watching">Now watching</div>
  <div class="preview-title">{roomListing.title}</div>
  <div class="preview-topic">{roomListing.topic}</div>
</div>
