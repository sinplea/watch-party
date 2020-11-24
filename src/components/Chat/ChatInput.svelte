<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Message, Sender } from "../../lib/Interfaces/ChatInterfaces";

  const dispatch = createEventDispatcher();

  export let sender: Sender = {
    name: "DefaultValue",
    color: "#f1f1f1",
  };

  let messageValue: string = "";

  function onKeydown(e: KeyboardEvent) {
    const key: string = e.code;

    const message: Message = {
      sender,
      body: messageValue,
      createdAt: new Date(),
    };

    if (key === "Enter") {
      e.preventDefault();

      if (messageValue !== "") {
        // Custom Event to pass along message
        dispatch("onMessageSent", {
          message,
        });

        // Reset text area
        messageValue = "";
      }
    }
  }
</script>

<style>
  @media (max-width: 1366px) {
    textarea {
      height: 2.3em;
      font-size: 0.825em;
    }
  }

  @media (min-width: 1366px) {
    textarea {
      height: 2.5em;
    }
  }

  .chat-input-wrapper {
    align-self: start;
    justify-self: end;
    grid-column: 2 / 3;
    width: 90%;
    align-self: center;
    justify-self: start;
    /*margin-bottom: 2%;*/
  }

  textarea {
    width: 100%;
    resize: none;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    font-family: "Mukta", sans-serif;
    font-weight: lighter;
    padding-top: 0.7em;
    box-sizing: border-box;
    padding-left: 1%;
    border: 1px solid gray;
  }

  ::placeholder {
    color: #aaa;
  }
</style>

<div class="chat-input-wrapper">
  <textarea
    name="chat-input"
    id="chat-input"
    placeholder="Send a message"
    bind:value={messageValue}
    on:keydown={onKeydown} />
</div>
