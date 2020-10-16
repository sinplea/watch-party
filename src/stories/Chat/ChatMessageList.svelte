<script lang="ts">
    import ChatMessage from './ChatMessage.svelte';
    import type { Message } from './Interfaces';

    export let messages: Message[] = [];
</script>

{#each messages as message}
    <ChatMessage message={message} />
{/each}