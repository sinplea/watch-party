// @ts-ignore
import ChatMessageList from '../../components/Chat/ChatMessageList.svelte';
import type { Message, Sender } from '../../lib/Interfaces/ChatInterfaces';

export default {
    title: 'Chat/MessageList',
    component: ChatMessageList,
    excludeStories: /.Data$/,
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

export const mockData: Message[] = [
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
        messages: mockData,
    },
})

export const Empty = () => ({
    Component: ChatMessageList,
    props: {
        messages: [],
    },
})