<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let query: string;

  function handleInput(e: Event): void {
    dispatch("searchInputUpdated", { query });
  }
</script>

<style>
  input {
    grid-column: 1 / 2;

    margin: 0;

    width: 100%;
    height: 2em;

    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    font-family: "Mukta", sans-serif;
    font-weight: lighter;
    box-sizing: border-box;

    padding-left: 1%;
    border: 1px solid gray;
    display: block;
  }
  ::placeholder {
    color: #aaa;
  }
</style>

<input
  bind:value={query}
  on:input={handleInput}
  placeholder="search for public rooms"
  type="text"
  class="search-input" />
