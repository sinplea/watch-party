<script lang="ts">
  import QueryResult from "./QueryResult.svelte";
  import type { RoomHTMLElementData } from "../../../lib/Interfaces/RoomInterfaces";

  export let results: Array<RoomHTMLElementData>;
</script>

<style>
  .query-results {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1.25em;
    margin: 0 2.5em;
  }
</style>

<div class="query-results">
  {#each results as roomListing}
    <QueryResult {roomListing} />
  {/each}
</div>
