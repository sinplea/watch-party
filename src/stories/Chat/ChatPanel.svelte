<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Mukta&display=swap" rel="stylesheet">
</svelte:head>

<script lang="ts">
    import ChatMessageList from './ChatMessageList.svelte';
    import ChatInput from './ChatInput.svelte';
    import { sender } from '../../stores/ChatStore';
    import type { Message } from './Interfaces';

    export let messages: Message[] = [];

    function postMessage(e: CustomEvent<any>) {
        const message: Message = e.detail.message;
        messages = [...messages, message];
    };
</script>

<div class="chat-panel">
        <h2 class="top-bar">CHAT ROOM</h2>

        <div class="message-wrapper">
            <ChatMessageList messages={messages}></ChatMessageList>
        </div>

        <div class="input-wrapper">
            <ChatInput sender={$sender} on:onMessageSent={postMessage}></ChatInput>
        </div>
</div>

<style>
    .chat-panel {
        display: grid;
        width: 25%;
        height: 100vh;
        grid-template-columns: 100%;
        grid-template-rows: 20% auto 20%;
    }

    .top-bar {
        font-family: 'Mukta', sans-serif;
        font-size: 22px;
        text-align: center;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .message-wrapper {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
        align-self: center;
    }

    .input-wrapper {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 3;
        grid-row-end: 4;
        align-self: end;
    }
</style>