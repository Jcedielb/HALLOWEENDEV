function battleHorde(zombies, humans) {
    let zombiePowers = zombies.split('').map(Number);
    let humanPowers = humans.split('').map(Number);
    let lastWinner = null;
    let lastSurplus = 0;
  
    for (let i = 0; i < zombiePowers.length; i++) {
      let zp = zombiePowers[i];
      let hp = humanPowers[i];
  
      if (zp > hp) {
        // Zombies ganan
        let surplus = zp - hp;
        lastWinner = 'z';
        lastSurplus = surplus;
        humanPowers[i] = 0; 
        if (i + 1 < zombiePowers.length) {
          zombiePowers[i + 1] += surplus;
        }
      } else if (hp > zp) {
        // Humanos ganan
        let surplus = hp - zp;
        lastWinner = 'h';
        lastSurplus = surplus;
        zombiePowers[i] = 0; 
        if (i + 1 < humanPowers.length) {
          humanPowers[i + 1] += surplus; 
        }
      } else {
        zombiePowers[i] = 0;
        humanPowers[i] = 0;
        lastWinner = null;
        lastSurplus = 0;
      }
    }
  
    if (lastWinner === null) {
      return 'x';
    } else {
      return lastSurplus + lastWinner;
    }
  }
  
  