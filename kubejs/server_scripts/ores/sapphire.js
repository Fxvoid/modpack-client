const targetCrystal = 'iceandfire:sapphire_gem'
const targetSapphireBlock = 'iceandfire:sapphire_block'

LootJS.modifiers(event => {
    event.addLootTableModifier(/.*/)
        .replaceLoot('terramity:sapphire', targetCrystal, true)
        .replaceLoot('terramity:sapphire_block', targetSapphireBlock, true)
});

ServerEvents.recipes(event => {
    event.remove({ output: 'terramity:sapphire' })
    event.remove({ output: 'terramity:sapphire_block' })
})