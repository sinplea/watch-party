import ChatMessage from '../../components/Chat/ChatMessage.svelte';
import type { Message } from '../../lib/Interfaces/ChatInterfaces';

export default {
    title: 'Chat/Message',
    component: ChatMessage,
    excludeStories: /.*Data$/,
}

export const messageData: Message = {
    sender: {
        name: 'Alex',
        color: '#03fcf8',
    },
    body: 'Hi!',
    created_at: new Date(),
}

export const Primary = () => ({
    Component: ChatMessage,
    props: {
        message: messageData,
        index: 0,
    }
})

export const Accented = () => ({
    Component: ChatMessage,
    props: {
        message: messageData,
        index: 1,
    }
})
