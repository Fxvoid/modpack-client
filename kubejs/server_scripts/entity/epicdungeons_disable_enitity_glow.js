EntityEvents.spawned(event => {
    const { entity } = event;
    
    // Only affect living entities (mobs/players), ignore arrows/items
    if (!entity.isLiving()) return;

    // 1. CHECK FOR APOTHEOSIS BOSS
    // Apotheosis stores boss data in the entity's persistent data (ForgeData)
    // We check if that specific tag exists.
    let nbt = entity.nbt;
    let isBoss = false;

    if (nbt.contains("ForgeData")) {
        let forgeData = nbt.get("ForgeData");
        // Check for specific Apotheosis tags (structure varies slightly by version, checking both common ones)
        if (forgeData.contains("apoth.boss")) {
            console.log("Letting the boss shine!");
            isBoss = true;
        }
    }

    // 2. REMOVE GLOW IF NOT BOSS
    if (!isBoss) {
        // Remove the potion effect (if applied by a mod like InControl)
        if (entity.potionEffects.isActive("minecraft:glowing")) {
            entity.removeEffect("minecraft:glowing");
        }
    }
});