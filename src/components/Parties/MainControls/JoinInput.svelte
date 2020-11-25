<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let room: string;

  function handleInput(e: Event): void {
    dispatch("joinInputUpdated", { room });
  }
</script>

<style>
  input {
    grid-column: 2 / 3;
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

  ::placeholder {
    color: #aaa;
  }
</style>

<input
  bind:value={room}
  on:input={handleInput}
  placeholder="join your friend's watch party"
  type="text"
  class="join-input" />
