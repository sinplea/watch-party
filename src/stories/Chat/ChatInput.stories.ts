import ChatInput from '../../components/Chat/ChatInput.svelte';
import { action } from '@storybook/addon-actions';
import type { Sender } from '../../lib/ChatInterfaces';

export default {
    title: 'Chat/Input',
    component: ChatInput,
    excludeStories: /.Data*/,
};

export const senderData: Sender = {
    name: 'Alex',
    color: '#f1f1f1',
};

export const Default = () => ({
    Component: ChatInput,
    props: {
        sender: senderData,
    },
    on: {
        onMessageSent: action('onMessage'),
    },
});