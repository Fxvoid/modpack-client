ServerEvents.recipes(event => {
    // Remove all recipes for now
    event.remove({ mod: 'nameless_trinkets' })
})