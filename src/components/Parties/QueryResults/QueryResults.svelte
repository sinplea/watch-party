<script lang="ts">
  import QueryResult from "./QueryResult.svelte";
  import type { RoomListing } from "../../../lib/Interfaces/RoomInterfaces";

  export let results: Array<RoomListing> = [];
</script>

{#each results as roomListing}
  <QueryResult {roomListing} />
{/each}
