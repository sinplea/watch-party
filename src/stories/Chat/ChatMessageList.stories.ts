import ChatMessageList from './ChatMessageList.svelte';
import type { Message, Sender } from './Interfaces';

export default {
    title: 'Chat/MessageList',
    component: ChatMessageList,
};

const mockSenders: Sender[] = [
    {
        name: 'Alex',
        color: '#3246a8'
    },
    {
        name: 'sinplea',
        color: '#a8329c',
    },
    {
        name: 'coffee',
        color: '#a87332'
    }
]

const mockMessages: Message[] = [
    {
        sender: mockSenders[0],
        body: 'Wow!',
        created_at: new Date(),
    },
    {
        sender: mockSenders[1],
        body: 'Chat is working!',
        created_at: new Date(),
    },
    {
        sender: mockSenders[2],
        body: 'Good stuff',
        created_at: new Date(),
    },
];

export const WithMessages = () => ({
    Component: ChatMessageList,
    props: {
        messages: mockMessages,
    },
})

export const Empty = () => ({
    Component: ChatMessageList,
})