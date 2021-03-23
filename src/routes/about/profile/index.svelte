<script context="module">
  export const prerender = true;

  export async function load({ fetch }) {
        const API_URL = "https://jsonplaceholder.typicode.com/posts";
        const resp$ = await fetch(API_URL);
        return {
            props: {
                users: await resp$.json(),
            }
        };

        return {
			status: resp$.status,
			error: new Error(`Could not load ${API_URL}`)
		};
    }
</script>

<script>
    export let users;
</script>

<h1>My Profile</h1>


<h1 class="p-4 text-3xl">My About</h1>
<div class="p-4">
    <ul>
        {#each users as user}
            <li>{user.title}</li>
        {/each}
    </ul>
</div>
