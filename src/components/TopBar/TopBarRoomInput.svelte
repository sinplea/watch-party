<script lang="ts">
    import RoomCode from '../RoomControls/RoomCode.svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let mediaQuery: MediaQueryList = window.matchMedia('(max-width: 1366px)');
    let isMobile: boolean = mediaQuery.matches;
    let isSideBarHidden: boolean = true;
    let roomCodeInput: string = '';

    // TODO: Make popout menu fuctional on click
    mediaQuery.addEventListener('change', () => {
        isMobile = mediaQuery.matches;
    });

    function changeRoom(e: MouseEvent): void {
        dispatch('changeRoom', { room: roomCodeInput });
    };

    function emitToggleSidebar(): void {
        dispatch('toggleSidebar');
    };
</script>

<div class="top-bar-room-input-container">
    {#if isMobile}
        <div class="menu-control material-icons" on:click={emitToggleSidebar}>menu</div>
    {:else}
        <RoomCode></RoomCode>
        <input 
            bind:value={roomCodeInput}
            placeholder="Enter room code..." 
            type="password" 
            name="room-input" id="room-input">
        <div class="submit-button" on:click={changeRoom}>Go</div>
    {/if}
</div>

<style>
    .top-bar-room-input-container {
        display: grid;

        align-items: center;
        justify-items: center;

        align-self: center;

        grid-column: 3 / 4;
        grid-row: 1 / 2;

        height: 100%;
        font-size: 1rem;
        color: white;
        font-family: 'Mukta', sans-serif;
    }

    input {
        box-sizing: border-box;

        grid-column: 2 / 3;

        font-weight: lighter;
        border: 1px solid gray;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;

        resize: none;
    }


    .submit-button {
        height: 90%;
        display: flex;
        align-items: center;
        box-sizing: border-box;

        grid-column: 3 / 4;

        padding: 2% 20%;

        color: crimson;
        background-color: white;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;

        cursor: pointer;
    }
    
    .menu-control {
        grid-column: 1 / 2;
        font-size: 2rem;
    }
    
    ::placeholder {
        color: #aaa;
    }

    @media(min-width: 768px) {
        .top-bar-room-input-container {
            width: 100%;
            grid-template-columns: 1fr;

            justify-self: center;
            margin: 0;
        }

        input, .submit-button {
            height: 2em;
        }
    }

    @media(min-width: 1366px) {
        .top-bar-room-input-container {
            width: 60%;
            grid-template-columns: 1fr 2fr 1fr;
        }

        input, .submit-button {
            height: 2.1875em;
        }
    }
</style>