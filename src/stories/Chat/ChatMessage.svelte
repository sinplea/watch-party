<script lang="ts">
    import type { Message } from './Interfaces';

    export let message: Message = {
        sender: '',
        body: '',
        created_at: new Date(),
    };
</script>

<div class="chat-message">
    <span class="created-at">{ message.created_at }</span>
    <span class="sender">{ message.sender }</span>
    <span class="message-body">{ message.body }</span>
</div>