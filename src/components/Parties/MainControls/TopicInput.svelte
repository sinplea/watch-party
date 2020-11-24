<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let topic: string;

  function handleInput(e: Event): void {
    dispatch("topicInputUpdated", { topic });
  }
</script>

<style>
  input {
    grid-column: 4 / 5;

    margin: 0;

    width: 100%;
    height: 2em;

    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    font-family: "Mukta", sans-serif;
    font-weight: lighter;
    box-sizing: border-box;

    padding-left: 1%;
    border: 1px solid gray;
    display: block;
  }
</style>

<input
  bind:value={topic}
  on:input={handleInput}
  placeholder="give your party a topic"
  type="text"
  class="topic-input" />
