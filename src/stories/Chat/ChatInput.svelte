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

<div class="chat-input-wrapper">
    <textarea 
        name="chat-input" 
        id="chat-input" 
        placeholder="Send a message"
        bind:value={messageValue}
        on:keydown={onKeydown}></textarea>

</div>


<style>
    .chat-input-wrapper {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 3;
        grid-row-end: 4;
        align-self: end;
        padding: 0 4%;
        padding-top: 4%;
        margin-bottom: 2%;
        border-top: #eee 2px solid;
    }

    textarea {
        height: 40px;
        width: 100%;
        resize: none;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        font-family: 'Mukta', sans-serif;
        font-weight: lighter;
        padding-top: 10px;
        box-sizing: border-box;
    }
</style>