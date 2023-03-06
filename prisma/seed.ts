import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.quest.createMany({
    data: [
      {
        value: "Maj al-Ragath's Pledges",
        category: "Undaunted Pledges",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "Maj al-Ragath",
        uespLink: "",
        reward: "",
      },
      {
        value: "Glirion the Redbeard's Pledges",
        category: "Undaunted Pledges",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "Glirion the Redbeard",
        uespLink: "",
        reward: "",
      },
      {
        value: "Urgarlag Chief-bane's Pledges",
        category: "Undaunted Pledges",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "Urgarlag Chief-bane",
        uespLink: "",
        reward: "",
      },
      {
        value: "Fighters Guild Daily Quests",
        category: "Guild Daily Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Mages Guild Daily Quests",
        category: "Guild Daily Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Undaunted Daily Quests",
        category: "Guild Daily Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Consumables Crafting Writs",
        category: "Crafting Writs",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Equipment Crafting Writs",
        category: "Crafting Writs",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Master Writs",
        category: "Crafting Writs",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Holiday Writs",
        category: "Crafting Writs",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Assaulting the Citadel",
        category: "Trials",
        description: "",
        repeatable: "weekly",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "The Fight for Kyne's Aegis",
        category: "Trials",
        description: "",
        repeatable: "weekly",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Forging the Future",
        category: "Trials",
        description: "",
        repeatable: "weekly",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Into the Maw",
        category: "Trials",
        description: "",
        repeatable: "weekly",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Of Stone and Steam",
        category: "Trials",
        description: "",
        repeatable: "weekly",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "The Mage's Tower",
        category: "Trials",
        description: "",
        repeatable: "weekly",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "The Oldest Ghost",
        category: "Trials",
        description: "",
        repeatable: "weekly",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "The Return of Alkosh",
        category: "Trials",
        description: "",
        repeatable: "weekly",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Reavers of the Reef",
        category: "Trials",
        description: "",
        repeatable: "weekly",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Saints' Mercy",
        category: "Trials",
        description: "",
        repeatable: "weekly",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Woe of the Welkynars",
        category: "Trials",
        description: "",
        repeatable: "weekly",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Maelstrom Arena",
        category: "Arenas",
        description: "",
        repeatable: "immediately",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Veteran Maelstrom Arena",
        category: "Arenas",
        description: "",
        repeatable: "immediately",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "The Black Gauntlet",
        category: "Arenas",
        description: "",
        repeatable: "weekly",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Vateshran's Rites",
        category: "Arenas",
        description: "",
        repeatable: "immediately",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Veteran Vateshran's Rites",
        category: "Arenas",
        description: "",
        repeatable: "immediately",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Critical Mass",
        category: "Craglorn Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "The Fallen City of Shada",
        category: "Craglorn Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "The Reason We Fight",
        category: "Craglorn Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "The Seeker's Archive",
        category: "Craglorn Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Supreme Power",
        category: "Craglorn Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "The Trials of Rahni'Za",
        category: "Craglorn Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Waters Run Foul",
        category: "Craglorn Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Uncaged",
        category: "Craglorn Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "The Truer Fangs",
        category: "Craglorn Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Taken Alive",
        category: "Craglorn Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Souls of the Betrayed",
        category: "Craglorn Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Iron and Scales",
        category: "Craglorn Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "The Gray Passage",
        category: "Craglorn Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "The Blood of Nirn",
        category: "Craglorn Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "A Taste for Toxins",
        category: "Cyrodilic Collections",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Anti-Veom Agitation",
        category: "Cyrodilic Collections",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Bug Off!",
        category: "Cyrodilic Collections",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Reeling in Recruits",
        category: "Cyrodilic Collections",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Salty Meats",
        category: "Cyrodilic Collections",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "The Winds of Kyne",
        category: "Cyrodilic Collections",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Dark Souls, Mighty Weapons",
        category: "Northern Elsweyr Defense Force",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Dragon Lore: Icehammer's Vault",
        category: "Northern Elsweyr Defense Force",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Dragon Lore: Shroud Hearth",
        category: "Northern Elsweyr Defense Force",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Dragon Lore, Stormcrag Crypt",
        category: "Northern Elsweyr Defense Force",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Goblin Demonstration",
        category: "Northern Elsweyr Defense Force",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Lamia Demonstration",
        category: "Northern Elsweyr Defense Force",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Lurcher Demonstration",
        category: "Northern Elsweyr Defense Force",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Skeleton Demonstration",
        category: "Northern Elsweyr Defense Force",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Spider Demonstration",
        category: "Northern Elsweyr Defense Force",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Dousing the Fires of Industry",
        category: "Imperial City Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Historical Accuracy",
        category: "Imperial City Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "The Lifeblood of an Empire",
        category: "Imperial City Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Priceless Treasures",
        category: "Imperial City Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Speaking For The Dead",
        category: "Imperial City Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Watch Your Step",
        category: "Imperial City Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Wrothgar Bounty",
        category: "Wrothgar Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Wrothgar Exploratory",
        category: "Wrothgar Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Guild Jobs",
        category: "Thieves Guild Quests",
        description: "",
        repeatable: "immediately",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Heists",
        category: "Thieves Guild Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Thieves Guild Exploratory",
        category: "Thieves Guild Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Dark Brotherhood Contracts",
        category: "Gold Coast Quests",
        description: "",
        repeatable: "immediately",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Dark Brotherhood Sacraments",
        category: "Gold Coast Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Gold Coast Bounties",
        category: "Gold Coast Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Gold Coast Exploratory",
        category: "Gold Coast Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Vvardenfell Bounty",
        category: "Vvardenfell Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },

      {
        value: "Vvardenfell Exploratory",
        category: "Vvardenfell Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Vvardenfell Hunt",
        category: "Vvardenfell Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Vvardenfell Relics",
        category: "Vvardenfell Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },

      {
        value: "Clockwork City Bounty",
        category: "Clockwork City Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Clockwork City Exploratory",
        category: "Clockwork City Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Tarnished",
        category: "Clockwork City Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Blackfeather Court",
        category: "Clockwork City Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Summerset Bounty",
        category: "Summerset Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Summerset Exploratory",
        category: "Summerset Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },

      {
        value: "Abyssal Geyser",
        category: "Summerset Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },

      {
        value: "Murkmire Bounty",
        category: "Murkmire Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Murkmire Exploratory",
        category: "Murkmire Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Root-Whisper",
        category: "Murkmire Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Elsweyr Bounty",
        category: "Elsweyr Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Elsweyr Exploratory",
        category: "Elsweyr Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Dragon World Events",
        category: "Elsweyr Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Dragonhold Bounty",
        category: "Dragonhold Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Dragonhold Exploratory",
        category: "Dragonhold Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "New Moon",
        category: "Dragonhold Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Western Skyrim Bounty",
        category: "Western Skyrim Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Western Skyrim Exploratory",
        category: "Western Skyrim Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Western Skyrim Harrowstorms",
        category: "Western Skyrim Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "The Reach Bounty",
        category: "The Reach Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "The Reach Exploratory",
        category: "The Reach Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "The Reach Harrowstorms",
        category: "The Reach Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Wayward Guardian",
        category: "The Reach Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Blackwood Bounty",
        category: "Blackwood Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Blackwood Exploratory",
        category: "Blackwood Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Deadlans Bounty",
        category: "Deadlands Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Deadlans Exploratory",
        category: "Deadlands Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "High Isle Bounty",
        category: "High Isle Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "High Isle Exploratory",
        category: "High Isle Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "High Isle Volcanic Vents",
        category: "High Isle Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Cards Across the Continent",
        category: "Tales of Tribute",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Dueling Tributes",
        category: "Tales of Tribute",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Galen Bounty",
        category: "Galen Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Galen Exploratory",
        category: "Galen Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Galen Volcanic Vents",
        category: "Galen Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Bruma",
        category: "Cyrodiil Settlement Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Cheydinhal",
        category: "Cyrodiil Settlement Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Chorrol and Wynon Priory",
        category: "Cyrodiil Settlement Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Cropsford",
        category: "Cyrodiil Settlement Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Vlastarus",
        category: "Cyrodiil Settlement Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Fighters Guild Bounty from skill line",
        category: "Fighters Guild Bounty Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Battle Missions",
        category: "PvP Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Bounty Missions",
        category: "PvP Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Conquest Missions",
        category: "PvP Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Scouting Missions",
        category: "PvP Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Warfront Missions",
        category: "PvP Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Elder Scrolls Missions",
        category: "PvP Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Battlegrounds Missions",
        category: "PvP Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "New Life Festival",
        category: "Event Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Jester's Festival",
        category: "Event Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Whitestrakes's Mayhem",
        category: "Event Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Witches Festival",
        category: "Event Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Dawn of the Dragonguard",
        category: "Event Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Year One Celebration",
        category: "Event Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Bounties of Blackwood",
        category: "Event Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Daedric War Celebration Event",
        category: "Event Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Set Sail for High Isle",
        category: "Event Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Zeal of Zenithar",
        category: "Event Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
      {
        value: "Dark Heart of Skyrim Celebration",
        category: "Event Quests",
        description: "",
        repeatable: "daily",
        location: "",
        questGiver: "",
        uespLink: "",
        reward: "",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
