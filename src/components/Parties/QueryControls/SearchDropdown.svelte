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
</style>

<div class="uk-inline">
  <button class="uk-button uk-button-default" type="button">{filter}</button>
  {#each filterOptions as f, i}
    {#if f !== filter}
      <div on:click={() => handleClick(i)} uk-dropdown="mode: click">{f}</div>
    {/if}
  {/each}
</div>
