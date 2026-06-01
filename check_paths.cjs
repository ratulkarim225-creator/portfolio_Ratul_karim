const fs = require('fs');
const content = fs.readFileSync('./src/pages/ProofPage.tsx', 'utf8');
const urls = [];
const regex = /url(?:'|")?\s*:\s*['"]([^'"]+)['"]/g;
let match;
while ((match = regex.exec(content)) !== null) {
  urls.push(match[1]);
}
const imageRegex = /image['"]?\s*:\s*['"]([^'"]+)['"]/g;
while ((match = imageRegex.exec(content)) !== null) {
  urls.push(match[1]);
}

let missing = 0;
urls.forEach(u => {
  let p = '.' + (u.startsWith('/') ? '/public' + u : '/public/' + u);
  p = p.replace('/public/public', '/public');
  if(!fs.existsSync(p)){
    console.log('Missing:', p);
    missing++;
  }
});
console.log('Total URLs checked:', urls.length);
console.log('Total missing: ' + missing);
