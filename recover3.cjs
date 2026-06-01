const fs = require('fs');
const path = require('path');

function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, {recursive: true});
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursive(path.join(src, childItemName),
                    path.join(dest, childItemName));
    });
  } else if (exists) {
    fs.copyFileSync(src, dest);
  }
}

copyRecursive('dist/portfolio/Facebook_and_Instagram_Ads', 'public/Digital Marketing All Portfolio/Facebook and Instagram Ads');
copyRecursive('dist/portfolio/amazon_book_promotin', 'public/Digital Marketing All Portfolio/Amazon Book Promotin');
copyRecursive('dist/portfolio/chatbot_create', 'public/Digital Marketing All Portfolio/Chatbot Create');
console.log('Restored to Digital Marketing All Portfolio');
