import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let gamesAppIdCache = null;

function loadGamesAppIdData() {
  if (gamesAppIdCache) return gamesAppIdCache;
  
  const gamesAppIdPath = path.join(__dirname, '../games_appid.json');
  try {
    const data = fs.readFileSync(gamesAppIdPath, 'utf-8');
    gamesAppIdCache = JSON.parse(data);
    return gamesAppIdCache;
  } catch (err) {
    console.error('Error reading games_appid.json:', err.message);
    return [];
  }
}

function findGameNameByAppId(app_id) {
  const gamesAppIdData = loadGamesAppIdData();
  const game = gamesAppIdData.find(g => String(g.appid) === String(app_id));
  return game ? game.name : null;
}

async function main() {
  // Read steam_games.json
  const steamGamesPath = path.join(__dirname, '../src/steam_games.json');
  
  let games = [];
  try {
    const data = fs.readFileSync(steamGamesPath, 'utf-8');
    games = JSON.parse(data);
  } catch (err) {
    console.error('Error reading steam_games.json:', err.message);
    process.exit(1);
  }

  // Find games with name === null
  const missingNames = games
    .map((game, index) => ({ ...game, index }))
    .filter(game => game.name === null);

  if (missingNames.length === 0) {
    console.log('✓ All games have names!');
    return;
  }

  console.log(`Found ${missingNames.length} games with missing names. Starting lookup...\n`);

  let successCount = 0;

  // Process each game
  for (let i = 0; i < missingNames.length; i++) {
    const game = missingNames[i];
    console.log(`[${i + 1}/${missingNames.length}] Looking up name for app ${game.app_id}...`);
    
    const name = findGameNameByAppId(game.app_id);
    
    if (name) {
      // Read, parse, update, and write immediately
      try {
        const currentData = fs.readFileSync(steamGamesPath, 'utf-8');
        const currentGames = JSON.parse(currentData);
        
        // Find and update the game by app_id
        const gameIndex = currentGames.findIndex(g => g.app_id === game.app_id);
        if (gameIndex !== -1) {
          currentGames[gameIndex].name = name;
          fs.writeFileSync(steamGamesPath, JSON.stringify(currentGames, null, 2), 'utf-8');
          console.log(`  ✓ Updated: ${name}`);
          successCount++;
        }
      } catch (err) {
        console.error(`  ✗ Error updating file for app ${game.app_id}:`, err.message);
      }
    } else {
      console.log(`  ✗ Name not found in games_appid.json`);
    }
  }

  console.log(`\n✓ Successfully updated steam_games.json with ${successCount} game names!`);
}

main();
