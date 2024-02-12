import alt from "alt-server";
import tattooList from "./tattooList.js"

alt.on("playerConnect", (player) => {
    player.tattoos = [];
});

// Parse number just in case
alt.onClient("addTattoo", (player, index) => {
    alt.log(123);
    addTattoo(player, Number(index));
});

alt.onClient("removeTattoo", (player, index) => {
    alt.log(123);
    removeTattoo(player, Number(index));
});

const updateTattoos = (player) => {
    if (!player.tattoos)
        player.tattoos = [];

    player.clearDecorations();

    const gender = player.model == alt.hash("mp_m_freemode_01");

    player.tattoos.forEach((tattooIndex) => {
        const tattooData = tattooList[tattooIndex];
        player.addDecoration(tattooData.collection, gender ? tattooData.overlayMale : tattooData.overlayFemale);
    });
};

const addTattoo = (player, index) => {
    if (!player.tattoos)
        player.tattoos = [];

    if (player.tattoos.indexOf(index) >= 0)
        return false; // Player already has that tattoo

    player.tattoos.push(index);

    updateTattoos(player);

    return true;
};

const removeTattoo = (player, index) => {
    if (!player.tattoos)
        player.tattoos = [];

    const arrayIndex = player.tattoos.indexOf(index);

    if (arrayIndex < 0)
        return false; // Player does not have that tattoo

    player.tattoos.splice(arrayIndex, 1);

    updateTattoos(player);

    return true;
};

export default { updateTattoos, addTattoo, removeTattoo };