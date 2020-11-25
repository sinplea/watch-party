<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleCreate(e: MouseEvent): void {
    dispatch("createButtonPushed");
  }
</script>

<style>
  .create-button {
    display: grid;
    align-items: center;

    grid-column: 6 / 7;

    height: 55%;
    width: 100%;
    border-radius: 5px;

    background-color: crimson;
    color: white;
    font-family: "Mukta", sans-serif;
    font-size: 1.2em;
    font-weight: 300;

    cursor: pointer;
  }

  .text {
    text-align: center;
  }
</style>

<div on:click={handleCreate} class="create-button">
  <div class="text">Create</div>
</div>
