<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let query: string;

  function handleInput(e: Event): void {
    dispatch("searchInputUpdated", { query });
  }
</script>

<input
  bind:value={query}
  on:input={handleInput}
  placeholder="search for public rooms"
  type="text"
  class="search-input" />
