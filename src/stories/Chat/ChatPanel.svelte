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
    <div class="top-bar">Chat Room</div>
    <ChatMessageList messages={messages}></ChatMessageList>
    <ChatInput sender={$sender} on:onMessageSent={postMessage}></ChatInput>
</div>