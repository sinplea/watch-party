<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const IS_PUBLIC: string = "Public";
  const IS_PRIVATE: string = "Private";

  const dispatch = createEventDispatcher();

  let visibility: string = "Private";

  function toggleVisibility(e: MouseEvent): void {
    if (visibility === IS_PRIVATE) {
      visibility = IS_PUBLIC;
    } else {
      visibility = IS_PRIVATE;
    }
    dispatch("visibilityToggled", { visibility });
  }
</script>

<style>
  .visibility-toggle {
    display: grid;
    align-items: center;

    grid-column: 5 / 6;
    box-sizing: border-box;
    width: 100%;
    height: 65%;

    border-radius: 10px;
    background-color: white;
    border: 2px solid crimson;
    color: crimson;

    font-family: "Mukta", sans-serif;
    font-size: 1.2em;
    font-weight: 300;
  }

  .text {
    text-align: center;
  }

  .public {
    background-color: crimson;
    color: white;
  }
</style>

<!-- Rounded switch -->
<div
  on:click={toggleVisibility}
  class="visibility-toggle {visibility === IS_PUBLIC ? 'public' : ''}">
  <div class="text">{visibility}</div>
</div>
