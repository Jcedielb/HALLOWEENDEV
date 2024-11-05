function findTheKiller(whisper, suspects) {
    let lowerWhisper = whisper.toLowerCase();
    let nameMustEnd = false;
  
    if (lowerWhisper.endsWith('$')) {
      nameMustEnd = true;
      lowerWhisper = lowerWhisper.slice(0, -1); 
    }
  
    let whisperLength = lowerWhisper.length;
    let matchingSuspects = [];
  
    for (let suspect of suspects) {
      let lowerSuspect = suspect.toLowerCase();
      let suspectLength = lowerSuspect.length;
  
      if (nameMustEnd && suspectLength !== whisperLength) {
        continue; 
      }
  
      if (suspectLength < whisperLength) {
        continue;
      }
  
      let isMatch = true;
  
      for (let i = 0; i < whisperLength; i++) {
        let whisperChar = lowerWhisper[i];
        let suspectChar = lowerSuspect[i];
  
        if (whisperChar === '~') {
          continue; 
        }
  
        if (whisperChar !== suspectChar) {
          isMatch = false;
  
        }
      }
  
      if (isMatch) {
        matchingSuspects.push(suspect);
      }
    }
  
    if (matchingSuspects.length === 0) {
      return '';
    } else {
      return matchingSuspects.join(',');
    }
  }
  