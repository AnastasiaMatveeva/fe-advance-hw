  const a = 'qwertyuiop[]';
  const b = 'asdfghjkl';
  const c = 'zxcvbnm';

  console.log(a.length);
  console.log(b.length);
  console.log(c.length);

  const d = 12;
  const e = 9;
  const f = 7;

  console.log(a.charAt(0));
  console.log(a.charAt(11));
  console.log(b.charAt(0));
  console.log(b.charAt(8));
  console.log(c.charAt(0));
  console.log(a.charAt(6));

  let g = (a.indexOf('['));
  console.log(g);

  let h = (a.indexOf(']'));
  console.log(h);

  const result = `a + b + c + d + e + f + '12' + '9' + '7'` +
                `'q' + ']' + 'a' + 'l' + 'z' + 'u' + '10' + '11'`;
  console.log(result);
