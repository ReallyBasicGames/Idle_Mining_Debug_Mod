let mod = {
  resources: {
    xp: {
      displayName: "DEBUG-XP", // how this resource is displayed on screen
      amount: 0, // the current amount of this resource
      baseResource: true, // whether this is a resource created by a production building
      strength: 1, // the pickaxe strength required to mine this resource
      xp: 1000, // the amount of xp gained from mining this resource
      unlock: {
        researchPoints: 0, // the amount of research points required to research this
        researched: true, // whether this resource starts the game researched or not.
        requiredLevel: 0 // the xp level required to research this (when the button will appear)
      }
    }
  },
  production: {
    debug_iron_smelter: {
      displayName: "Debug Iron Smelter",
      discription: "Smelts iron ore into iron ingots (extremly efficient).",
      unlock: {
        researchPoints: 0,
        researched: true,
        requiredLevel: 0
      },
      cost: { // you do not need cost for production buildings
        wood: 0
      },
      productionCost: { // how many resources are consumed to produce output
        iron_ore: 1
      },
      total: 0, // you do not need total for production buildings
      production: { // output when this is clicked
        iron_ingots: 1000
      }
    }
  },
  harvesters: { // place all harvester-class buildings under this
    debug_harvester: {
      displayName: "Debug Harvester",
      discription: "Gives lots of resources.",
      unlock: {
        researchPoints: 0,
        researched: true,
        requiredLevel: 0
      },
      cost: { // resources it takes  to purchase 1 harvester
        wood: 0
      },
      productionCost: { // you do not need this for harvesters
        wood: 0
      },
      total: 0, // the total amount of harvesters
      production: { // how much this harvester produces
        wood: 1000,
        stone: 1000,
        coal: 1000,
        iron_ore: 1000,
        xp: 1000
      }
    }
  },
  auto_production: { // auto-production buildings. these factories are for creating non-base resources automatically
    debug_auto_produce: {
      enabled: true, // use the enabled feature to turn the factory off. CAREFUL: THIS IS PERMANANT. IF FALSE AT THE START OF THE GAME, YOU CANNOT RE-ENABLE THIS UNTIL PAGE IS REFRESHED.
      displayName: "Debug Auto-Production",
      discription: "Converts some resources into other resources automatically.",
      unlock: {
        researchPoints: 1,
        researched: false,
        requiredLevel: 0
      },
      cost: { // cost to purchase 1 factory
        wood: 1
      },
      productionCost: { // resource inputs. the factory will shut off if you run out of resources, and turn back on again when you have enough
        wood: 1
      },
      total: 0, // number of this factory
      production: { // resource output of this factory
        iron_ingots: 1000,
        fire: 1000
      }
    }
  }
}
