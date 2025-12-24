LootJS.modifiers((event) => {

    /* =======================================================================
       CONFIGURATION SECTION
       Edit your chests, items, and weights here.
       ======================================================================= */

    const LOOT_CONFIG = {
        // --- EASY CHESTS (Mineshafts, Simple Dungeons) ---
        // "easy": {
        //     // Chance that the chest contains ANY item from this list (0.0 to 1.0)
        //     poolChance: 0.01, // 30%
            
        //     // List of Loot Table IDs (Regex allowed)
        //     tables: [
        //         "minecraft:chests/simple_dungeon",
        //         "minecraft:chests/abandoned_mineshaft",
        //         "minecraft:chests/ruined_portal",
        //         "minecraft:chests/underwater_ruin_small",
        //         "minecraft:chests/spawn_bonus_chest",
        //         "apotheosis:chests/tome_tower",
        //         "vampirism:chests/hunter_outpost_tower_special"
        //     ],

        //     // The Items: { item: "mod:item_id", weight: 10 }
        //     // Weight 10 is common, Weight 1 is rare.
        //     items: [
        //         { item: "nameless_trinkets:lucky_rock", weight: 20 },
        //         { item: "nameless_trinkets:wooden_stick", weight: 20 },
        //         { item: "relics:horse_flute", weight: 10 },
        //         { item: "relics:wool_mitten", weight: 10 },
        //     ]
        // },

        // --- MEDIUM CHESTS (Temples, Outposts, Buried Treasure) ---
        "medium": {
            poolChance: 0.01, // 25%
            tables: [
                "minecraft:chests/stronghold_corridor",
                "minecraft:chests/stronghold_crossing",
                "minecraft:chests/stronghold_library",
                "minecraft:chests/desert_pyramid",
                "minecraft:chests/jungle_temple",
                "minecraft:chests/pillager_outpost",
                "minecraft:chests/buried_treasure",
                "minecraft:chests/igloo_chest",
                "minecraft:chests/underwater_ruin_big",
                /^repurposed_structures:chests\/temple.*/,
                /^repurposed_structures:chests\/pyramid.*/,
                /overhauledstructures:chests\/.*\/.*_chest_.*/,
                "iceandfire:chest/mausoleum_chest"
            ],
            items: [
                { item: "nameless_trinkets:experience_battery", weight: 4},
                { item: "nameless_trinkets:lucky_rock", weight: 4 },
                { item: "nameless_trinkets:sleeping_pill", weight: 5 },
                { item: "nameless_trinkets:spider_legs", weight: 4 },
                { item: "nameless_trinkets:fractured_nullstone", weight: 4 },
                { item: "nameless_trinkets:fragile_cloud", weight: 4 },
                { item: "nameless_trinkets:light_gloves", weight: 4 },
                { item: "relics:spatial_sign", weight: 6 },
                { item: "relics:space_dissector", weight: 5 },
                { item: "relics:spore_sack", weight: 2 },
                { item: "relics:shadow_glaive", weight: 4 },
                { item: "relics:roller_skates", weight: 2 },
                { item: "morerelics:opal_necklace", weight: 2 },
            ]
        },

        // --- HARD CHESTS (Stronghold, End City, Ancient City, Mansion) ---
        // "hard": {
        //     poolChance: 1, // 40% (Reward usage for hard structures)
        //     tables: [
        //         "minecraft:chests/woodland_mansion",
        //         "minecraft:chests/ancient_city",
        //         "minecraft:chests/ancient_city_ice_box",
        //         "minecraft:chests/end_city_treasure",
        //         /^repurposed_structures:chests\/stronghold.*/,
        //         /^repurposed_structures:chests\/city.*/
        //     ],
        //     items: [
        //         { item: "nameless_trinkets:dragons_eye", weight: 2 },  // Rare!
        //         { item: "nameless_trinkets:gods_crown", weight: 1 },   // Legendary!
        //         { item: "relics:magic_mirror", weight: 5 },
        //         { item: "relics:space_dissector", weight: 3 },
        //         { item: "relics:elytra_booster", weight: 5 }
        //     ]
        // },

        // --- VILLAGE CHESTS ---
        "village": {
            poolChance: 0.03, // 10% (Low chance because villages are common)
            tables: [
                /^minecraft:chests\/village\/.*/,
                "minecraft:chests/village/village_weaponsmith"
            ],
            items: [
                { item: "nameless_trinkets:experience_magnet", weight: 8 },
                { item: "nameless_trinkets:broken_magnet", weight: 8 },
                { item: "nameless_trinkets:what_magnet", weight: 8 },
                { item: "nameless_trinkets:callus", weight: 8 },
                { item: "nameless_trinkets:creeper_sense", weight: 6},
                { item: "nameless_trinkets:explosion_proof_jacket", weight: 6},
                { item: "nameless_trinkets:pocket_lightning_rod", weight: 6},
                { item: "nameless_trinkets:wooden_stick", weight: 4},
                { item: "nameless_trinkets:electric_paddle", weight: 4},
                { item: "nameless_trinkets:fertilizer", weight: 1},
                { item: "nameless_trinkets:fate_emerald", weight: 1},
                { item: "relics:leather_belt", weight: 8 },
                { item: "relics:horse_flute", weight: 8 },
                { item: "relics:hunter_belt", weight: 4 },
                { item: "relics:quiver", weight: 4 },
                { item: "morerelics:eject_button", weight: 4 },
                { item: "morerelics:axolotl_cream", weight: 2 },
                { item: "relics:holy_locket", weight: 1 }
            ]
        },

        // --- ICY CHESTS ---
        // "icy": {
        //     poolChance: 0.05, // 10% (Low chance because villages are common)
        //     tables: [
        //         "minecraft:chests/village/village_snowy_house",
        //     ],
        //     items: [
        //         { item: "nameless_trinkets:experience_magnet", weight: 8 },
        //         { item: "nameless_trinkets:broken_magnet", weight: 8 },
        //         { item: "nameless_trinkets:what_magnet", weight: 8 },
        //         { item: "nameless_trinkets:callus", weight: 8 },
        //         { item: "nameless_trinkets:creeper_sense", weight: 6},
        //         { item: "nameless_trinkets:explosion_proof_jacket", weight: 6},
        //         { item: "nameless_trinkets:pocket_lightning_rod", weight: 6},
        //         { item: "nameless_trinkets:wooden_stick", weight: 4},
        //         { item: "nameless_trinkets:electric_paddle", weight: 4},
        //         { item: "nameless_trinkets:fertilizer", weight: 1},
        //         { item: "nameless_trinkets:fate_emerald", weight: 1},
        //         { item: "relics:leather_belt", weight: 8 },
        //         { item: "relics:horse_flute", weight: 8 },
        //         { item: "relics:hunter_belt", weight: 4 },
        //         { item: "relics:quiver", weight: 4 },
        //         { item: "morerelics:eject_button", weight: 4 },
        //         { item: "morerelics:axolotl_cream", weight: 2 },
        //         { item: "relics:holy_locket", weight: 1 }
        //     ]
        // },


        // --- NETHER CHESTS (Fortress, Bastion) ---
        // "nether": {
        //     poolChance: 1,
        //     tables: [
        //         "minecraft:chests/nether_bridge", // Fortress
        //         "minecraft:chests/bastion_treasure",
        //         "minecraft:chests/bastion_hoglin_stable",
        //         "minecraft:chests/bastion_bridge",
        //         "minecraft:chests/bastion_other",
        //         /^repurposed_structures:chests\/fortress.*/,
        //         /^repurposed_structures:chests\/bastion.*/
        //     ],
        //     items: [
        //         { item: "nameless_trinkets:blaze_nucleus", weight: 8 },
        //         { item: "relics:magma_walker", weight: 10 },
        //         { item: "relics:blazing_flask", weight: 8 }
        //     ]
        // },

        // --- CUSTOM/EMPTY CATEGORY (Use this for whatever else) ---
        "empty": {
            poolChance: 0.0, // Set to > 0 to enable
            tables: [
                // "minecraft:chests/igloo_chest" 
            ],
            items: [
                // { item: "minecraft:apple", weight: 1 }
            ]
        }
    }


    /* =======================================================================
       LOGIC SECTION (Do not touch unless you know what you are doing)
       ======================================================================= */

    // Iterate through every category defined above
    Object.keys(LOOT_CONFIG).forEach(key => {
        let category = LOOT_CONFIG[key]
        
        // Skip empty categories
        if (category.items.length === 0 || category.tables.length === 0) return;

        // Create the Loot Modifier
        category.tables.forEach(table => 
            event.addLootTableModifier(table)
            .randomChance(category.poolChance)
                .addWeightedLoot(
                    category.items.map(entry => 
                        LootEntry.of(entry.item).withWeight(entry.weight)
                    ))
            )
        
    })

})