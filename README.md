## Character tattoo system for alt:V Multiplayer
Convereted my old Rage:MP script for Alt:V<br/>
All tattoo overlays (to add your own to the tattooList): https://github.com/root-cause/v-tattoos

### Usage (debug):
F8 (alt:V debug console):
 - addTattoo `index`: Adds a tattoo from list, returns true if removed, false if player already has that tattoo.
 - removeTattoo `index`: Removes a tattoo from list, returns true if removed, false if player does not have that tattoo.

### Usage (scripts):
```js
import * as tattooSystem from "./index.js" // You can change the file name and import it into your project

alt.onClient("yourEvent", (player) => {
    tattooSystem.addTattoo(player, 0); // 0 is the index of the tattoo in the tattooList
});
```
