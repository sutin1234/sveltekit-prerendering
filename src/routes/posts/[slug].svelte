
<script context="module">
    export const prerender = true;

    export async function load({ page, fetch }) {
        const { slug } = page.params;
        const API_URL = "https://jsonplaceholder.typicode.com/posts/" + slug;
        const resp$ = await fetch(API_URL);
        return {
            props: {
                post: await resp$.json(),
                slug
            }
        };

        return {
			status: resp$.status,
			error: new Error(`Could not load ${API_URL}`)
		};
    }
</script>

<script>
import { onMount } from "svelte";


    export let post;
    export let slug;

</script>

<h1 class="p-4 text-3xl">My Post {slug}</h1>
<div class="p-4">
    <ul>
            <li>{post.title}</li>
    </ul>
</div>
