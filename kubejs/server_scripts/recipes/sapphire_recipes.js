ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'terramity:sapphire' },
        'terramity:sapphire',
        'iceandfire:sapphire_gem'
    )

    event.replaceInput(
        { input: 'terramity:sapphire_block' },
        'terramity:sapphire_block',
        'iceandfire:sapphire_block'
    )
})