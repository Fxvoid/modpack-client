const nothing = 'minecraft:air'
const removalList = [
    'werewolves:silver_helmet',
    'werewolves:silver_chestplate',
    'werewolves:silver_leggings',
    'werewolves:silver_boots',
    'werewolves:silver_sword',
    'werewolves:silver_pickaxe',
    'werewolves:silver_axe',
    'werewolves:silver_shovel',
    'werewolves:silver_hoe',
    'eidolon:silver_helmet',
    'eidolon:silver_chestplate',
    'eidolon:silver_leggings',
    'eidolon:silver_boots',
    'eidolon:silver_sword',
    'eidolon:silver_pickaxe',
    'eidolon:silver_axe',
    'eidolon:silver_shovel',
    'eidolon:silver_hoe'
]
const iafArmors = [
    'iceandfire:armor_silver_metal_helmet',
    'iceandfire:armor_silver_metal_chestplate',
    'iceandfire:armor_silver_metal_leggings',
    'iceandfire:armor_silver_metal_boots'
]
const iafTools = [
    'iceandfire:silver_sword',
    'iceandfire:silver_pickaxe',
    'iceandfire:silver_axe',
    'iceandfire:silver_shovel',
    'iceandfire:silver_hoe'
]

LootJS.modifiers(event => {
    removalList.forEach(item => event.addLootTableModifier(/.*/).replaceLoot(item, nothing, false))
});

ServerEvents.recipes(event => {
    removalList.forEach(item => event.remove({ output: item }))
})

ServerEvents.tags('item', event => {
    iafArmors.forEach(item => {
        event.add('werewolves:type/silver', item)
        event.add('werewolves:armor/silver', item)
    })
    iafTools.forEach(item => {
        event.add('werewolves:type/silver', item)
        event.add('werewolves:tools/silver', item)
    })
})