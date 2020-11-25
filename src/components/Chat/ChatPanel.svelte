<script lang="ts">
  import ChatMessageList from "./ChatMessageList.svelte";
  import ChatInput from "./ChatInput.svelte";
  import ChatConfiguration from "./ChatConfiguration.svelte";
  import { senderStore } from "../../stores/ChatStore";
  import type { Message } from "../../lib/Interfaces/ChatInterfaces";

  export let socket: unknown = null;
  export let incomingMessage: Message;

  let messages: Message[] = [];

  $: {
    if (incomingMessage) {
      updateMessageList(incomingMessage);
    }
  }

  function sendMessage(e: CustomEvent<any>) {
    const message: Message = e.detail.message;
    updateMessageList(message);

    if (socket) {
      // @ts-ignore
      socket.emit("chat-message-posted", message);
    }
  }

  function updateMessageList(message: Message): void {
    messages = [...messages, message];
  }
</script>

<style>
  @media (min-width: 1366px) {
    .chat-panel-wrapper {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }

    .chat-panel {
      grid-template-columns: minmax(0, 100vh);
      grid-template-rows: 6% 86% 8%;
    }
  }

  @media (max-width: 1366px) {
    .chat-panel-wrapper {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }

    .chat-panel {
      grid-template-columns: 100%;
      grid-template-rows: 0.125fr 2fr 0.125fr;
      border-top: 1px solid #d1d1d1;
    }
  }

  .chat-panel-wrapper {
    margin: 0;
    width: 100%;
    border-left: 1px solid #d1d1d1;
    box-sizing: border-box;
  }

  .chat-panel {
    display: grid;
    width: 100%;
    height: 100%;
  }

  .title {
    font-family: "Mukta", sans-serif;
    font-size: 1.125em;
    text-align: center;
    align-self: center;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .seperator {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    align-self: end;
    border-bottom: 1px solid #d1d1d1;
  }

  .chat-input {
    grid-column: 1 / 2;
    grid-row-start: 3 / 4;
    display: grid;
    grid-template-columns: 1fr 7fr;
  }
</style>

<div class="chat-panel-wrapper">
  <div class="chat-panel">
    <h2 class="title">CHAT ROOM</h2>
    <div class="seperator" />

    <ChatMessageList {messages} />

    <div class="chat-input">
      <ChatConfiguration />
      <ChatInput sender={$senderStore} on:onMessageSent={sendMessage} />
    </div>
  </div>
</div>
