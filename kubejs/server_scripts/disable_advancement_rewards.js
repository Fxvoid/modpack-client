ServerEvents.highPriorityData(event => {
    
    // EXAMPLE 1: Vampirism (hypothetical path)
    // We override the file at 'data/vampirism/advancements/root.json'
    event.addJson('irons_spellbooks:advancements/grant_patchouli', {
    "criteria": {
        "useitem": {
                "trigger": "minecraft:consume_item",
                "conditions": {
                    "item": {
                        "items": [
                            "irons_spellbooks:patchouli_book"
                        ]
                }
            }
        }
  },
        // WE REMOVED THE "rewards" SECTION HERE
        // The original file would have had: "rewards": { "function": "..." } or "loot": "..."
    })

    event.addJson('simplyswords:advancements/grant_book_on_first_join', {
    "criteria": {
        "useitem": {
                "trigger": "minecraft:consume_item",
                "conditions": {
                    "item": {
                        "items": [
                            "simplyswords:grant_book_on_first_join"
                        ]
                }
            }
        }
  },
        // WE REMOVED THE "rewards" SECTION HERE
        // The original file would have had: "rewards": { "function": "..." } or "loot": "..."
    })

    event.addJson('hexcasting:advancements/grant_patchi_book', {
    "criteria": {
        "useitem": {
                "trigger": "minecraft:consume_item",
                "conditions": {
                    "item": {
                        "items": [
                            "hexcasting:grant_patchi_book"
                        ]
                }
            }
        }
  },
        // WE REMOVED THE "rewards" SECTION HERE
        // The original file would have had: "rewards": { "function": "..." } or "loot": "..."
    })

        event.addJson('hexcasting:advancements/grant_patchi_book', {
    "criteria": {
        "useitem": {
                "trigger": "minecraft:consume_item",
                "conditions": {
                    "item": {
                        "items": [
                            "hexcasting:grant_patchi_book"
                        ]
                }
            }
        }
  },
        // WE REMOVED THE "rewards" SECTION HERE
        // The original file would have had: "rewards": { "function": "..." } or "loot": "..."
    })
    
            event.addJson('terramity:advancements/terramity_parent_advancement', {
      "display": {
    "background": "terramity:textures/screens/reinforced_blackstone_bricks.png",
    "icon": {
      "item": "terramity:terramity_guidebook_icon"
    },
    "title": {
      "translate": "advancements.terramity_parent_advancement.title"
    },
    "description": {
      "translate": "advancements.terramity_parent_advancement.descr"
    },
    "frame": "task",
    "show_toast": true,
    "announce_to_chat": true,
    "hidden": false
  },
  "criteria": {
    "terramity_parent_advancement_0": {
      "trigger": "minecraft:tick"
    }
  },
    })
})