import ChatPanel from '../src/stories/Chat/ChatPanel.svelte';
import { render, fireEvent, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event'

/**
 * Testing methodology based on:
 * https://kentcdodds.com/blog/testing-implementation-details
 * 
 */
describe('ChatPanel Component', () => {
    it('should never allow a blank message to be sent', async () => {
        const { getByPlaceholderText } = render(ChatPanel);
        
        // Select textarea
        const textarea = getByPlaceholderText('Send a message');
        try {
            await fireEvent.keyDown(textarea, { key: "Enter", code: "Enter", charCode: 13 });
        } catch (err) {
            expect(err).toEqual(new Error());
        }

        // Query for the no-messages element that exists only when no messages have been sent
        expect(screen.getByText("Seems no one's chatting.")).toBeInTheDocument();
    })

    it('should display a new message below the last message sent', async () => {
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

        userEvent.type(textarea, 'Message 2');

        try {
            await fireEvent.keyDown(textarea, { 
                key: "Enter", 
                code: "Enter", 
                charCode: 13,
            });
        } catch (err) {
            expect(err).toEqual(new Error());
        }
        

        const messages = screen.queryAllByText(/Message/);
        
        expect(messages).toHaveLength(2);
        expect(messages[0]).toHaveTextContent('Message 1');
        expect(messages[1]).toHaveTextContent('Message 2');
    })

    // TODO
    it('should autoscroll so the most recent message is always visable', () => {
        expect(true).toBe(true);
    })
})