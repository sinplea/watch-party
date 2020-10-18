<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Message, Sender } from './Interfaces';

    const dispatch = createEventDispatcher();

    export let sender: Sender = {
        name: 'DefaultValue',
        color: '#f1f1f1',
    };

    let messageValue: string;
    
    function onKeydown(e: KeyboardEvent) {
        const key: string = e.code;
        const message: Message = {
            sender,
            body: messageValue,
            created_at: new Date(),
        };

        if (key === 'Enter') {
            e.preventDefault();
            
            // Custom Event to pass along message
            dispatch('onMessageSent', {
                message,
            });

            // Reset text area
            messageValue = ''
        };
    };
</script>

<textarea 
    name="chat-input" 
    id="chat-input" 
    placeholder="Send a message"
    bind:value={messageValue}
    on:keydown={onKeydown}></textarea>


<style>
    textarea {
        resize: none;
        padding: 1%;
        width: 100%;
        height: 20px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        font-family: 'Mukta', sans-serif;
        font-weight: lighter;
    }
</style>