<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleCreate(e: MouseEvent): void {
    dispatch("createButtonPushed");
  }
</script>

<style>
  .create-button {
    grid-column: 4 / 5;

    padding: 15% 20%;
    border-radius: 5px;

    background-color: crimson;
    color: white;
  }
</style>

<div on:click={handleCreate} class="create-button">Create</div>
