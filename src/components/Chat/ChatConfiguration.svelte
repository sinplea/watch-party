<script lang="ts">
    import { senderStore } from '../../stores/ChatStore';

    let configPanelOpen: boolean = false;
    let color: string = $senderStore.color;
    let name: string = $senderStore.name;

    function toggleConfigPanel(e: MouseEvent): void {
        configPanelOpen = !configPanelOpen;
    }

    function handleColorInput(e: Event): void {
        senderStore.changeColor(color);
    }

    function handleUsernameInput(e: Event): void {
        senderStore.changeName(name);
    }
</script>

{#if configPanelOpen}
    <div class="config-panel">
        <div on:click={toggleConfigPanel} class="close">&times</div>
        <div class="section-title">IDENTITY</div>

        <div class="color-input-wrapper">
            <label for="user-color">Color</label>
            <input 
                bind:value={color} 
                on:input={handleColorInput}
                type="color" 
                name="user-color" 
                id="user-color">
        </div>

        <div class="user-name-input-wrapper">
            <label for="user-name">Username</label>
            <input 
                bind:value={name}
                on:input={handleUsernameInput}
                type="text" 
                name="user-name" 
                id="user-name">

        </div>
    </div>
{/if}

<span on:click={toggleConfigPanel} class="config-btn material-icons">settings</span>

<style>
    input {
        width: 90%;
        margin-bottom: 4%;
        height: 1.75em;
    }

    #user-name {
        border: none;
        border-bottom: 1px solid #434343;
        background-color: whitesmoke;
    }

    .config-btn {
        grid-column: 1 / 2;
        justify-self: center;
        align-self: center;
        color: crimson;
        cursor: pointer;
    }

    .config-panel {
        width: 15vw;
        height: 35vh;
        position: absolute;
        overflow: auto;
        border-radius: 0px 0px 5px 5px;
        filter: drop-shadow(0px 4px 4px rgba(0,0,0,25%));
        bottom: 6vh;
        right: 24vh;
        padding-top: 1%;
        padding-left: 1%;
        background-color: whitesmoke;
        font-family: 'Mukta', sans-serif;
    }

    .section-title {
        margin-bottom: 6%;
        color: #434343;
    }

    .color-input-wrapper, .user-name-input-wrapper {
        width: 96%;
        font-size: 0.9em;
    }

    .color-input-wrapper {
        padding-bottom: 1%;
    }

    .close {
        font-size: 1.8em;
        padding-right: 8%;
        text-align: right;
        height: 10%;
        cursor: pointer;
    }

</style>