<svelte:head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Mukta&display=swap" rel="stylesheet">
    <!-- Exposes gapi variable globally -->
    <script src="https://apis.google.com/js/api.js" on:load={handleGoogleAPI}></script>
</svelte:head>
<script lang="ts">
    import MainPage from './pages/Main.svelte';
    /**
     * Below sets up google api connection for handling youtube queries in later
     * components. See components/TopBar/TopBarSearch.svelte for example.
     */
    function handleGoogleAPI() {
        // @ts-ignore
        gapi.load("client", function() {
            loadClient();
        });
    }

    function loadClient() {
        // @ts-ignore
        gapi.client.setApiKey(API_KEY);

        // @ts-ignore
        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
    }
</script>

<main>
    <MainPage></MainPage>
</main>