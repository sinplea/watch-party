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

        <ChatMessageList messages={messages}></ChatMessageList>

        <ChatInput sender={$sender} on:onMessageSent={postMessage}></ChatInput>
</div>

<style>
    .chat-panel {
        display: grid;
        width: 30%;
        min-height: 90vh;
        max-height: 90vh;
        grid-template-columns: minmax(0, 90vh);
        grid-template-rows: 13% auto 13%;
        background-color: #fafafa;
        border-left: #eee 1px solid
    }

    .top-bar {
        font-family: 'Mukta', sans-serif;
        font-size: 18px;
        text-align: center;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
        border-bottom: #eeeeee 1px solid;
    }
</style>