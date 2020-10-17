<script lang="ts">
    import ChatMessage from './ChatMessage.svelte';
    import type { Message } from './Interfaces';

    export let messages: Message[];
    $: noMessages = messages.length === 0;
</script>

{#if noMessages}
     <!-- content here -->
     <span>No messages</span>
{:else}
     <!-- else content here -->
    {#each messages as message, i}
        <ChatMessage message={message} index={i} />
    {/each}
{/if}
