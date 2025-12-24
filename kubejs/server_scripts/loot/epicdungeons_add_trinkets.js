// LootJS.modifiers((event) => {

//     // 1. DEFINE THE TARGET LOOT TABLES (Using Regex)
//     // Matches: overhauledstructures:chests/ovdb_loot_tables/ovdb_chest_1, etc.
//     const epicDungeonsRegex = /overhauledstructures:chests\/.*\/.*_chest_.*/;

//     // 2. HELPER FUNCTION
//     // This grabs all items from a mod, removes Spawn Eggs, and formats them for the loot pool.
//     // Default weight is 10.
//     const getItemsFromMod = (modId, weight) => {
//         return Ingredient.of(`@${modId}`)
//             .getItemIds()
//             .filter(id => !id.includes("spawn_egg") && !id.includes("chunk")) // Filter out garbage
//             .map(id => {
//                 return [id, weight]; // Returns format [ItemID, Weight]
//             });
//     };

//     // 3. BUILD THE LOOT LIST
//     // We combine lists from multiple mods into one big pool.
//     let massiveLootList = [];

//     // Add Relics (Weight 5 - Rarer)
//     massiveLootList = massiveLootList.concat(getItemsFromMod('relics', 1));

//     // Add More Relics (Weight 5) - Assuming modid is 'morerelics' or 'more_relics'
//     // (If this modid is wrong, the script will just skip it safely)
//     massiveLootList = massiveLootList.concat(getItemsFromMod('morerelics', 1)); 
//     console.log(massiveLootList);

//     // 4. INJECT INTO EPIC DUNGEONS
//     event.addLootTableModifier(epicDungeonsRegex)
//          .randomChance(0.025)
//          .addWeightedLoot(
//             massiveLootList.map(item => 
//                  LootEntry.of(item[0]).withWeight(item[1])
//              )
//         )
// });
// TODO: Add it through loot integrations somehow