LootJS.modifiers(event => {
    const allTarotCards = [
        "tarotcards:the_fool",
        "tarotcards:the_magician",
        "tarotcards:the_high_priestess",
        "tarotcards:the_empress",
        "tarotcards:the_emperor",
        "tarotcards:the_hierophant",
        "tarotcards:the_lovers",
        "tarotcards:the_chariot",
        "tarotcards:strength",
        "tarotcards:the_hermit",
        "tarotcards:wheel_of_fortune",
        "tarotcards:justice",
        "tarotcards:the_hanged_man",
        "tarotcards:death",
        "tarotcards:temperance",
        "tarotcards:the_devil",
        "tarotcards:the_tower",
        "tarotcards:the_star",
        "tarotcards:the_moon",
        "tarotcards:the_sun",
        "tarotcards:judgement",
        "tarotcards:the_world"
    ];

    event
        .addLootTableModifier(/dimdoors:.*chest/)
        .randomChance(0.15)
        .addWeightedLoot(
            allTarotCards.map(cardId => 
                 // FIX 2: Change .weight() to .withWeight()
                 LootEntry.of(cardId).withWeight(1)
             )
        )
})