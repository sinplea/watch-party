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
    display: grid;
    align-items: center;

    box-sizing: border-box;
    width: 80%;

    border-radius: 5px;

    border: 0.5px solid gray;
    text-align: center;
    background-color: white;
    color: crimson;
    height: 2em;
  }
</style>

<div on:click={handleClick} class="search-button ">
  <div class="text material-icons">search</div>
</div>
