<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let topic: string;

  function handleInput(e: Event): void {
    dispatch("topicInputUpdated", { topic });
  }
</script>

<style>
</style>

<input
  bind:value={topic}
  on:input={handleInput}
  placeholder="give your party a topic"
  type="text"
  class="topic-input" />
