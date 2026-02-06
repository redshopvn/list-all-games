
import fs from 'fs';

function extractAppId(url) {
  // Only match URLs with /assets/{app_id}/
  const m = url.match(/\/assets\/(\d+)\//);
  return m ? m[1] : null;
}

async function fetchGameName(appId) {
  const apiUrl = `https://store.steampowered.com/api/appdetails?appids=${appId}`;
  try {
    const res = await fetch(apiUrl, { method: 'GET', headers: { 'User-Agent': 'node-fetch' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data && data[appId] && data[appId].data && data[appId].data.name) {
      return data[appId].data.name;
    }
    return null;
  } catch (err) {
    return null;
  }
}

async function main() {
  // Read all lines from ListOfAllgameURL.txt
  const filePath = './ListOfAllgameURL.txt';
  let lines = [];
  try {
    lines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
  } catch (err) {
    // Try parent directory if not found in current
    try {
      lines = fs.readFileSync('../ListOfAllgameURL.txt', 'utf-8').split(/\r?\n/);
    } catch (err2) {
      console.error('Could not find ListOfAllgameURL.txt in script or parent directory.');
      process.exit(1);
    }
  }
  // Extract valid app IDs
  const appIds = Array.from(new Set(lines
    .map(line => extractAppId(line))
    .filter(Boolean)
  ));

  const results = [];
  for (const appId of appIds) {
    console.log(`Fetching ${appId} ...`);
    const name = await fetchGameName(appId);
    console.log(`Result App ID: ${appId}, Name: ${name || 'N/A'}`);
    if (name && name.toLowerCase().includes('demo')) {
      console.log(`Skipping demo game ${appId}.`);
      continue;
    }
    results.push({
      name: name || null,
      image: appId ? `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${appId}/library_600x900.jpg` : null,
      tags: "new_20260104"
    });
    await new Promise(r => setTimeout(r, 750));
  }

  // Write results to AllSteamGame.json
  fs.writeFileSync('./AllSteamGame.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log('Done. Results written to AllSteamGame.json');
}

main();