import fs from 'fs';

// Read the steam_games.json file
const data = JSON.parse(fs.readFileSync('./src/steam_games.json', 'utf-8'));

// Process each object to add app_id
const updated = data.map(item => {
  // Extract app_id from image URL
  const match = item.image?.match(/\/apps\/(\d+)\//);
  const appId = match ? match[1] : null;
  
  return {
    ...item,
    app_id: appId
  };
});

// Write back to file
fs.writeFileSync('./src/steam_games.json', JSON.stringify(updated, null, 2), 'utf-8');

console.log(`Successfully added app_id to ${updated.length} items`);
