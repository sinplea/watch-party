<script lang="ts">
    import { createEventDispatcher, tick } from 'svelte';
    import { senderStore } from '../../stores/ChatStore';
    import RoomCode from '../RoomControls/RoomCode.svelte';

    const dispatch = createEventDispatcher();
    
    // TODO: Make a room svelte store
    let roomCode: string = 'ZZYYXX';
    let color: string = $senderStore.color;
    let name: string = $senderStore.name;

    function emitToggleSideBar(e: MouseEvent): void {
        dispatch('toggleSideBar')
    }

    async function handleColorInput(): Promise<void> {
        await tick();
        senderStore.changeColor(color);
    }

    async function handleNameInput(): Promise<void> {
        await tick();
        senderStore.changeName(name);
    }
</script>

<div class="side-bar-container">
    <div on:click={emitToggleSideBar} class="close">&times</div>
    <!-- Deciding to not use the RoomCode component in favor of rewriting some code.
        This will make it easier to achieve my design goals.-->
    <div class="room-config-header header">ROOM CONFIGURATION</div>

    <div class="room-label">Your room</div>
    <div class="room-code">{roomCode}</div>

    <div class="join-room-label">Join</div>
    <input type="text" class="join-room-input">

    <div class="user-config-header header">USER CONFIGURATION</div>

    <div class="user-identity-subheading subheading">Identity</div>

    <div class="user-color-label">Color</div>
    <input 
        bind:value={color} 
        on:input={handleColorInput}
        type="color" class="user-color-input">
    
    <div class="user-name-label">Name</div>
    <input 
        bind:value={name} 
        on:input={handleNameInput}
        type="text" class="user-name-input">
</div>

<style>
    @media (max-width: 786px) {
        .side-bar-container {
            width: 60vw;
        }
    }

    @media (min-width: 786px) {
        .side-bar-container {
            width: 50vw;
        }
    }

    @media (min-width: 1366px) {
        .side-bar-container {
            width: 40vw;
        }
    }

    input {
        width: 90%;
        height: 40%;
        border: none;
    }

    input[type=text] {
        background-color: transparent;
        border-bottom: 1px solid whitesmoke;
        color: #f1f1f1;
    }

    ::placeholder {
        color: #f1f1f1;
    }

    .side-bar-container {
        position: absolute;
        top: 0;
        right: 0;

        height: 100%;
        background-color: #434343;
        color: white;

        display: grid;
        grid-template-rows: repeat(8, 0.8fr) 8fr;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: end;

        font-size: 0.825em;
        font-family: 'Mukta', sans-serif;
        padding: 1% 2%;
    }

    .header {
        font-size: 1.2rem;
        border-bottom: 1px solid whitesmoke;
        align-self: end;
    }

    .subheading {
        font-size: 1.1rem;
        align-self: end;
    }

    .close {
        grid-column: 1 / 3;
        grid-row: 1 / 2;

        font-size: 2rem;
        cursor: pointer;
    }

    .room-config-header {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
    }

    .room-label {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
    }

    .room-code {
        grid-column: 2 / 3;
        grid-row: 3 / 4;
    }

    .join-room-label {
        grid-column: 1 / 2;
        grid-row: 4 / 5;
    }

    .join-room-input {
        grid-column: 2 / 3;
        grid-row: 4 / 5;
    }

    .user-config-header {
        grid-column: 1 / 3;
        grid-row: 5 / 6;
    }

    .user-identity-subheading {
        grid-column: 1 / 3;
        grid-row: 6 / 7;
    }

    .user-color-label {
        grid-column: 1 / 2;
        grid-row: 7 / 8;
    }

    .user-color-input {
        grid-column: 2 / 3;
        grid-row: 7 / 8;
    }

    .user-name-label {
        grid-column: 1 / 2;
        grid-row: 8 / 9;
    }

    .user-name-input {
        grid-column: 2 / 3;
        grid-row: 8 / 9;
    }
</style>