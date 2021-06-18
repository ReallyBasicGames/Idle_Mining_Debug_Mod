# Idle Mining Debug Mod
The idle mining template mod. You can find the game on [replit.com](https://replit.com/talk/share/IDLE-MINING-The-super-moddable-idle-clicker-game/141215) or [github](https://github.com/ReallyBasicGames/Idle-Mining).
Explains how to create your own resources, production buildings, harvesters, and auto-production buildings using JSON.

Good luck on your mod!
___
## Instructions
These instructions teach you how to make your mod from scratch. 
___
### Setup
1. Fork this on replit or github.
2. If using replit to edit your mod, connect this project to github using version control on replit.
3. Make sure your mod has the 'idle-mining-mod' tag on github! Otherwise, it will not be visible when people search for it.

___

### Making Your Mod
You are now ready to make your own mod!
>Note: modding will be easier if you have prior knowledge of JSON files. 
>Warning: if you spot a warning below, make sure you read it! It contains important information that could throw errors when uploading your mod!

___
Setup the `mod.json` file by typing opening and closing curly brackets. 

You will also need several items, which I will explain later in this tutorial in detail.
This is what your `mod.json` file should look like after setup: 
```json
{
  "modDetails": {
  },
  "resources": {
  },
  "productionBuildings": {
  },
  "harvesters": {
  },
  "auto_production": {
  }
}

```

For each section, marked by a 
#### A Header That Looks Like This
the json will be placed under the appropriate key.

Example:
```json
{
  "modDetails": {
    <--- stuff goes here --->
  },
  "resources": {
    <--- stuff goes here --->
  },
  "productionBuildings": {
    <--- stuff goes here --->
  },
  "harvesters": {
    <--- stuff goes here --->
  },
  "auto_production": {
    <--- stuff goes here --->
  }
}
```

___

#### Mod Details

The `modDetails` component has 5 variables: 
```json
"modDetails": {
  "modName": "string",
  "modDiscription": "string",
  "modAuthor": "string",
  "enabled": bool,
  "dependencies": []
}
```
The `modName` is a string variable stores the name of your mod. 
> Warning: Make sure it doesn't match any existing mods, or you won't be able to load it.

The `modDiscription` variable is a string to describe your mod. This can be anything you want, and as long as you want (but try to keep it under about 100 characters!).

The `modAuthor` variable is a string that says who made the mod. 

The `enabled` variable is a bool that will be used in a future version. For now, just set this to `true`.
> Warning: don't put quotes around this. It is not a string and will throw an error if you do.

The `dependencies` variable is an array, either filled with strings or by `null`. 
Use this if your mod depends on anything else, such as the default mod.

Here is an example:

You are using the default mod's resources, as well as some debugging buildings, but don't want to copy everything from those mods.
Simply do:
```json
"dependencies": ["Default Mod", "Debug Mod"]
```

Alternatively, if you are not dependent on any mods, type:
```json
"dependencies": [null]
```
> Warning: don't put quotes around null. It is not a string and will throw an error if you do.

___
#### Resources
This section will teach you how to make your own `resource`.
Here is an example of a resource:
```json
    "xp-giver": {
      "displayName": "XP-GIVER",
      "amount": 0,
      "baseResource": true,
      "strength": 1,
      "xp": 1000,
      "unlock": {
        "researchPoints": 0,
        "researched": true,
        "requiredLevel": 0
      }
    }
```
__The Variables:__

`xp-giver` from the example is the programmer name for your resource. 
You can call it whatever you want, but it must be unique and it must be in double-quotes. 

`displayName` is a string variable. This is what gets displayed when you research this material.
> Note: while `xp-giver` from the example must be unique, `displayName` does not. However, it does make things confusing if there are two types of resources with the same name!


`amount` is the number of this resource the player currently has. If you don't want the player to start with this resource, set this to 0.


`baseResource` is a boolean. If you want to be able to mine this resource, set this to `true`. If you want to make this as an output for a production building, set this to `false`.


`strength` is a number. This is the amount of pickaxe strength it takes to mine this resource. 
> Warning: _never_ set this to zero. If it is zero when you play your mod, the game will freeze and your mod will not work.


`xp` is a number. This is how much xp you get for mining/producing this resource. Auto-harvesting or auto-producing this resource gives you about 1/3 of this amount per resource harvested/produced.


`unlock` is a set of variables that control how this resource is researched.
> Note: `unlock` is really important to learn, because it is used for resources, production buildings, auto harvesters, and auto production buildings.

`researchPoints` is the number of research points required to research this item.

`researched` is a boolean that discribes whether this item has been researched yet. 

`requiredLevel` is what level the player must be at in order for this to show up as researchable. It will not appear until the player reaches this level.

___

#### Production buildings
These are manual production buildings. The require being clicked in order to work. 
> Note: If you want to make a production building that produces resources automatically, see autoProduction below. 

Here is an example of a production building producing the resource mentioned above:

```json
"producer-3000": {
  "displayName": "Producer 3000",
  "discription": "Converts useless wood into massive amounts of xp.",
  "total": 0,
  "unlock": {
    "researchPoints": 0,
    "researched": true,
    "requiredLevel": 0
  },
  "cost": {
    "wood": 0
  },
  "productionCost": {
    "wood": 1
  },
  "production": {
    "xp-giver": 1000
  }
}
```

`producer-3000` from the example is the programmer name for your production building. 
You can call it whatever you want, but it must be unique and it must be in double-quotes. 

`displayName` is a string variable. This is what gets displayed when you research this production building.
> Note: while `producer-3000` from the example must be unique, `displayName` does not. However, it does make things confusing if there are two types of production buildings with the same name!

`discription` discribes how this building works. It doesn't need exact numbers, just a basic idea of what goes in and what comes out.

`total` is the current number of buildings the player currently owns. 
>This isn't used for production buildings yet, but may in a future update. Adding it anyway is considered good practice.

`unlock` is a set of variables that control how this resource is researched.
> Note: `unlock` is really important to learn, because it is used for resources, production buildings, auto harvesters, and auto production buildings.

`researchPoints` is the number of research points required to research this building.

`researched` is a boolean that discribes whether this building has been researched yet. 

`requiredLevel` is what level the player must be at in order for this to show up as researchable. It will not appear until the player reaches this level.

Next is the `cost` variable. This is a set of resource keys set to a number. 

>Note: cost is currently not used for production buildings, but may be used in future versions of the game,
>so it is good practice to add it anyway. Just make the building cost 0 wood or some other resource.

Then there is the `productionCost`. This is formatted the same way as `cost` and `production`. 

In this example, this is a building that takes an input of 3 iron_ore and 1 fire per click:
```json
"productionCost": {
  "iron_ore": 3,
  "fire": 1
}
```
Lastly, there is `production`. This is formatted the same way as `cost` and `productionCost`. 

In this example, this is a building that produces 5 wood and 1 stone per click:
```json
"production": {
  "wood": 10,
  "stone": 5
}
```

___

#### Harvesters

Harvesters are used to harvest base resources automatically. They require no input and trigger every 1 second.
> Note: this follows nearly the same pattern of production buildings. I will refer to the notes above when needed.

Here is an example of a harvester:
```json
"super_harvest": {
  "displayName": "Super Harvester",
  "discription": "Harvest massive amounts of resources relatively cheaply.",
  "total": 0,
  "unlock": {
    "researchPoints": 0,
    "researched": true,
    "requiredLevel": 0
  },
  "cost": {
    "wood": 1
  },
  "production": {
    "wood": 1000,
    "stone": 1000
  }
}
```
The building programmer name, `displayName`, `discription`, `unlock`, and `production`: 
- if you are not sure what any of these are, reference the production building. 

The only two real differences between harvesters and production buildings is the `cost` and `productionCost`.
Harvesters produce base resources at zero cost to the player, so there should be no `productionCost`.
However, you do have to purchase this building in order for it to work.

The `cost` key represents all of the resources required to build this building. 
In this example, this is a building that costs 5 wood and 1 stone to build:
```json
"cost": {
  "wood": 10,
  "stone": 5
}
```

The `total` key is a number that represents how many of this building the player currently has. 
If they have 5 of this building, they will produce 5 times the amount of resources in `production`.


___
#### Auto Production

Auto production buildings are essentially 'factories' that manufacture higher-level resources for you. 
You are not required to click on the production buildings for them to produce, and they will automatically convert 
resources into other resources, as long as you meet the requirements to do so. 

Here is an example of an auto production building that creates iron ingots from fire and iron ore:
```json
"iron-smelter": {
  "enabled": true,
  "displayName": "The Iron Smelter Of Awesomeness",
  "discription": "Makes producing iron ingots by hand outdated.",
  "unlock": {
    "researchPoints": 1,
    "researched": false,
    "requiredLevel": 0
  },
  "cost": {
    "wood": 1
  },
  "productionCost": {
    "iron_ore": 1,
    "fire": 1
  },
  "total": 0,
  "production": {
    "iron_ingots": 1000
  }
}
```

Auto production buildings are virtually the same as harvesters except for two things: 

1. Auto production buildings cost something to produce. The `productionCost` variable automatically subtracts this amount from the player's resources every second. If the player doesn't meet the input requirements, they will not get the resources mentioned in `production`.
2. They have an `enabled` key. In a later update, auto production buildings will be able to be switched off in-game. For now, this is a required key.

>Warning: if the `enabled` key is set to `false`, your auto production building will not produce no matter how many of these you have. Make sure this is set to `true`!

___

### Summary



I hope everything made sense in this tutorial! If you had an issue, something didn't make sense, ~~or I misspelled something~~, feel free to post it in the comments and I will get back to you as soon as I can!

