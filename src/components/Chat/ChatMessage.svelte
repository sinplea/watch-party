<script lang="ts">
  import type { Message } from "../../lib/Interfaces/ChatInterfaces";

  export let index: number = 0;
  export let message: Message = {
    sender: {
      name: "",
      color: "#ffffff",
    },
    body: "",
    createdAt: new Date(),
  };

  function beautifyDate(time: Date): string {
    return new Date(time).toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
</script>

<style>
  .chat-message {
    font-family: "Mukta", sans-serif;
    width: 98%;
    padding-left: 2%;
    word-wrap: break-word;
  }

  .created-at {
    font-size: 0.5em;
    color: #919191;
  }

  .sender,
  .message-body {
    font-size: 0.875em;
  }

  .sender {
    color: var(--name-color);
    font-weight: bold;
  }

  .message-body {
    font-weight: normal;
  }

  .accented {
    background-color: #f2f2f2;
  }
</style>

<div class="chat-message {index % 2 === 0 ? '' : 'accented'}">
  <span class="created-at">{beautifyDate(message.createdAt)}</span>
  <span
    class="sender"
    style="--name-color: {message.sender.color}">{message.sender.name}:
  </span>
  <span class="message-body">{message.body}</span>
</div>
