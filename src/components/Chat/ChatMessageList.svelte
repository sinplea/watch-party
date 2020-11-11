<script lang="ts">
    import { afterUpdate, beforeUpdate, onMount } from 'svelte';
    import ChatMessage from './ChatMessage.svelte';
    import type { Message } from '../../lib/Interfaces/ChatInterfaces';

    export let messages: Message[];

    let div: HTMLElement;
    let autoscroll: boolean;

    $: noMessages = messages.length === 0;

    beforeUpdate(() => {
        autoscroll = div && (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20);
    })

    afterUpdate(() => {
        if (autoscroll) div.scrollTo(0, div.scrollHeight);
    })
</script>

<div 
    bind:this={div}
    class="message-list-wrapper {noMessages ? 'no-messages' : 'is-populated'}">
    {#if noMessages}
        <div class="no-message-wrapper">
            <div class="no-message-icon">
                <svg width="40px" height="40px" viewBox="0 0 16 16" class="bi bi-chat-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
            </div>

            <div class="no-message-title">Seems no one's chatting.</div>
            <div class="no-message-subtitle">Send a message to get the conversation rolling.</div>
        </div>
    {:else}
         <!-- else content here -->
        {#each messages as message, i}
            <ChatMessage message={message} index={i} />
        {/each}
    {/if}
</div>

<style>
    .message-list-wrapper {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        align-self: center;

        padding-top: 2%;
        max-height: 98%;

        line-height: 1.375em;
        overflow: auto;
    }
    
    /*
    TODO: Use Javascript to dynamically fade the Scroll bar in and out
    on mouseenter and mouseleave
    
    .message-list-wrapper::-webkit-scrollbar {
        display: none;
    }
    */
    
    .is-populated {
        align-self: start;
    }

    .no-message-icon, .no-message-title, .no-message-subtitle {
        text-align: center;
        font-family: 'Mukta', sans-serif;
    }

    .no-message-title {
        font-size: 1em;
        font-weight: bold;
    }

    .no-message-subtitle {
        font-size: 0.875em;
        font-style: italic;
    }
</style>