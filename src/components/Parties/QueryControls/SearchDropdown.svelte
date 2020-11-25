<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let filter: string;
  let filterOptions: Array<string> = ["Popular", "Recent", "test", "foo"];

  $: {
    if (filter) {
      dispatch("filterUpdated", { filter });
    }
  }
</script>

<style>
  select {
    border-radius: 5px;
    /** Doesn't work in Safari. */
    text-align: center;
    text-align-last: center;
    -moz-text-align-last: center;

    height: 2em;
    width: 100%;
    box-sizing: border-box;

    text-align: center;
    background-color: white;
    font-family: "Mukta", sans-serif;
    font-size: 1em;
    font-weight: 300;
    color: crimson;
  }
</style>

<select bind:value={filter}>
  {#each filterOptions as f}
    <option value={f}>{f}</option>
  {/each}
</select>
