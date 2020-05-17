function rot13(str) { // LBH QVQ VG!
    const input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const output    = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
    const index       = x => input.indexOf(x);
    const translate   = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
  }
  
  
  rot13("SERR PBQR PNZC");