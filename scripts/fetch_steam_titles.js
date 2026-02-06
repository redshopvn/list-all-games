import * as cheerio from 'cheerio';

const urls = [
  "https://store.steampowered.com/app/1347780/Freedom_Fighters/",
  "https://store.steampowered.com/app/3929740/Tom_Clancys_Splinter_Cell_Pandora_Tomorrow/",
  "https://store.steampowered.com/app/2952470/Rat_Quest/",
  "https://store.steampowered.com/app/2547140/Undercroft_Warriors/",
  "https://store.steampowered.com/app/460960/The_Deed_Dynasty/",
  "https://store.steampowered.com/app/934700/Dead_Island_2/",
  "https://store.steampowered.com/app/1038300/New_Super_Luckys_Tale/",
  "https://store.steampowered.com/app/1898290/LEGO_Bricktales/",
  "https://store.steampowered.com/app/3489700",
  "https://store.steampowered.com/app/511680/FateEXTELLA/",
  "https://store.steampowered.com/app/3170/Kings_Bounty_Armored_Princess/",
  "https://store.steampowered.com/app/63910/Kings_Bounty_Crossworlds/",
  "https://store.steampowered.com/app/410110/12_is_Better_Than_6/",
  "https://store.steampowered.com/app/1944430/Amnesia_The_Bunker/",
  "https://store.steampowered.com/app/968790/DYNASTY_WARRIORS_7_Xtreme_Legends_Definitive_Edition/",
  "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/",
  "https://store.steampowered.com/app/1266840/The_Last_Stand_Aftermath/",
  "https://store.steampowered.com/app/1155970/Roadwarden/",
  "https://store.steampowered.com/app/1096530/Solasta_Crown_of_the_Magister/",
  "https://store.steampowered.com/app/729720/Zomborg/",
  "https://store.steampowered.com/app/1732190/FATAL_FRAME__PROJECT_ZERO_Maiden_of_Black_Water/",
  "https://store.steampowered.com/app/1681430/RoboCop_Rogue_City/",
  "https://store.steampowered.com/app/1903340/Clair_Obscur_Expedition_33/",
  "https://store.steampowered.com/app/2198150/Tiny_Glade/",
  "https://store.steampowered.com/app/2543510/GUNTOUCHABLES/",
  "https://store.steampowered.com/app/2921380/Caribbean_Crashers/",
  "https://store.steampowered.com/app/1035510/Ultimate_Zombie_Defense/",
  "https://store.steampowered.com/app/1368870/Field_of_Glory_II_Medieval/",
  "https://store.steampowered.com/app/1025440/Fantasy_General_II/",
  "https://store.steampowered.com/app/544610/Battlestar_Galactica_Deadlock/",
  "https://store.steampowered.com/app/412830/STEINSGATE/",
  "https://store.steampowered.com/app/362890/Black_Mesa/",
  "https://store.steampowered.com/app/694280/Zombie_Army_4_Dead_War/",
  "https://store.steampowered.com/app/860510/Little_Nightmares_II/",
  "https://store.steampowered.com/app/761620/Beholder_2/",
  "https://store.steampowered.com/app/1378990/Crash_Bandicoot_4_Its_About_Time/",
  "https://store.steampowered.com/app/1659040/HITMAN_World_of_Assassination/",
  "https://store.steampowered.com/app/1927720/Monument_Valley/",
  "https://store.steampowered.com/app/1927740/Monument_Valley_2/",
  "https://store.steampowered.com/app/1426210/It_Takes_Two/",
  "https://store.steampowered.com/app/1501750/Lords_of_the_Fallen/",
  "https://store.steampowered.com/app/2001120/Split_Fiction/",
  "https://store.steampowered.com/app/1693980/Dead_Space/",
  "https://store.steampowered.com/app/2796010/Party_Club/",
  "https://store.steampowered.com/app/1295510/DRAGON_QUEST_XI_S_Echoes_of_an_Elusive_Age__Definitive_Edition/",
  "https://store.steampowered.com/app/2138610/The_Legend_of_Heroes_Trails_through_Daybreak/"
];

function extractAppId(url) {
  const m = url.match(/\/app\/(\d+)/);
  return m ? m[1] : null;
}

async function fetchHtml(url) {
  try {
    const res = await fetch(url, { method: 'GET', headers: { 'User-Agent': 'node-fetch' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } catch (err) {
    return null;
  }
}

(async () => {
  const results = [];
  for (const url of urls) {
    const appId = extractAppId(url);
    console.log(`Fetching ${appId || url} ...`);
    const html = await fetchHtml(url);
    let name = null;
    if (html) {
      const $ = cheerio.load(html);
      name = $('#appHubAppName').text() || $('meta[property="og:title"]').attr('content') || $('div.apphub_AppName').first().text() || $('title').text();
      if (name) name = name.trim().replace(/\s+$/,'');
    } else {
      name = null;
    }
    results.push({
      name: name || null,
      image: appId ? `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${appId}/library_600x900.jpg` : null,
      tags: "20260206"
    });
    // polite delay
    await new Promise(r => setTimeout(r, 750));
  }

  // output JSON array
  console.log(JSON.stringify(results, null, 2));
})();