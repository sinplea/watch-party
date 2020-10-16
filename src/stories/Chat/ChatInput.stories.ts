import ChatInput from './ChatInput.svelte';
import type { Sender } from './Interfaces';

export default {
    title: 'Chat/Input',
    component: ChatInput,
    excludeStories: /.Data*/,
};

export const senderData: Sender = {
    name: 'Alex',
    color: '#f1f1f1',
};

export const Primary = () => ({
    Component: ChatInput,
    props: {
        sender: senderData,
    },
});