<script lang="ts">
    // This would be a randomly generated unique string that would allow
    // users to join other user's rooms.
    let roomCode: string = 'ZZYYXX';
    let isHidden: boolean = true;

    function show(): void {
        isHidden = false;
    }

    function hide(): void {
        isHidden = true;
    }
</script>

<div class="room-code-container">
    {#if isHidden}
        <span 
            on:click={show}
            class="material-icons">visibility_on</span>
    {:else}
        <span 
            on:click={hide}
            class="material-icons">visibility_off</span>
        
            <div class="room-code">
                <span class="title">Room:</span>
                {isHidden ? '' : roomCode}
            </div>
    {/if}
</div>

<style>
    span {
        display: inline-block;
    }

    .room-code-container {
        width: 33%;
        grid-column: 1 / 2;
        justify-self: end;
    }

    .material-icons {
        cursor: pointer;
    }

    .room-code{
        height: 3vh;
        width: 8vw;
        top: 7vh;
        padding-top: 1vh;

        position: absolute;

        color: #434343;
        text-align: center;
        background-color: whitesmoke;
        border-radius: 5px;
        filter: drop-shadow(0px 4px 4px rgba(0,0,0,25%));
    }

    .title {
        font-weight: 800;
    }
</style>