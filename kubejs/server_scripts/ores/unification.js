LootJS.modifiers(event => {
 const targetSilver = 'iceandfire:raw_silver'

 event.addBlockLootModifier('#forge:ores/silver')
      .replaceLoot('#forge:raw_materials/silver', targetSilver)
      .replaceLoot('#forge:ores/silver', targetSilver);
});