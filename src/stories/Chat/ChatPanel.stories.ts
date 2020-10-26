import ChatPanel from '../../components/Chat/ChatPanel.svelte';
import { mockData as mockMessages } from './ChatMessageList.stories';

export default {
    title: 'Panels/Chat',
    component: ChatPanel,
};

export const Empty = () => ({
    Component: ChatPanel,
});

export const PartiallyFilled = () => ({
    Component: ChatPanel,
    props: {
        messages: mockMessages,
    },
});

export const Overflowing = () => ({
    Component: ChatPanel,
    props: {
        messages: [...mockMessages, 
            ...mockMessages, 
            ...mockMessages, 
            ...mockMessages,
            ...mockMessages,
            ...mockMessages,
            ...mockMessages,
            ...mockMessages,
            ...mockMessages]
    }
})