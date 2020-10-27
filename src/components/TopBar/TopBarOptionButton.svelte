<script lang="ts">
    function handleClick(e: MouseEvent) {
        alert('Pushed')
        // TODO Design modal for configuration popup.
    }
</script>

<div class="configuration-button" on:click={handleClick}>
    <span class="material-icons">settings</span>
</div>

<style>
    .configuration-button {
        grid-column-start: 3;
        grid-column-end: 4;
        align-self: center;
        justify-self: end;
        background-color: #fff;
        width: 40px;
        height: 40px;
        margin-right: 10%;
        border-radius: 5px;
        text-align: center;
    }

    .material-icons {
        font-size: 28px;
        padding-top: 5px;
        color: #EB3636;
        outline: none;
        border: none;
        background: none;
    }
</style>