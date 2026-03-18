const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('src', function(filePath) {
    if (!filePath.endsWith('.tsx')) return;
    
    let original = fs.readFileSync(filePath, 'utf8');
    let modified = original;

    // Fix existing small radiuses
    modified = modified.replace(/rounded-md/g, 'rounded-2xl');
    modified = modified.replace(/rounded-sm/g, 'rounded-xl');
    modified = modified.replace(/rounded-none/g, 'rounded-2xl');

    // Add rounded-2xl or 3xl to main cards, panels (avoiding already rounded elements)
    modified = modified.replace(/border-2 border-black p-8(?!\srounded)/g, 'border-2 border-black p-8 rounded-3xl');
    modified = modified.replace(/border-2 border-\[\#6366F1\] p-6(?!\srounded)/g, 'border-2 border-[#6366F1] p-6 rounded-3xl');
    modified = modified.replace(/border-2 border-black\/20 p-6(?!\srounded)/g, 'border-2 border-black/20 p-6 rounded-3xl');
    modified = modified.replace(/border-2 border-black px-6 py-3(?!\srounded)/g, 'border-2 border-black px-6 py-3 rounded-2xl');
    modified = modified.replace(/border-2 border-black p-6(?!\srounded)/g, 'border-2 border-black p-6 rounded-3xl');
    
    // Upload dropzone
    modified = modified.replace(/border-2 border-dashed border-black\/30(?!\srounded)/g, 'border-2 border-dashed border-black/30 rounded-3xl');
    
    // Buttons (pill shaped) - safely replacing
    modified = modified.replace(/bg-black text-white px-8 py-4(?!\srounded)/g, 'bg-black text-white px-8 py-4 rounded-full');
    modified = modified.replace(/bg-\[\#6366F1\] text-white px-8 py-4(?!\srounded)/g, 'bg-[#6366F1] text-white px-8 py-4 rounded-full');
    modified = modified.replace(/bg-black text-white py-4 mt-4(?!\srounded)/g, 'bg-black text-white py-4 mt-4 rounded-2xl'); 
    modified = modified.replace(/px-10 py-5 text-\[11px\](?!\srounded)/g, 'px-10 py-5 text-[11px] rounded-full');
    modified = modified.replace(/px-4 py-2 text-\[10px\](?!\srounded)/g, 'px-4 py-2 text-[10px] rounded-full'); 
    modified = modified.replace(/px-6 py-2 text-\[10px\](?!\srounded)/g, 'px-6 py-2 text-[10px] rounded-full'); 

    // Prevent double rounding classes just in case
    modified = modified.replace(/rounded-2xl rounded-2xl/g, 'rounded-2xl');
    modified = modified.replace(/rounded-3xl rounded-3xl/g, 'rounded-3xl');
    modified = modified.replace(/rounded-full rounded-full/g, 'rounded-full');

    if (original !== modified) {
        fs.writeFileSync(filePath, modified);
        console.log('Added rounding to: ' + filePath);
    }
});
