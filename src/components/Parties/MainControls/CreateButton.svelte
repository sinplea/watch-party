<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleCreate(e: MouseEvent): void {
    dispatch("createButtonPushed");
  }
</script>

<style>
  .create-button {
  }
</style>

<div on:click={handleCreate} class="create-button">Create</div>
