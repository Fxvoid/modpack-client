// CONFIGURATION
const TARGET_BLOCK = 'vinery:fermentation_barrel'
const BANNED_ITEM = 'minecraft:blaze_rod'
const BANNED_AMOUNT = 64

/**
 * 1. MARK SAFERY ON PLACE
 * When a player places the block, we tag it immediately. 
 * This ensures legitimate crafting is never flagged as a glitch.
 */
BlockEvents.placed(TARGET_BLOCK, event => {
    let blockEntity = event.block.entity
    if (blockEntity) {
        blockEntity.persistentData.putBoolean('is_safe', true)
    }
})

/**
 * 2. INSPECT ON OPEN (Right Click)
 * If a player opens a generated barrel, we scan it. 
 * If it has the glitch, we clear it. Then we mark it safe.
 */
BlockEvents.rightClicked(TARGET_BLOCK, event => {
    handleVineryExploit(event.block, event.player, true)
})

/**
 * 3. INSPECT ON BREAK
 * If a player tries to break a generated barrel to drop the loot, 
 * we scan it first and delete the glitch items before they hit the ground.
 */
BlockEvents.broken(TARGET_BLOCK, event => {
    // We pass 'false' for notification because telling a player 
    // about a deleted item as the block breaks can be spammy.
    handleVineryExploit(event.block, event.player, false)
})

/**
 * SHARED LOGIC FUNCTION
 */
function handleVineryExploit(block, player, notifyPlayer) {
    let blockEntity = block.entity
    if (!blockEntity) return

    // CHECK 1: Is this already marked safe?
    // If 'is_safe' is true, a player placed it (or checked it previously).
    // STOP. Do not touch their items.
    if (blockEntity.persistentData.getBoolean('is_safe')) return

    // CHECK 2: Does it contain the glitch?
    // Generated Vinery houses have EXACTLY 64 Blaze Rods in a specific slot pattern.
    let inv = block.inventory
    let cleaned = false

    if (inv) {
        for (let i = 0; i < inv.slots; i++) {
            let item = inv.getStackInSlot(i)

            player.tell(Text.red(item))
            // We only delete if it is the EXACT stack size (64). 
            // It is extremely unlikely a generated structure spawned with "randomly" 3 blaze rods.
            // The glitch is always a full stack because of Creative Mode saving.
            if (item.id === BANNED_ITEM && item.count === BANNED_AMOUNT) {
                
                // Nuke the item
                inv.setStackInSlot(i, 'minecraft:air')
                cleaned = true
            }
        }
    }

    // CHECK 3: Finalize
    if (cleaned && notifyPlayer && player) {
        player.tell(Text.gold("⚡ Blaze rods crumble to ashes right before your eyes. Devastating misfortune!"))
    }

    // Mark as safe so we don't scan this specific block again
    // (In case of Break event, this doesn't matter much as block is gone, 
    // but useful for the RightClick event).
    blockEntity.persistentData.putBoolean('is_safe', true)
}