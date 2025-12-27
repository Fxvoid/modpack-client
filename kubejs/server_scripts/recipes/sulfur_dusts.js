const dustsToReplace = [
    'the_deep_void:sulfur_powder',
    'alexscaves:sulfur_dust'
]
const targetSulfurDust = 'eidolon:sulfur'

LootJS.modifiers(event => {
    dustsToReplace.forEach(dust => event.addLootTableModifier(/.*/).replaceLoot(dust, targetSulfurDust, true))
});

ServerEvents.recipes(event => {
    dustsToReplace.forEach(dust => {
        event.replaceInput(
            { input:  dust},
            dust,
            targetSulfurDust
        )

        event.replaceOutput(
            { output: dust },
            dust,
            targetSulfurDust
        )
    })
})