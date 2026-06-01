const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      results.push(file);
    }
  });
  return results;
}

const allFiles = walk('./public/portfolio');
let renameCount = 0;

const mappings = []; // To store {oldPath, newPath} relative to public directory

for (const p of allFiles) {
  const dir = path.dirname(p);
  const ext = path.extname(p);
  const base = path.basename(p, ext);
  
  // Create a clean safe name
  let safeBase = base
    .toLowerCase()
    .replace(/[^a-z0-9_.-]/g, '_')
    .replace(/_+/g, '_');
  
  if (safeBase !== base) {
    const newPath = path.join(dir, safeBase + ext.toLowerCase());
    if (p !== newPath) {
      if (!fs.existsSync(newPath)) {
        fs.renameSync(p, newPath);
        
        let oldRel = p.replace('public', '').replace(/\\/g, '/'); // like /portfolio/...
        let newRel = newPath.replace('public', '').replace(/\\/g, '/');
        
        mappings.push({ oldRel, newRel });
        renameCount++;
      }
    }
  }
}

// Now process directory renames
function walkDirs(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) { 
      results.push(fullPath);
      results = results.concat(walkDirs(fullPath));
    }
  });
  return results;
}

let dirs = walkDirs('./public/portfolio');
// Sort by length descending, so deepest directories are renamed first
dirs.sort((a, b) => b.length - a.length);

for (const p of dirs) {
  const parent = path.dirname(p);
  const base = path.basename(p);
  
  let safeBase = base
    .toLowerCase()
    .replace(/[^a-z0-9_.-]/g, '_')
    .replace(/_+/g, '_');
  
  if (safeBase !== base) {
    const newPath = path.join(parent, safeBase);
    if (p !== newPath) {
      if (!fs.existsSync(newPath)) {
        fs.renameSync(p, newPath);
        
        let oldRel = p.replace('public', '').replace(/\\/g, '/');
        let newRel = newPath.replace('public', '').replace(/\\/g, '/');
        
        mappings.push({ oldRel, newRel });
        renameCount++;
      }
    }
  }
}

// Apply mappings to .tsx files
const tsxFiles = ['./src/pages/ProofPage.tsx', './src/components/Results.tsx'];
for (const f of tsxFiles) {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    // Sort mappings by longest oldRel first so we don't do partial replacements
    mappings.sort((a, b) => b.oldRel.length - a.oldRel.length);
    for (const m of mappings) {
      // replace all instances of oldRel with newRel safely
      // also replace case variants if possible? 
      // But standard replace using string replacement is fine.
      content = content.split(m.oldRel).join(m.newRel);
    }
    
    // As a backup, lowercase everything inside /portfolio/ paths
    content = content.replace(/(['"]\/portfolio\/)([^'"]+)(['"])/gi, (match, prefix, p1, suffix) => {
        let safeP1 = p1.toLowerCase().replace(/[^a-z0-9_/.-]/g, '_').replace(/_+/g, '_');
        return prefix + safeP1 + suffix;
    });

    fs.writeFileSync(f, content);
  }
}

console.log('Renames completed: ' + renameCount);
