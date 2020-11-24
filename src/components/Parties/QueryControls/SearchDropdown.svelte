<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let filter: string = "Popular";
  let filterOptions: Array<string> = ["Popular", "Recent"];

  function handleClick(index: number): void {
    filter = filterOptions[index];
    dispatch("filterUpdated", { filter });
  }
</script>

<style>
  .dropdown {
    grid-column: 2 / 3;
    border-radius: 5px;
  }

  .uk-button {
    text-transform: none;
    color: crimson;
    font-family: "Mukta", sans-serif;
    font-weight: 300;
    border-radius: 5px;
  }
</style>

<div class="uk-inline dropdown">
  <button class="uk-button uk-button-default" type="button">{filter}</button>
  {#each filterOptions as f, i}
    {#if f !== filter}
      <div
        class="drop"
        on:click={() => handleClick(i)}
        uk-dropdown="mode: click">
        {f}
      </div>
    {/if}
  {/each}
</div>
