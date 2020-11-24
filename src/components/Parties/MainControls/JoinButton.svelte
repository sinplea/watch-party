<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleJoin(e: MouseEvent): void {
    dispatch("joinButtonPressed");
  }
</script>

<style>
  .join-button {
    display: grid;
    align-items: center;

    grid-column: 3 / 4;

    height: 65%;
    width: 100%;
    border-radius: 5px;

    background-color: crimson;
    color: white;
    font-family: "Mukta", sans-serif;
    font-size: 1.2em;
    font-weight: 300;
  }

  .text {
    text-align: center;
  }
</style>

<div on:click={handleJoin} class="join-button">
  <div class="text">Join</div>
</div>
