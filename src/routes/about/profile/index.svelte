<script context="module">
  export const prerender = true;

  export async function load({ fetch }) {
        const API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=i81KJyfs7pjfT4mNYxg-cP2Q1cri_86DIsfEEkus-L2390OHWk3aQv51KApnkq85w-NLNE6obwqpvUMJpCzyoODkq5-8stK4m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMqVkL9ulfE9IeCbkvq7A61ItunbN-wOcE6a83JRw4xitsIRWqSZELzX2aL4A2KHalfdPtYb2Sc0DzZ6BWr0iGVoRXpVssBn5dz9Jw9Md8uu&lib=MFxE7b7LTcX_mVxoB6UKtBUHBmDLr7rz5";
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
