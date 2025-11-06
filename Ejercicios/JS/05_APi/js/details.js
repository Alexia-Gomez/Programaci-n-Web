import { getBreedDetails } from "./api.js";
import { showDetails } from "./ui.js";

const breedId = new URLSearchParams(window.location.search).get('id');

async function loadDetails() {
    const details = await getBreedDetails(breedId);
    showDetails(details);
}

window.addEventListener('DOMContentLoaded', loadDetails)
