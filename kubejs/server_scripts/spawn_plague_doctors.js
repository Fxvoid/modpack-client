// const Registries = Java.loadClass('net.minecraft.core.registries.Registries')
// function structureAtPos(level, pos, structure_id) {
//     const structureManager = level.structureManager();
//     const all = structureManager.getAllStructuresAt(pos);
//     const registry = structureManager.registryAccess().registryOrThrow(Registries.STRUCTURE);

//     for (let structure of all.keySet()) {
//         const resourceLoc = registry.getKey(structure)

//         console.log(resourceLoc.toString(), resourceLoc.toString() === structure_id)
//         if (resourceLoc.toString() === structure_id) {
            
//             return true;
//         }
//     }

//     return false;
// }

// EntityEvents.spawned('vampirism:hunter', event => {
//     const entity = event.entity
//     const level = entity.level

//     // 1. Safety Checks
//     if (level.clientSide) return

//     // 2. Persistent Data Check
//     const chunkX = entity.x >> 4
//     const chunkZ = entity.z >> 4
//     const chunkKey = `${chunkX},${chunkZ}`

//     if (level.persistentData.processed_camps && level.persistentData.processed_camps[chunkKey]) {
//         return
//     }
    
//     const structureId = 'vampirism:hunter_camp'

//     // 5. Run the Check
//     // Now we pass the real Structure Object into the manager
//     if (structureAtPos(level, entity.blockPosition(), structureId)) {
        
//         console.log("Should spawn the doctor right about now");
//         // 6. Spawn Logic
//         const doctor = level.createEntity('rats:plague_doctor')
//         if (doctor) {
//             doctor.setPosition(entity.x, entity.y, entity.z)
//             doctor.spawn()
            
//             // 7. Save to memory
//             if (!level.persistentData.processed_camps) {
//                 level.persistentData.processed_camps = {}
//             }
//             level.persistentData.processed_camps[chunkKey] = true
            
//             console.info(`[KubeJS] Success! Doctor spawned at ${chunkKey}`)
//         }
//     }
// })