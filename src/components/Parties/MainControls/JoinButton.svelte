<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleJoin(e: MouseEvent): void {
    dispatch("joinButtonPressed");
  }
</script>

<style>
  .join-button {
    grid-column: 3 / 4;

    padding: 15% 25%;
    border-radius: 5px;

    background-color: crimson;
    color: white;
  }
</style>

<div on:click={handleJoin} class="join-button">Join</div>
