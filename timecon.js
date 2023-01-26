function toTimeString(totalSeconds) {
    const totalMs = totalSeconds * 1000;
    const result = new Date(totalMs).toISOString().slice(11, 19);
  
    return result;
  }
  
  console.log(toTimeString(5025))
  console.log(toTimeString(61201))
  console.log(toTimeString(87000)) 