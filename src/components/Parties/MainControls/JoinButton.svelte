<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleJoin(e: MouseEvent): void {
    dispatch("joinButtonPressed");
  }
</script>

<style>
  .join-button {
  }
</style>

<div on:click={handleJoin} class="create-button">Create</div>
