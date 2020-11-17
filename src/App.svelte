<svelte:head>
    <meta charset="UTF-8">
    <meta name="description" content="Watch Party: Where you can YouTube videos together">
    <meta name="keywords" content="youtube, video sharing, webrtc, websockets">
    <meta name="author" content="Alex Werner @sinplea">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Mukta&display=swap" rel="stylesheet">
    <!-- Exposes gapi variable globally -->
    <script src="https://apis.google.com/js/api.js" on:load={handleGoogleAPI}></script>
    <script src="https://cdn.socket.io/socket.io-3.0.1.js" on:load={handleSocketIO}></script>
</svelte:head>
<script lang="ts">
    import type { Message } from './lib/Interfaces/ChatInterfaces';

    import MainPage from './pages/Main.svelte';

    // NOTE: @types/socket.io-client is not installing via npm, so idk, try
    // to fix later. This works though.
    let socket: unknown;
    let incomingMessage: Message;

    import Router from 'svelte-spa-router';
    import MainPage from './pages/Main.svelte';
    import NotFoundPage from './pages/NotFound.svelte';
    import PartiesPage from './pages/Parties.svelte';
    
    const routes = {
      '/': MainPage,
      '/parties': PartiesPage,
      '*': NotFoundPage,
    }

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

    function handleSocketIO() {
      //@ts-ignore
      socket = io(LUNA_DEV_SERVER);
      
      //@ts-ignore
      socket.on('message-captured', (message: Message) => {
        incomingMessage = message;
      });
    };
</script>

<main>
    <Router routes={routes}></Router>
</main>