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
    .top-bar {
        font-family: 'Mukta', sans-serif;
        font-size: 22px;
        text-align: center;
        padding: 2vh 0;
    }
</style>