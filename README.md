# MC Tier List

A tier list site that looks like mctiers.com. Edit `tierlist.json` to manage players.

## Setup

Just open `index.html` in a browser — or host on GitHub Pages.

For GitHub Pages:
1. Push this folder to a repo
2. Go to Settings → Pages → Source: main branch / root
3. Done — skins load automatically via mc-heads.net

## Editing the tier list

Edit `tierlist.json`:

```json
{
  "title": "MC Tier List",
  "gamemodes": ["Overall", "Crystal", "Sword", "NethOP", "UHC", "SMP", "Pot", "Axe"],
  "players": [
    {
      "username": "_lxd",
      "region": "EU",
      "rank_label": "Combat Ace",
      "tiers": {
        "Crystal": "LT4",
        "Sword":   "LT3",
        "NethOP":  "HT1"
      }
    }
  ]
}
```

### Tier values
`HT1` `HT2` `HT3` `HT4` — High Tier  
`LT1` `LT2` `LT3` `LT4` — Low Tier

### Region values
`NA` `EU` `AS` `OC`

### Gamemodes with icons
`Overall` `UHC` `Crystal` `Sword` `Pot` `NethOP` `SMP` `Axe` `Mace` `Vanilla` `LTMs`

## Skins
Fetched automatically from `mc-heads.net` using the Minecraft username. No API key needed.
