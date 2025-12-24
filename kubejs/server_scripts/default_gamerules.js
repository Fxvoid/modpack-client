LevelEvents.loaded(event => {
    // Check if the rule is not already 2000 to avoid "Gamerule updated" spam in logs
    if (event.level.dimension === "minecraft:overworld") {
        
        // Force the gamerule
        event.server.runCommandSilent('gamerule spawnRadius 2000')
        event.server.runCommandSilent('gamerule reducedDebugInfo true')
        
        console.info('Set default spawnRadius to 2000')
    }
})