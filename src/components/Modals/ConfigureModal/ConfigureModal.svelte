<script lang="ts">
    import ConfigureModalColorPicker from './ConfigureModalColorPicker.svelte';
    import ConfigureModalInput from './ConfigureModalInput.svelte';
    import { createEventDispatcher } from 'svelte';
    import { senderStore } from '../../../stores/ChatStore';
    import type { Sender } from '../../../lib/Interfaces/ChatInterfaces';

    const dispatch = createEventDispatcher();
    let sender: Sender = $senderStore;

    function handleColorChanged(e: CustomEvent) {
        sender.color = e.detail.color;
    };

    function handleNameChanged(e: CustomEvent) {
        sender.name = e.detail.name;
    };

    function submit() {
        senderStore.set(sender);
        close();
    };

    function close() {
        dispatch('close');
    };
</script>

<div class="modal">
    <div class="modal-content">
        <div class="top">
            <span class="close" on:click={close}>&times;</span>
            <div class="top-title">Welcome to Watch Party!</div>
            <div class="top-subtitle">where you can watch youtube together</div>
        </div>

        <ConfigureModalColorPicker on:colorChanged={handleColorChanged} />
        <ConfigureModalInput on:nameChanged={handleNameChanged} />

        <div class="custom-button" on:click={submit}></div>
    </div>
</div>

<style>
    /* The Modal (background) */
    .modal {
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: hidden; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }
    
    /* Modal Content/Box */
    .modal-content {
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
    }
</style>