<script>
    let { data } = $props();

    const members = data.members;

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

{#each members as member}
  <a href="/{member.id}">
    <h2>{member.name}</h2>
    <img src="{member.avatar}" alt="{member.name}" width="100"/>
  </a>
{/each}