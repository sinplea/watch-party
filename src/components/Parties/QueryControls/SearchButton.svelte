<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleClick(e: MouseEvent): void {
    dispatch("searchButtonClicked");
  }
</script>

<style>
  .search-button {
    grid-column: 3 / 4;

    box-sizing: border-box;
    width: 100%;

    border-radius: 5px;
    border: 0.5px solid black;
    text-align: center;
  }
</style>

<div on:click={handleClick} class="search-button material-icons">search</div>
