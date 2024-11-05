function createMagicPotion(potions, target) {
    for (let j = 1; j < potions.length; j++) {
        for (let i = 0; i < j; i++) {
            if (potions[i] + potions[j] === target) {
                return [i, j];
            }
        }
    }
    return undefined;
}
