<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleClick(e: MouseEvent): void {
    dispatch("searchButtonClicked");
  }
</script>

<style>
</style>

<div on:click={handleClick} class="search-button material-icons">search</div>
