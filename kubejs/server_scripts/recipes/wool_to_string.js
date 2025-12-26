ServerEvents.recipes(event => {

    // Define all the tags you want to accept
    const knifeTags = [
        '#butchery:knives',
        '#farmersdelight:tools/knives', 
        '#forge:tools/knives'
    ]

    // Create a unique recipe for EACH tag individually
    // This avoids the "JsonArray" error completely
    knifeTags.forEach(tag => {
        
        event.shapeless('4x minecraft:string', [
            '#minecraft:wool', 
            tag
        ])
        .damageIngredient(tag)
        // Give each one a unique ID based on the tag name so they don't overwrite each other
        .id(`kubejs:wool_string_from_${tag.replace(/[:/#]/g, '_')}`) 
    })
})