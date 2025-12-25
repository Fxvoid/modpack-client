ServerEvents.recipes(event => {

    // 1. DEFINE THE COMBINED INGREDIENT
    // This tells KubeJS: "I accept ANY item that is in the Butchery tag OR the FD tag OR the Forge tag."
    // Add as many tags as you need inside the [ ].
    const knifeTool = Ingredient.of([
        '#butchery:knives', 
        '#farmersdelight:tools/knives',
        '#forge:tools/knives' 
    ])

    // 2. THE RECIPE
    event.shapeless('4x minecraft:string', [
        '#minecraft:wool',
        knifeTool
    ])
    // 3. DAMAGE LOGIC
    // We pass the SAME combined ingredient to .damageIngredient()
    // This ensures that no matter WHICH specific tag matched, the item will be kept and damaged.
    .damageIngredient(knifeTool)
    .id('kubejs:wool_to_string_universal') // Custom ID overrides vanilla checks
})