import ChatPanel from '../src/components/Chat/ChatPanel.svelte'
import { render, fireEvent, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

/**
 * Testing methodology based on:
 * https://kentcdodds.com/blog/testing-implementation-details
 * 
 */

describe('ChatPanel Aggregate Component', () => {
    it('should not send a blank message to be sent', async () => {
        const { getByPlaceholderText } = render(ChatPanel);
        
        // Select textarea
        const textarea = getByPlaceholderText('Send a message');
        await fireEvent.keyDown(textarea, { key: "Enter", code: "Enter", charCode: 13 });

        // Query for the no-messages element that exists only when no messages have been sent
        expect(screen.getByText("Seems no one's chatting.")).toBeInTheDocument();
    })

    it('should display a new message below the last message sent', async () => {
        // JSDOM doesn't know about scrollTo() So we need to create it before testing
        // ChatPanel->ChatMessageList which uses scrollTo()
        Element.prototype.scrollTo = () => {};

        const { getByPlaceholderText } = render(ChatPanel, { messages: [ 
            {
                sender: {
                    name: 'Alex',
                    color: '#fff',
                },
                body: 'Message 1',
                created_at: new Date(),
            } 
        ] });
        
        const textarea = getByPlaceholderText('Send a message');

        await userEvent.type(textarea, 'Message 2');

        await fireEvent.keyDown(textarea, { 
            key: "Enter", 
            code: "Enter", 
            charCode: 13,
        });

        const messages = screen.queryAllByText(/Message/);
        
        expect(messages).toHaveLength(2);
        expect(messages[0]).toHaveTextContent('Message 1');
        expect(messages[1]).toHaveTextContent('Message 2');
    })

    it('should autoscroll so the most recent message is always visible', async () => {
        const scrollToSpy = jest.fn();
        Element.prototype.scrollTo = scrollToSpy;

        const { getByPlaceholderText } = render(ChatPanel, { messages: [ 
            {
                sender: {
                    name: 'Alex',
                    color: '#fff',
                },
                body: 'Message 1',
                created_at: new Date(),
            } 
        ] });
        
        const textarea = getByPlaceholderText('Send a message');

        await userEvent.type(textarea, 'Message 2');

        await fireEvent.keyDown(textarea, { 
            key: "Enter", 
            code: "Enter", 
            charCode: 13,
        });


        expect(scrollToSpy).toHaveBeenCalled();
    })
})