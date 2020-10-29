<script lang="ts">
    import ChatMessageList from './ChatMessageList.svelte';
    import ChatInput from './ChatInput.svelte';
    import { sender } from '../../stores/ChatStore';
    import type { Message } from '../../lib/ChatInterfaces';

    export let messages: Message[] = [];

    function postMessage(e: CustomEvent<any>) {
        const message: Message = e.detail.message;
        messages = [...messages, message];
    };
</script>

<div class="chat-panel-wrapper">
<div class="chat-panel">
        <h2 class="top-bar">CHAT ROOM</h2>
        <div class="seperator"></div>
        <ChatMessageList messages={messages}></ChatMessageList>

        <ChatInput sender={$sender} on:onMessageSent={postMessage}></ChatInput>
</div>

</div>

<style>
    .chat-panel-wrapper {
        margin: 0;
        width: 100%;
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        border-left: 4px solid white;
        box-sizing: border-box;
    }

    .chat-panel {
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: minmax(0, 90vh);
        grid-template-rows: 6% auto 8%;
    }

    .top-bar {
        font-family: 'Mukta', sans-serif;
        font-size: 1.125em;
        text-align: center;
        align-self: center;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .seperator {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
        align-self: end;
        border-bottom: 4px solid white;
    }
</style>