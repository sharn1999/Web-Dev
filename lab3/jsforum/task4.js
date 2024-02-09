function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  alert( checkSpam('b ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("hello olzhas") );