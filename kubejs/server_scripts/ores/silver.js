const targetNugget = 'iceandfire:silver_nugget'
const targetRaw = 'iceandfire:raw_silver'
const targetIngot = 'iceandfire:silver_ingot'
const targetBlock = 'iceandfire:silver_block'
const targetRawBlock = 'iceandfire:raw_silver_block'

LootJS.modifiers(event => {
    event.addLootTableModifier(/.*/)
        .replaceLoot('#forge:raw_materials/silver', targetRaw, true)
        .replaceLoot('#forge:ingots/silver', targetIngot, true)
        .replaceLoot('#forge:storage_blocks/raw_silver', targetRawBlock, true)
        .replaceLoot('#forge:storage_blocks/silver', targetBlock, true)
        .replaceLoot('#forge:nuggets/silver', targetNugget, true)
});

ServerEvents.recipes(event => {
    event.remove({ 
        output: '#forge:raw_materials/silver', 
        not: { output: targetRaw } 
    })

    event.remove({ 
        output: '#forge:ingots/silver', 
        not: { output: targetIngot } 
    })

    event.remove({ 
        output: '#forge:storage_blocks/raw_silver', 
        not: { output: targetRawBlock } 
    })

    event.remove({ 
        output: '#forge:storage_blocks/silver', 
        not: { output: targetBlock } 
    })

    event.remove({ 
        output: '#forge:nuggets/silver', 
        not: { output: targetNugget } 
    })
})