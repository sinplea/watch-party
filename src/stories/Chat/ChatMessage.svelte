<script lang="ts">
    import type { Message } from './Interfaces';

    export let index: number = 0;
    export let message: Message = {
        sender: {
            name: '',
            color: '#ffffff',
        },
        body: '',
        created_at: new Date(),
    };


    console.log(message);

    function beautifyDate(time: Date): string {
        return time.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
    }
</script>

<div class="chat-message {index % 2 === 0 ? '' : 'accented' }">
    <span class="created-at">{ beautifyDate(message.created_at) }</span>
    <span class="sender" style="--name-color: {message.sender.color}">{ message.sender.name }: </span>
    <span class="message-body">{ message.body }</span>
</div>

<style>
    .sender {
        color: var(--name-color);
    }

    .accented {
        background-color: beige;
    }
</style>