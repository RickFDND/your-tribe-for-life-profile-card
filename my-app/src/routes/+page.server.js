export async function load({ url, params }) {
    const memberResponse = await fetch ('https://fdnd.directus.app/items/person/182');

    const memberData = await memberResponse.json();

    return {member: memberData.data}

}