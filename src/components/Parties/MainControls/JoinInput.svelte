<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let room: string;

  function handleInput(e: Event): void {
    dispatch("joinInputUpdated", { room });
  }
</script>

<input
  bind:value={room}
  on:input={handleInput}
  placeholder="join your friend's watch party"
  type="text"
  class="join-input" />
