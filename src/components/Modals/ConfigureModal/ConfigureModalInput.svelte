<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let name: string;

    function handleInput(e: Event) {
        dispatch('nameChanged', { name });
    };
</script>

<div class="input-wrapper">
    <input 
        on:input={handleInput}
        bind:value={name}
        type="text" 
        name="input" 
        id="input">
</div>