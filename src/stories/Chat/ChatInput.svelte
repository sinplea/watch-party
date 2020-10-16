<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Message, Sender } from './Interfaces';

    const dispatch = createEventDispatcher();

    export let sender: Sender;

    let message: Message = {
        sender,
        body: '',
        created_at: new Date(),
    };

    function handleKeypress(e) {
        const key: number = e.keyCode;

        // Enter key pressed
        if (key === 13) {
            e.preventDefault();
            
            dispatch('message', {
                message,
            });
        };
    };
</script>

<textarea 
    name="chat-input" 
    id="chat-input" 
    bind:value={message.body}
    on:keypress={handleKeypress}
    cols="30" 
    rows="10"></textarea>

<style>
    textarea {
        resize: none;
    }
</style>