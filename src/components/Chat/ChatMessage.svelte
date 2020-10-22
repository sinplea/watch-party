<script lang="ts">
    import type { Message } from '../../lib/ChatInterfaces';

    export let index: number = 0;
    export let message: Message = {
        sender: {
            name: '',
            color: '#ffffff',
        },
        body: '',
        created_at: new Date(),
    };

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
    .chat-message {
        font-family: 'Mukta', sans-serif;
        padding: 0 2%;
        max-width: 100%;
        word-wrap: break-word;
    }
    
    .created-at {
        font-size: 8px;
        color: #919191;
    }

    .sender, .message-body {
        font-size: 14px;
    }

    .sender {
        color: var(--name-color);
        font-weight: bold;
    }

    .message-body {
        font-weight: normal;
    }

    .accented {
        background-color: #f2f2f2;
    }
</style>