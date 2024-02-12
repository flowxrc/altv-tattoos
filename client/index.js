import alt from "alt-client";

alt.on("consoleCommand", (name, ...args) => {
    switch (name) {
        case "addTattoo": alt.emitServer("addTattoo", ...args); break;
        case "removeTattoo": alt.emitServer("removeTattoo", ...args); break;
    }
});