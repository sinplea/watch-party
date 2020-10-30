<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let color: string = '#3262a8';

    function updateColor(e: Event) {
        dispatch('colorChanged', { color });
    }
</script>

<div class="color-picker-wrapper">
    <input 
        on:input={updateColor}
        bind:value={color}
        type="color" 
        name="color-picker" 
        id="color-picker">
</div>