import ChatMessage from './ChatMessage.svelte';
import type { Message } from './Interfaces';

export default {
    title: 'Chat/Message',
    component: ChatMessage,
    excludeStories: /.*Data$/,
}

export const messageData: Message = {
    sender: 'Alex',
    body: 'Hi!',
    created_at: new Date(),
}

export const Primary = () => ({
    Component: ChatMessage,
    props: {
        message: messageData
    }
})