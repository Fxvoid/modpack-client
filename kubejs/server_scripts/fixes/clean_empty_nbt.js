PlayerEvents.inventoryChanged(event => {
    const item = event.item
if (item.nbt != null && item.nbt.toString() == '{}') {
        item.nbt = null
}
})

EntityEvents.spawned('item', event => {
    const itemStack = event.entity.item
    if (itemStack.nbt != null && itemStack.nbt.toString() == '{}') {
        itemStack.nbt = null
    }
})

ItemEvents.pickedUp(event => {
    if (event.item.nbt != null && event.item.nbt.toString() == '{}') {
        event.item.nbt = null
    }
})