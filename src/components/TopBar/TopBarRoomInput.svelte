<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let roomCode: string = 'XXZYY';

    let isRoomCodeHidden: boolean = true;
    let mediaQuery: MediaQueryList = window.matchMedia('(max-width: 1366px)');
    let isSmallScreen: boolean = mediaQuery.matches;

    // TODO: Make popout menu fuctional on click
    mediaQuery.addEventListener('change', () => {
        isSmallScreen = mediaQuery.matches;
    });

    function changeRoom(e: MouseEvent): void {
        dispatch('changeRoom', { room: roomCode });
    };

    function showRoomCode(): void {
        isRoomCodeHidden = false;
    };

    function hideRoomCode(): void {
        console.log('HERERERER')
        setTimeout(() => {
            isRoomCodeHidden = true;
        }, 200)
    };
</script>

<div class="room-input-wrapper">
    {#if isSmallScreen}
        <div class="burger material-icons">menu</div>
    {:else}
        <div class="visibility-control">
            {#if isRoomCodeHidden}
                <div 
                    on:click={showRoomCode}
                    class="material-icons">visibility_on</div>
            {:else}
                <div 
                    on:click={hideRoomCode}
                    class="material-icons">visibility_off</div>
            {/if}
        </div>

        <div class="room-code">Room {isRoomCodeHidden ? '' : roomCode}</div>

        <input placeholder="Enter room code..." type="password" name="room-input" id="room-input">
        <div class="submit-button" on:click={changeRoom}>Go</div>
    {/if}
</div>

<style>
    .room-input-wrapper {
        display: grid;

        align-items: center;
        justify-items: center;
        align-self: center;
        justify-self: end;

        grid-column: 3 / 4;
        grid-row: 1 / 2;
                
        font-size: 1rem;
        color: white;
        height: 50%;
        font-family: 'Mukta', sans-serif;
    }

    .visibility-control {
        width: 20%;
        grid-column: 1 / 2;
        cursor: pointer;
        justify-self: end;
    }

    .room-code {
        grid-column: 2 / 3;
        font-weight: bold;
    }

    input {
        box-sizing: border-box;

        grid-column: 3 / 4;

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

        grid-column: 4 / 5;

        padding: 2% 25%;

        color: crimson;
        background-color: white;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;

        cursor: pointer;
    }
    
    .burger {
        grid-column: 1 / 2;
        font-size: 2rem;
        justify-self: center;
    }

    
    ::placeholder {
        color: #aaa;
    }

    @media(max-width: 768px) {
        .room-input-wrapper {
            grid-template-columns: 1fr;
            justify-self: center;

            margin: 0;
        }
    }

    @media(min-width: 768px) {
        .room-input-wrapper {
            justify-self: end;

            margin-right: 10%;
        }

        input, .submit-button {
            height: 2em;
        }
    }

    @media(min-width: 1366px) {
        .room-input-wrapper {
            width: 72%;

            grid-column-gap: 2%;
            grid-template-columns: 1fr 2fr 2fr auto;

            margin-right: 8%;
        }

        input, .submit-button {
            height: 2.1875em;
        }
    }

    @media(min-width: 1920px) {
        .room-input-wrapper {
            width: 58%;
        }
    }

</style>