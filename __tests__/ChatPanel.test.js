import ChatPanel from '../src/stories/Chat/ChatPanel.svelte';
import { render, fireEvent, screen } from '@testing-library/svelte';

/**
 * Testing methodology based on:
 * https://kentcdodds.com/blog/testing-implementation-details
 * 
 */
describe('ChatPanel Component', () => {
    it('should never allow a blank message to be sent', () => {
        const { getByPlaceholderText } = render(ChatPanel);
        
        // Select textarea
        const textarea = getByPlaceholderText('Send a message');
        fireEvent.keyPress(textarea, { key: "Enter", code: 13, charCode: 13 });

        // Query for the no-messages element that exists only when no messages have been sent
        expect(screen.getByText("Seems no one's chatting.")).toBeInTheDocument();
    })
})