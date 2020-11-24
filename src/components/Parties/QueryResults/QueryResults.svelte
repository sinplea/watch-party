<script lang="ts">
  import QueryResult from "./QueryResult.svelte";
  import type { RoomHTMLElementData } from "../../../lib/Interfaces/RoomInterfaces";

  export let results: Array<RoomHTMLElementData>;
</script>

{#each results as roomListing}
  <QueryResult {roomListing} />
{/each}
