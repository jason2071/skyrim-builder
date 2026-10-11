export const adamantPluginPrefixes = {
    "Adamant.esp": "33",
    "Ascension.esp": "FE0B2",
    "HandtoHand.esp": "FE0B0",
    "Update.esm": "01"
};
export const adamantPerkTrees = [
    {
        "name": "Alchemy",
        "cname": "alchemy",
        "perks": [
            {
                "name": "Alchemy Mastery",
                "desc": [
                    "Potions and poisons you make are 25% stronger.",
                    "Potions and poisons you make are 50% stronger."
                ],
                "req": [
                    10,
                    50
                ],
                "pos": [
                    51.07,
                    4.64
                ],
                "id": [
                    "000BE127",
                    "000C07CA"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0BE127"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C07CA"
                    }
                ],
                "levels": 2
            },
            {
                "name": "Potency",
                "desc": [
                    "Potions you mix are 50% stronger.",
                    "Potions you mix are twice as strong."
                ],
                "req": [
                    30,
                    70
                ],
                "pos": [
                    6.07,
                    -3.57
                ],
                "id": [
                    "00058216",
                    "33D7D808"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058216"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "D7D808"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Apothecary",
                "desc": [
                    "Potions last 50% longer.",
                    "Potions last twice as long."
                ],
                "req": [
                    40,
                    80
                ],
                "pos": [
                    30.0,
                    -51.43
                ],
                "id": [
                    "00058215",
                    "33510A44"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058215"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "510A44"
                    }
                ],
                "levels": 2,
                "deps": [
                    1
                ]
            },
            {
                "name": "Chemist",
                "desc": [
                    "You create twice as many potions or poisons from the same number of ingredients. "
                ],
                "req": [
                    100
                ],
                "pos": [
                    46.79,
                    -104.29
                ],
                "id": [
                    "330DA3D3"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "0DA3D3"
                    }
                ],
                "deps": [
                    2,
                    7
                ]
            },
            {
                "name": "Green Thumb",
                "desc": [
                    "You gather one extra ingredient from plants.",
                    "You gather two extra ingredients from plants. "
                ],
                "req": [
                    20,
                    60
                ],
                "pos": [
                    34.64,
                    -23.21
                ],
                "id": [
                    "0005821D",
                    "330E45D4"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "05821D"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "0E45D4"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Purity",
                "desc": [
                    "All negative effects are removed from created potions, and all positive effects are removed from created poisons."
                ],
                "req": [
                    90
                ],
                "pos": [
                    55.0,
                    -33.21
                ],
                "id": [
                    "00105F2C"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "105F2C"
                    }
                ],
                "deps": [
                    4
                ]
            },
            {
                "name": "Concentration",
                "desc": [
                    " Poisons you make are 50% stronger.",
                    " Poisons you make are twice as strong."
                ],
                "req": [
                    30,
                    70
                ],
                "pos": [
                    91.07,
                    -3.57
                ],
                "id": [
                    "330DA3D2",
                    "33D7D809"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "0DA3D2"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "D7D809"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Poisoner",
                "desc": [
                    "Poisons last for 50% more hits.",
                    "Poisons last for twice as many hits."
                ],
                "req": [
                    40,
                    80
                ],
                "pos": [
                    66.79,
                    -50.0
                ],
                "id": [
                    "331E6934",
                    "3337B9F1"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "1E6934"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "37B9F1"
                    }
                ],
                "levels": 2,
                "deps": [
                    6
                ]
            }
        ]
    },
    {
        "name": "Alteration",
        "cname": "alteration",
        "perks": [
            {
                "name": "Alteration Mastery",
                "desc": [
                    "Alteration spells cost 25% less Magicka.",
                    "Alteration spells cost 50% less Magicka."
                ],
                "req": [
                    10,
                    50
                ],
                "pos": [
                    67.5,
                    4.64
                ],
                "id": [
                    "000F2CA6",
                    "000C44B7"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0F2CA6"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C44B7"
                    }
                ],
                "levels": 2
            },
            {
                "name": "Mage Robes",
                "desc": [
                    "You gain 50% Magicka Regeneration while wearing robes.",
                    "You gain 100% Magicka Regeneration while wearing robes."
                ],
                "req": [
                    20,
                    60
                ],
                "pos": [
                    79.29,
                    -16.07
                ],
                "id": [
                    "3332FACB",
                    "000D799B"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "32FACB"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0D799B"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Mage Armor",
                "desc": [
                    "Armor spells are twice as strong while wearing robes."
                ],
                "req": [
                    30
                ],
                "pos": [
                    84.64,
                    -65.71
                ],
                "id": [
                    "000D7999"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0D7999"
                    }
                ],
                "deps": [
                    1
                ]
            },
            {
                "name": "Magicka Flood",
                "desc": [
                    "You cast spells 20% faster while wearing robes."
                ],
                "req": [
                    80
                ],
                "pos": [
                    123.93,
                    -115.0
                ],
                "id": [
                    "33158CFE"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "158CFE"
                    }
                ],
                "deps": [
                    2
                ]
            },
            {
                "name": "Magicka Current",
                "desc": [
                    "You move 20% faster when casting spells while wearing robes."
                ],
                "req": [
                    70
                ],
                "pos": [
                    133.57,
                    -90.36
                ],
                "id": [
                    "000D799A"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0D799A"
                    }
                ],
                "deps": [
                    2
                ]
            },
            {
                "name": "Magicka Well",
                "desc": [
                    "Your Magicka regenerates twice as fast when you fall below half Magicka while wearing robes."
                ],
                "req": [
                    100
                ],
                "pos": [
                    102.14,
                    -131.79
                ],
                "id": [
                    "000581FC"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0581FC"
                    }
                ],
                "deps": [
                    2
                ]
            },
            {
                "name": "Balance",
                "desc": [
                    "Alteration spells last 50% longer.",
                    "Alteration spells last twice as long."
                ],
                "req": [
                    30,
                    60
                ],
                "pos": [
                    55.36,
                    -16.43
                ],
                "id": [
                    "339A744F",
                    "339C0950"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "9A744F"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "9C0950"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Bastion",
                "desc": [
                    "You resist 50% of incoming Magicka and Stamina damage while under the effects of a flesh spell. "
                ],
                "req": [
                    40
                ],
                "pos": [
                    52.86,
                    -65.71
                ],
                "id": [
                    "00053128"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "053128"
                    }
                ],
                "deps": [
                    6
                ]
            },
            {
                "name": "Spell Sip",
                "desc": [
                    "You have a 20% chance to absorb the Magicka from incoming spells while under the effects of a flesh spell."
                ],
                "req": [
                    90
                ],
                "pos": [
                    30.71,
                    -130.71
                ],
                "id": [
                    "33352DB9"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "352DB9"
                    }
                ],
                "deps": [
                    7
                ]
            },
            {
                "name": "Spell Shield",
                "desc": [
                    "You have 25% Magic Resistance while under the effects of a flesh spell."
                ],
                "req": [
                    70
                ],
                "pos": [
                    -11.07,
                    -116.79
                ],
                "id": [
                    "0005312A"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "05312A"
                    }
                ],
                "deps": [
                    7
                ]
            },
            {
                "name": "Spell Strike",
                "desc": [
                    "Unarmed attacks have a 50% chance to deal Fire, Frost, or Shock damage while under the effects of a flesh spell.",
                    "Unarmed attacks have a 50% chance to deal even more Fire, Frost, or Shock damage while under the effects of a flesh spell."
                ],
                "req": [
                    60,
                    90
                ],
                "pos": [
                    -4.29,
                    -76.07
                ],
                "id": [
                    "FE0B0001",
                    "FE0B0002"
                ],
                "forms": [
                    {
                        "plugin": "HandtoHand.esp",
                        "formId": "000001",
                        "light": true
                    },
                    {
                        "plugin": "HandtoHand.esp",
                        "formId": "000002",
                        "light": true
                    }
                ],
                "levels": 2,
                "deps": [
                    7
                ]
            },
            {
                "name": "Barrier",
                "desc": [
                    "Protection spells like Oakflesh and Fire Shell last twice as long when dual cast.",
                    "Protection spells like Oakflesh and Fire Shell last twice as long and affect all nearby allies when dual cast."
                ],
                "req": [
                    40,
                    70
                ],
                "pos": [
                    68.57,
                    -24.64
                ],
                "id": [
                    "33352DBB",
                    "000581F7"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "352DBB"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0581F7"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            }
        ]
    },
    {
        "name": "Archery",
        "cname": "marksman",
        "perks": [
            {
                "name": "Archery Mastery",
                "desc": [
                    "Bows and crossbows deal 25% more damage.",
                    "Bows and crossbows deal 50% more damage."
                ],
                "req": [
                    10,
                    50
                ],
                "pos": [
                    -5.0,
                    -1.0
                ],
                "id": [
                    "000BABED",
                    "0007934A"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0BABED"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "07934A"
                    }
                ],
                "levels": 2
            },
            {
                "name": "Ranger's Stance",
                "desc": [
                    "You draw your bow and reload your crossbow faster.",
                    "You draw your bow and reload your crossbow faster, and you move faster while aiming a bow or crossbow."
                ],
                "req": [
                    30,
                    70
                ],
                "pos": [
                    32.14,
                    -14.64
                ],
                "id": [
                    "00105F19",
                    "00058F63"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "105F19"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F63"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Steady Hand",
                "desc": [
                    "Zoom in while drawing a bow or crossbow to slow down time by 25%.",
                    "Zoom in while drawing a bow or crossbow to slow down time by 50%."
                ],
                "req": [
                    40,
                    80
                ],
                "pos": [
                    55.36,
                    -45.36
                ],
                "id": [
                    "00058F61",
                    "00103ADB"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F61"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "103ADB"
                    }
                ],
                "levels": 2,
                "deps": [
                    1
                ]
            },
            {
                "name": "Power Shot",
                "desc": [
                    "Bows and crossbows have a 50% chance to stagger enemies. "
                ],
                "req": [
                    60
                ],
                "pos": [
                    77.86,
                    -77.14
                ],
                "id": [
                    "00058F62"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F62"
                    }
                ],
                "deps": [
                    2
                ]
            },
            {
                "name": "Pinning Shot",
                "desc": [
                    "Repeated attacks from bows or crossbows reduce enemy Movement Speed by up to 50% for 10 seconds."
                ],
                "req": [
                    100
                ],
                "pos": [
                    76.79,
                    -137.86
                ],
                "id": [
                    "00058F64"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F64"
                    }
                ],
                "deps": [
                    3
                ]
            },
            {
                "name": "Eagle Eye",
                "desc": [
                    "Bows have a 20% chance of dealing critical damage.",
                    "Bows have a 20% chance of dealing critical damage. This chance is doubled against enemies with full Health. "
                ],
                "req": [
                    20,
                    70
                ],
                "pos": [
                    12.14,
                    -33.57
                ],
                "id": [
                    "3317C427",
                    "00105F1E"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "17C427"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "105F1E"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Precise Shot",
                "desc": [
                    "Critical attacks with bows deal three times more damage.",
                    "Critical attacks with bows deal five times more damage."
                ],
                "req": [
                    40,
                    90
                ],
                "pos": [
                    35.36,
                    -77.14
                ],
                "id": [
                    "00105F1C",
                    "00105F1F"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "105F1C"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "105F1F"
                    }
                ],
                "levels": 2,
                "deps": [
                    5
                ]
            },
            {
                "name": "Grim Focus",
                "desc": [
                    "Crossbows deal extra bleeding damage over 10 seconds.",
                    "Crossbows deal extra bleeding damage over 10 seconds. Targets who fall below half Health take 50% extra bleeding damage."
                ],
                "req": [
                    20,
                    70
                ],
                "pos": [
                    -8.57,
                    -40.36
                ],
                "id": [
                    "3324BD6C",
                    "3324BD6F"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "24BD6C"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "24BD6F"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Puncturing Shot",
                "desc": [
                    "Crossbows deal three times more bleeding damage.",
                    "Crossbows deal five times more bleeding damage."
                ],
                "req": [
                    40,
                    90
                ],
                "pos": [
                    11.43,
                    -88.57
                ],
                "id": [
                    "3324BD6D",
                    "3324BD6E"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "24BD6D"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "24BD6E"
                    }
                ],
                "levels": 2,
                "deps": [
                    7
                ]
            }
        ]
    },
    {
        "name": "Block",
        "cname": "block",
        "perks": [
            {
                "name": "Block Mastery",
                "desc": [
                    "Blocking and bashing are 25% more effective.",
                    "Blocking and bashing are 50% more effective."
                ],
                "req": [
                    10,
                    50
                ],
                "pos": [
                    76.07,
                    1.43
                ],
                "id": [
                    "000BCCAE",
                    "00079355"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0BCCAE"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "079355"
                    }
                ],
                "levels": 2
            },
            {
                "name": "Deadly Bash",
                "desc": [
                    "Bashing an enemy deals double damage and 25% extra stagger."
                ],
                "req": [
                    30
                ],
                "pos": [
                    50.71,
                    -8.93
                ],
                "id": [
                    "0005F594"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "05F594"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Stunning Strike",
                "desc": [
                    "Bashing an enemy reduces their Movement and Attack Speed by 25% for 10 seconds."
                ],
                "req": [
                    60
                ],
                "pos": [
                    47.14,
                    -45.36
                ],
                "id": [
                    "00058F66"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F66"
                    }
                ],
                "deps": [
                    1
                ]
            },
            {
                "name": "Disorienting Blow",
                "desc": [
                    "Bashing an reduces their weapon and spell damge by 20% for 10 seconds."
                ],
                "req": [
                    80
                ],
                "pos": [
                    1.79,
                    -71.07
                ],
                "id": [
                    "330F89E4"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "0F89E4"
                    }
                ],
                "deps": [
                    2
                ]
            },
            {
                "name": "Battering Ram",
                "desc": [
                    "Bashing an enemy has a chance to knock them to the ground."
                ],
                "req": [
                    100
                ],
                "pos": [
                    48.57,
                    -102.14
                ],
                "id": [
                    "335A37D5"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "5A37D5"
                    }
                ],
                "deps": [
                    3
                ]
            },
            {
                "name": "Rapid Maneuvers",
                "desc": [
                    "You move much faster while blocking with a shield."
                ],
                "req": [
                    20
                ],
                "pos": [
                    97.5,
                    -12.86
                ],
                "id": [
                    "000D8C33"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0D8C33"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Shield Wall",
                "desc": [
                    "Blocking with a shield reduces incoming arrow and spell damage by 50%."
                ],
                "req": [
                    40
                ],
                "pos": [
                    96.79,
                    -49.64
                ],
                "id": [
                    "00106253"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "106253"
                    }
                ],
                "deps": [
                    5
                ]
            },
            {
                "name": "Shield Charge",
                "desc": [
                    "Sprint while blocking with a shield to execute a shield charge. While charging, you resist 50% of all incoming weapon and spell damage."
                ],
                "req": [
                    70
                ],
                "pos": [
                    134.29,
                    -81.79
                ],
                "id": [
                    "00058F6A"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F6A"
                    }
                ],
                "deps": [
                    6
                ]
            },
            {
                "name": "Quick Reflexes",
                "desc": [
                    "Blocking with a shield slows down time during an enemy power attack."
                ],
                "req": [
                    90
                ],
                "pos": [
                    87.14,
                    -103.93
                ],
                "id": [
                    "335A37D4"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "5A37D4"
                    }
                ],
                "deps": [
                    7
                ]
            },
            {
                "name": "Defensive Stance",
                "desc": [
                    "Blocking and bashing cost 25% less Stamina.",
                    "Blocking and bashing cost 50% less Stamina."
                ],
                "req": [
                    30,
                    70
                ],
                "pos": [
                    74.29,
                    -28.93
                ],
                "id": [
                    "3313F7A8",
                    "3313F7A9"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "13F7A8"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "13F7A9"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            }
        ]
    },
    {
        "name": "Conjuration",
        "cname": "conjuration",
        "perks": [
            {
                "name": "Conjuration Mastery",
                "desc": [
                    "Conjuration spells cost 25% less Magicka.",
                    "Conjuration spells cost 50% less Magicka."
                ],
                "req": [
                    10,
                    50
                ],
                "pos": [
                    58.93,
                    7.5
                ],
                "id": [
                    "000F2CA7",
                    "000C44BB"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0F2CA7"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C44BB"
                    }
                ],
                "levels": 2
            },
            {
                "name": "Arcane Weapon",
                "desc": [
                    "Bound weapons and shields cast 50% faster and last five times longer."
                ],
                "req": [
                    20
                ],
                "pos": [
                    27.14,
                    -5.71
                ],
                "id": [
                    "33510B8C"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "510B8C"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Mystic Binding",
                "desc": [
                    "Bound weapons and shields are stronger. "
                ],
                "req": [
                    30
                ],
                "pos": [
                    13.21,
                    -30.36
                ],
                "id": [
                    "000640B3"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0640B3"
                    }
                ],
                "deps": [
                    1
                ]
            },
            {
                "name": "Soul Stealer",
                "desc": [
                    "Bound weapons trap enemy souls and deal Magic damage over 10 seconds.",
                    "Bound weapons trap enemy souls and deal additional Magic damage over 10 seconds."
                ],
                "req": [
                    40,
                    70
                ],
                "pos": [
                    -0.36,
                    -65.71
                ],
                "id": [
                    "000D799E",
                    "000D799C"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0D799E"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0D799C"
                    }
                ],
                "levels": 2,
                "deps": [
                    2
                ]
            },
            {
                "name": "Haunting Curse",
                "desc": [
                    "Bound weapons reduce enemy Magic Resistance by 25% for 10 seconds.",
                    "Bound weapons reduce enemy Magic Resistance by 50% for 10 seconds."
                ],
                "req": [
                    60,
                    90
                ],
                "pos": [
                    0.36,
                    -103.21
                ],
                "id": [
                    "33A44366",
                    "33F4A36F"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "A44366"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "F4A36F"
                    }
                ],
                "levels": 2,
                "deps": [
                    3
                ]
            },
            {
                "name": "Bound Armor",
                "desc": [
                    "Bound shields increase your Armor Rating by 100."
                ],
                "req": [
                    60
                ],
                "pos": [
                    20.71,
                    -61.43
                ],
                "id": [
                    "33042507"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "042507"
                    }
                ],
                "deps": [
                    2
                ]
            },
            {
                "name": "Bound Aegis",
                "desc": [
                    "Bound shields increase your Magic Resistance by 25%."
                ],
                "req": [
                    80
                ],
                "pos": [
                    32.14,
                    -92.5
                ],
                "id": [
                    "33042508"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "042508"
                    }
                ],
                "deps": [
                    5
                ]
            },
            {
                "name": "Dark Oath",
                "desc": [
                    "Summoned creatures last twice as long."
                ],
                "req": [
                    20
                ],
                "pos": [
                    93.93,
                    -6.43
                ],
                "id": [
                    "000CB419"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0CB419"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Armor of Shadows",
                "desc": [
                    "Summoned creatures gain 150 Armor Rating and 25% Magic Resistance.",
                    "Summoned creatures gain 300 Armor Rating and 50% Magic Resistance."
                ],
                "req": [
                    30,
                    70
                ],
                "pos": [
                    113.57,
                    -31.07
                ],
                "id": [
                    "3356BCA4",
                    "33566B9E"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "56BCA4"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "566B9E"
                    }
                ],
                "levels": 2,
                "deps": [
                    7
                ]
            },
            {
                "name": "Daedric Pact",
                "desc": [
                    "Summoned creatures have 100 extra Health, Magicka, and Stamina.",
                    "Summoned creatures have 200 extra Health, Magicka, and Stamina."
                ],
                "req": [
                    40,
                    80
                ],
                "pos": [
                    123.57,
                    -55.71
                ],
                "id": [
                    "00105F30",
                    "33A3A163"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "105F30"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "A3A163"
                    }
                ],
                "levels": 2,
                "deps": [
                    8
                ]
            },
            {
                "name": "Ritual of Power",
                "desc": [
                    "Summoned creatures deal 25% more damage.",
                    "Summoned creatures deal 50% more damage."
                ],
                "req": [
                    60,
                    90
                ],
                "pos": [
                    118.93,
                    -89.64
                ],
                "id": [
                    "33A3A164",
                    "3369174C"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "A3A164"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "69174C"
                    }
                ],
                "levels": 2,
                "deps": [
                    9
                ]
            },
            {
                "name": "Doors of Oblivion",
                "desc": [
                    "You can summon one additional creature."
                ],
                "req": [
                    100
                ],
                "pos": [
                    98.57,
                    -114.29
                ],
                "id": [
                    "000D5F1C"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0D5F1C"
                    }
                ],
                "deps": [
                    10
                ]
            },
            {
                "name": "Undead Servant",
                "desc": [
                    "Reanimated zombies last five times longer. ",
                    "Reanimated zombies last until killed."
                ],
                "req": [
                    20,
                    80
                ],
                "pos": [
                    80.0,
                    -13.57
                ],
                "id": [
                    "3369174D",
                    "33A44365"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "69174D"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "A44365"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Necrosis",
                "desc": [
                    "Reanimated zombies slowly restore lost Health.",
                    "Reanimated zombies quickly restore lost Health."
                ],
                "req": [
                    30,
                    70
                ],
                "pos": [
                    90.71,
                    -29.64
                ],
                "id": [
                    "000581DD",
                    "33A49467"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0581DD"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "A49467"
                    }
                ],
                "levels": 2,
                "deps": [
                    12
                ]
            },
            {
                "name": "Corpse Preparation",
                "desc": [
                    "Reanimated zombies no longer disintegrate when they die. "
                ],
                "req": [
                    40
                ],
                "pos": [
                    96.43,
                    -51.07
                ],
                "id": [
                    "33566BA0"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "566BA0"
                    }
                ],
                "deps": [
                    13
                ]
            },
            {
                "name": "Army of the Dead",
                "desc": [
                    "You can reanimate one additional zombie.",
                    "You can reanimate two additional zombies."
                ],
                "req": [
                    60,
                    90
                ],
                "pos": [
                    91.07,
                    -76.79
                ],
                "id": [
                    "000581DE",
                    "336A5B5B"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0581DE"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "6A5B5B"
                    }
                ],
                "levels": 2,
                "deps": [
                    14
                ]
            },
            {
                "name": "Shade of the Revenant",
                "desc": [
                    "Once every 10 minutes, you can use the Mass Reanimation power to raise all nearby corpses for 120 seconds. "
                ],
                "req": [
                    100
                ],
                "pos": [
                    74.64,
                    -98.93
                ],
                "id": [
                    "3303D406"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "03D406"
                    }
                ],
                "deps": [
                    15
                ]
            },
            {
                "name": "Cultist",
                "desc": [
                    "Daedric blessings are twice as strong.",
                    "Daedric blessings are twice as strong, and you receive additional bonuses when you pray at their shrines. "
                ],
                "req": [
                    30,
                    60
                ],
                "pos": [
                    59.29,
                    -51.07
                ],
                "id": [
                    "33B508EF",
                    "33B508F0"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "B508EF"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "B508F0"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            }
        ]
    },
    {
        "name": "Destruction",
        "cname": "destruction",
        "perks": [
            {
                "name": "Destruction Mastery",
                "desc": [
                    "Destruction spells cost 25% less Magicka.",
                    "Destruction spells cost 50% less Magicka."
                ],
                "req": [
                    10,
                    50
                ],
                "pos": [
                    56.07,
                    10.36
                ],
                "id": [
                    "000F2CA8",
                    "000C44BF"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0F2CA8"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C44BF"
                    }
                ],
                "levels": 2
            },
            {
                "name": "Elementalist",
                "desc": [
                    "Destruction spells deal 25% more damage.",
                    "Destruction spells deal 50% more damage."
                ],
                "req": [
                    20,
                    70
                ],
                "pos": [
                    56.43,
                    -8.21
                ],
                "id": [
                    "3300AA00",
                    "3300AA01"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "00AA00"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "00AA01"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "North Wind",
                "desc": [
                    "Frost spells reduce enemy Frost Resistance by up to 50% for 10 seconds.",
                    "Frost spells reduce enemy Frost Resistance by up to 100% for 10 seconds."
                ],
                "req": [
                    40,
                    90
                ],
                "pos": [
                    51.79,
                    -42.86
                ],
                "id": [
                    "331EBA36",
                    "33B1DEEA"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "1EBA36"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "B1DEEA"
                    }
                ],
                "levels": 2,
                "deps": [
                    1
                ]
            },
            {
                "name": "Permafrost",
                "desc": [
                    "Frost spells reduce enemy Movement and Attack Speed by 25% for 10 seconds."
                ],
                "req": [
                    80
                ],
                "pos": [
                    46.43,
                    -73.21
                ],
                "id": [
                    "000F3933"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0F3933"
                    }
                ],
                "deps": [
                    2
                ]
            },
            {
                "name": "Deep Freeze",
                "desc": [
                    "Frost spells have a chance to encase enemies in ice."
                ],
                "req": [
                    100
                ],
                "pos": [
                    42.5,
                    -98.21
                ],
                "id": [
                    "337FDFC3"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "7FDFC3"
                    }
                ],
                "deps": [
                    3
                ]
            },
            {
                "name": "Firebrand",
                "desc": [
                    "Fire spells brand enemies for 10 seconds. Branded targets take 25% extra damage from Fire spells.",
                    "Fire spells brand enemies for 10 seconds. Branded targets take 50% extra damage from Fire spells."
                ],
                "req": [
                    40,
                    90
                ],
                "pos": [
                    73.93,
                    -42.5
                ],
                "id": [
                    "331EBA35",
                    "33B0EBE7"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "1EBA35"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "B0EBE7"
                    }
                ],
                "levels": 2,
                "deps": [
                    1
                ]
            },
            {
                "name": "Combustion",
                "desc": [
                    "Fire spells ignite enemies, dealing extra damage over 10 seconds."
                ],
                "req": [
                    80
                ],
                "pos": [
                    74.29,
                    -71.07
                ],
                "id": [
                    "337FDFC2"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "7FDFC2"
                    }
                ],
                "deps": [
                    5
                ]
            },
            {
                "name": "Wildfire",
                "desc": [
                    "Fire spells have a chance to incinerate targets when they fall below half Health. "
                ],
                "req": [
                    100
                ],
                "pos": [
                    72.5,
                    -97.86
                ],
                "id": [
                    "000F392E"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0F392E"
                    }
                ],
                "deps": [
                    6
                ]
            },
            {
                "name": "Unstable Current",
                "desc": [
                    "Shock spells have a 25% chance to deal double damage.",
                    "Shock spells have a 50% chance to deal double damage."
                ],
                "req": [
                    40,
                    90
                ],
                "pos": [
                    27.86,
                    -40.71
                ],
                "id": [
                    "331EBA37",
                    "33B1DEEB"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "1EBA37"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "B1DEEB"
                    }
                ],
                "levels": 2,
                "deps": [
                    1
                ]
            },
            {
                "name": "Static Charge",
                "desc": [
                    "Shock spells deal double damage to enemy Magicka."
                ],
                "req": [
                    80
                ],
                "pos": [
                    19.64,
                    -71.79
                ],
                "id": [
                    "000F3F0E"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0F3F0E"
                    }
                ],
                "deps": [
                    8
                ]
            },
            {
                "name": "Power Surge",
                "desc": [
                    "Killing an enemy with a Shock spell has a chance to restore 100 Magicka."
                ],
                "req": [
                    100
                ],
                "pos": [
                    3.93,
                    -100.36
                ],
                "id": [
                    "337FDFC4"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "7FDFC4"
                    }
                ],
                "deps": [
                    9
                ]
            },
            {
                "name": "Evocation",
                "desc": [
                    "Destruction cloak spells last twice as long."
                ],
                "req": [
                    60
                ],
                "pos": [
                    29.64,
                    -15.71
                ],
                "id": [
                    "3300AA02"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "00AA02"
                    }
                ],
                "deps": [
                    1
                ]
            },
            {
                "name": "Power of the Elements",
                "desc": [
                    "Wall spells deal extra damage over time."
                ],
                "req": [
                    90
                ],
                "pos": [
                    6.07,
                    -40.0
                ],
                "id": [
                    "33019D03"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "019D03"
                    }
                ],
                "deps": [
                    11
                ]
            },
            {
                "name": "Rune Mage",
                "desc": [
                    "You can maintain up to three runes at once. ",
                    "You can maintain up to five runes at once. "
                ],
                "req": [
                    40,
                    80
                ],
                "pos": [
                    85.71,
                    -15.71
                ],
                "id": [
                    "00105F32",
                    "33B97790"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "105F32"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "B97790"
                    }
                ],
                "levels": 2,
                "deps": [
                    1
                ]
            },
            {
                "name": "Spell Surge",
                "desc": [
                    "Dual casting a Destruction spell costs 20% less Magicka."
                ],
                "req": [
                    30
                ],
                "pos": [
                    26.43,
                    1.43
                ],
                "id": [
                    "3335D3E1"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "35D3E1"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Impact",
                "desc": [
                    "Destruction spells have a 50% chance to stagger an opponent when dual cast."
                ],
                "req": [
                    60
                ],
                "pos": [
                    -1.43,
                    -30.36
                ],
                "id": [
                    "000153D2"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0153D2"
                    }
                ],
                "deps": [
                    14
                ]
            },
            {
                "name": "War Mage",
                "desc": [
                    "Touch spells cast 50% faster when you have a weapon equipped.",
                    "Touch spells cast 50% faster and deal 50% more damage to staggered targets when you have a weapon equipped."
                ],
                "req": [
                    30,
                    60
                ],
                "pos": [
                    83.93,
                    1.07
                ],
                "id": [
                    "3328DAA0",
                    "3328DAA1"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "28DAA0"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "28DAA1"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Aspection",
                "desc": [
                    "Unaspected spells trigger additional effects depending on their damage type."
                ],
                "req": [
                    60
                ],
                "pos": [
                    93.93,
                    -41.07
                ],
                "id": [
                    "FE0B280E"
                ],
                "forms": [
                    {
                        "plugin": "Ascension.esp",
                        "formId": "00080E",
                        "light": true
                    }
                ],
                "deps": [
                    1
                ]
            },
            {
                "name": "Execution",
                "desc": [
                    "Unaspected spells deal 50% extra damage to targets who fall below half Health. ",
                    "Unaspected spells deal double damage to targets who fall below half Health. "
                ],
                "req": [
                    80,
                    100
                ],
                "pos": [
                    95.36,
                    -91.79
                ],
                "id": [
                    "FE0B2810",
                    "FE0B280F"
                ],
                "forms": [
                    {
                        "plugin": "Ascension.esp",
                        "formId": "000810",
                        "light": true
                    },
                    {
                        "plugin": "Ascension.esp",
                        "formId": "00080F",
                        "light": true
                    }
                ],
                "levels": 2,
                "deps": [
                    17
                ]
            },
            {
                "name": "Magic Mantle",
                "desc": [
                    "Cloak spells last 50% longer.",
                    "Cloak spells last 100% longer."
                ],
                "req": [
                    30,
                    60
                ],
                "pos": [
                    4.29,
                    -3.57
                ],
                "id": [
                    "FE0B280D",
                    "FE0B281D"
                ],
                "forms": [
                    {
                        "plugin": "Ascension.esp",
                        "formId": "00080D",
                        "light": true
                    },
                    {
                        "plugin": "Ascension.esp",
                        "formId": "00081D",
                        "light": true
                    }
                ],
                "levels": 2,
                "deps": [
                    14
                ]
            },
            {
                "name": "Destructive Barrier",
                "desc": [
                    "Cloak spells last three times as long when dual cast."
                ],
                "req": [
                    40
                ],
                "pos": [
                    -10.36,
                    -22.86
                ],
                "id": [
                    "FE0B281C"
                ],
                "forms": [
                    {
                        "plugin": "Ascension.esp",
                        "formId": "00081C",
                        "light": true
                    }
                ],
                "deps": [
                    19
                ]
            }
        ]
    },
    {
        "name": "Enchanting",
        "cname": "enchanting",
        "perks": [
            {
                "name": "Enchanting Mastery",
                "desc": [
                    "Enchantments you create are 25% stronger, and soul gems restore 25% more charge.",
                    "Enchantments you create are 50% stronger, and soul gems restore 50% more charge."
                ],
                "req": [
                    10,
                    50
                ],
                "pos": [
                    48.93,
                    -0.71
                ],
                "id": [
                    "000BEE97",
                    "000C367C"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0BEE97"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C367C"
                    }
                ],
                "levels": 2
            },
            {
                "name": "Soul Stone",
                "desc": [
                    "You have a small chance to find filled soul gems on slain enemies."
                ],
                "req": [
                    20
                ],
                "pos": [
                    52.14,
                    -48.21
                ],
                "id": [
                    "3336C2E9"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "36C2E9"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Channeler",
                "desc": [
                    "Staves regenerate lost charge slowly outside of combat.",
                    "Staves regenerate lost charge quickly outside of combat."
                ],
                "req": [
                    30,
                    60
                ],
                "pos": [
                    28.93,
                    -19.29
                ],
                "id": [
                    "3389AF29",
                    "33098638"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "89AF29"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "098638"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Overcharge",
                "desc": [
                    "Staves are 50% stronger and cost 50% more when used with an empty offhand.",
                    "Staves are twice as strong and cost twice as much when used with an empty offhand."
                ],
                "req": [
                    40,
                    70
                ],
                "pos": [
                    17.5,
                    -43.21
                ],
                "id": [
                    "33065C28",
                    "33065C2A"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "065C28"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "065C2A"
                    }
                ],
                "levels": 2,
                "deps": [
                    2
                ]
            },
            {
                "name": "Scribe",
                "desc": [
                    "Scrolls are 50% stronger.",
                    "Scrolls are twice as strong."
                ],
                "req": [
                    40,
                    90
                ],
                "pos": [
                    81.79,
                    -29.64
                ],
                "id": [
                    "00108A44",
                    "33D78707"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "108A44"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "D78707"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Armor Enchanter",
                "desc": [
                    "Armor and jewelry enchantments you create are 50% stronger.",
                    "Armor and jewelry enchantments you create are twice as strong. "
                ],
                "req": [
                    30,
                    70
                ],
                "pos": [
                    27.5,
                    -63.93
                ],
                "id": [
                    "00058F7E",
                    "00058F81"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F7E"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F81"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Twin Secrets",
                "desc": [
                    "You can place two enchantments on a single item."
                ],
                "req": [
                    100
                ],
                "pos": [
                    53.93,
                    -124.29
                ],
                "id": [
                    "3336C2EA"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "36C2EA"
                    }
                ],
                "deps": [
                    5,
                    10
                ]
            },
            {
                "name": "Conduit",
                "desc": [
                    "Weapon enchantments cost 50% less charge."
                ],
                "req": [
                    30
                ],
                "pos": [
                    25.71,
                    -6.43
                ],
                "id": [
                    "00058F80"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F80"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Empowered Strike",
                "desc": [
                    "Weapon enchantments deal double damage on power attacks."
                ],
                "req": [
                    60
                ],
                "pos": [
                    8.21,
                    -24.29
                ],
                "id": [
                    "01ADA179"
                ],
                "forms": [
                    {
                        "plugin": "Update.esm",
                        "formId": "ADA179"
                    }
                ],
                "deps": [
                    7
                ]
            },
            {
                "name": "Seeker",
                "desc": [
                    "Scrolls last three times as long. ",
                    "Scrolls last five times as long. "
                ],
                "req": [
                    20,
                    70
                ],
                "pos": [
                    85.71,
                    -8.57
                ],
                "id": [
                    "33D73605",
                    "33D78706"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "D73605"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "D78706"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Weapon Enchanter",
                "desc": [
                    "Weapon enchantments you create are 50% stronger and have 50% more charge. ",
                    "Weapon enchantments you create are twice as strong and have twice as much charge."
                ],
                "req": [
                    30,
                    70
                ],
                "pos": [
                    77.86,
                    -63.57
                ],
                "id": [
                    "00058F7D",
                    "00058F7C"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F7D"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F7C"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            }
        ]
    },
    {
        "name": "Hand to Hand",
        "cname": "lockpicking",
        "perks": [
            {
                "name": "Hand to Hand Mastery",
                "desc": [
                    "Unarmed attacks deal 25% more damage.",
                    "Unarmed attacks deal 50% more damage."
                ],
                "req": [
                    10,
                    50
                ],
                "pos": [
                    51.07,
                    5.36
                ],
                "id": [
                    "FE0B0004",
                    "FE0B0005"
                ],
                "forms": [
                    {
                        "plugin": "HandtoHand.esp",
                        "formId": "000004",
                        "light": true
                    },
                    {
                        "plugin": "HandtoHand.esp",
                        "formId": "000005",
                        "light": true
                    }
                ],
                "levels": 2
            },
            {
                "name": "Brawler's Stance",
                "desc": [
                    "Unarmed power attacks cost 20% less Stamina and deal 25% extra stagger."
                ],
                "req": [
                    30
                ],
                "pos": [
                    52.14,
                    -28.21
                ],
                "id": [
                    "FE0B0003"
                ],
                "forms": [
                    {
                        "plugin": "HandtoHand.esp",
                        "formId": "000003",
                        "light": true
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Knockdown Punch",
                "desc": [
                    "Unarmed power attacks have a chance to knock enemies down."
                ],
                "req": [
                    80
                ],
                "pos": [
                    11.07,
                    -72.14
                ],
                "id": [
                    "FE0B0803"
                ],
                "forms": [
                    {
                        "plugin": "HandtoHand.esp",
                        "formId": "000803",
                        "light": true
                    }
                ],
                "deps": [
                    1
                ]
            },
            {
                "name": "Fists of Fury",
                "desc": [
                    "Repeated unarmed power attacks against a single target deal up to 50% extra damage."
                ],
                "req": [
                    100
                ],
                "pos": [
                    52.86,
                    -127.14
                ],
                "id": [
                    "FE0B0006"
                ],
                "forms": [
                    {
                        "plugin": "HandtoHand.esp",
                        "formId": "000006",
                        "light": true
                    }
                ],
                "deps": [
                    2,
                    4
                ]
            },
            {
                "name": "Overwhelm",
                "desc": [
                    "Unarmed power attacks are 20% faster and deal 25% extra damage."
                ],
                "req": [
                    60
                ],
                "pos": [
                    97.14,
                    -73.21
                ],
                "id": [
                    "FE0B0802"
                ],
                "forms": [
                    {
                        "plugin": "HandtoHand.esp",
                        "formId": "000802",
                        "light": true
                    }
                ],
                "deps": [
                    1
                ]
            },
            {
                "name": "Brace",
                "desc": [
                    "You resist 10% of all incoming weapon and spell damage while both hands are empty.",
                    "You resist 20% of all incoming weapon and spell damage while both hands are empty."
                ],
                "req": [
                    40,
                    70
                ],
                "pos": [
                    53.57,
                    -71.43
                ],
                "id": [
                    "FE0B0805",
                    "FE0B0010"
                ],
                "forms": [
                    {
                        "plugin": "HandtoHand.esp",
                        "formId": "000805",
                        "light": true
                    },
                    {
                        "plugin": "HandtoHand.esp",
                        "formId": "000010",
                        "light": true
                    }
                ],
                "levels": 2,
                "deps": [
                    1
                ]
            },
            {
                "name": "Heavy Blows",
                "desc": [
                    "Unarmed attacks deal Stamina damage.",
                    "Unarmed attacks deal Magicka and Stamina damage."
                ],
                "req": [
                    20,
                    70
                ],
                "pos": [
                    81.43,
                    -21.07
                ],
                "id": [
                    "FE0B0008",
                    "FE0B0007"
                ],
                "forms": [
                    {
                        "plugin": "HandtoHand.esp",
                        "formId": "000008",
                        "light": true
                    },
                    {
                        "plugin": "HandtoHand.esp",
                        "formId": "000007",
                        "light": true
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Rapid Strikes",
                "desc": [
                    "Unarmed attacks are 10% faster.",
                    "Unarmed attacks are 20% faster."
                ],
                "req": [
                    40,
                    90
                ],
                "pos": [
                    22.14,
                    -20.71
                ],
                "id": [
                    "FE0B0800",
                    "FE0B0801"
                ],
                "forms": [
                    {
                        "plugin": "HandtoHand.esp",
                        "formId": "000800",
                        "light": true
                    },
                    {
                        "plugin": "HandtoHand.esp",
                        "formId": "000801",
                        "light": true
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            }
        ]
    },
    {
        "name": "Heavy Armor",
        "cname": "heavyarmor",
        "perks": [
            {
                "name": "Heavy Armor Mastery",
                "desc": [
                    "Heavy armor is 25% more effective and weighs 50% less.",
                    "Heavy armor is 50% more effective and weighs nothing when worn."
                ],
                "req": [
                    10,
                    50
                ],
                "pos": [
                    74.29,
                    2.14
                ],
                "id": [
                    "000BCD2A",
                    "0007935E"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0BCD2A"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "07935E"
                    }
                ],
                "levels": 2
            },
            {
                "name": "Juggernaut",
                "desc": [
                    "Your Armor Rating is increased by 100 while wearing heavy armor."
                ],
                "req": [
                    30
                ],
                "pos": [
                    43.57,
                    -18.57
                ],
                "id": [
                    "00058F6F"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F6F"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Immovable",
                "desc": [
                    "Your Injury and Stagger Resistance are increased by 50% while wearing heavy armor."
                ],
                "req": [
                    40
                ],
                "pos": [
                    12.14,
                    -48.93
                ],
                "id": [
                    "00058F6E"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F6E"
                    }
                ],
                "deps": [
                    1
                ]
            },
            {
                "name": "Unstoppable",
                "desc": [
                    "You are immune to stagger and interrupts for 10 seconds after being staggered while wearing heavy armor."
                ],
                "req": [
                    60
                ],
                "pos": [
                    -8.57,
                    -81.79
                ],
                "id": [
                    "00107832"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "107832"
                    }
                ],
                "deps": [
                    2
                ]
            },
            {
                "name": "Unbreakable",
                "desc": [
                    "You have a 50% chance to stagger melee attackers for 10 seconds after you are staggered while wearing heavy armor."
                ],
                "req": [
                    90
                ],
                "pos": [
                    -10.0,
                    -124.64
                ],
                "id": [
                    "00105F33"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "105F33"
                    }
                ],
                "deps": [
                    3
                ]
            },
            {
                "name": "Conditioning",
                "desc": [
                    "Your Health Regeneration is increased by 50% while wearing heavy armor.",
                    "Your Health Regeneration is increased by 100% while wearing heavy armor."
                ],
                "req": [
                    20,
                    60
                ],
                "pos": [
                    102.5,
                    -19.64
                ],
                "id": [
                    "00058F6D",
                    "330F89DB"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F6D"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "0F89DB"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Constitution",
                "desc": [
                    "You resist 25% of incoming attack of opportunity damage while wearing heavy armor.",
                    "You resist 50% of incoming attack of opportunity damage while wearing heavy armor."
                ],
                "req": [
                    40,
                    80
                ],
                "pos": [
                    131.07,
                    -44.29
                ],
                "id": [
                    "000BCD2B",
                    "33937E48"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0BCD2B"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "937E48"
                    }
                ],
                "levels": 2,
                "deps": [
                    5
                ]
            },
            {
                "name": "Impenetrable",
                "desc": [
                    "Your Critical and Bleed Resistance are increased by 50% while wearing heavy armor."
                ],
                "req": [
                    70
                ],
                "pos": [
                    150.0,
                    -75.0
                ],
                "id": [
                    "00058F6C"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F6C"
                    }
                ],
                "deps": [
                    6
                ]
            },
            {
                "name": "Invincible",
                "desc": [
                    "Your Health no longer regenerates slower in combat while wearing heavy armor."
                ],
                "req": [
                    100
                ],
                "pos": [
                    157.5,
                    -125.36
                ],
                "id": [
                    "330D52CF"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "0D52CF"
                    }
                ],
                "deps": [
                    7
                ]
            }
        ]
    },
    {
        "name": "Illusion",
        "cname": "illusion",
        "perks": [
            {
                "name": "Illusion Mastery",
                "desc": [
                    "Illusion spells cost 25% less Magicka.",
                    "Illusion spells cost 50% less Magicka."
                ],
                "req": [
                    10,
                    50
                ],
                "pos": [
                    38.0,
                    -2.5
                ],
                "id": [
                    "000F2CA9",
                    "000C44C3"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0F2CA9"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C44C3"
                    }
                ],
                "levels": 2
            },
            {
                "name": "Serenity",
                "desc": [
                    "Calm spells last for one additional hit."
                ],
                "req": [
                    30
                ],
                "pos": [
                    80.0,
                    -26.0
                ],
                "id": [
                    "00059B77"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "059B77"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Tranquility",
                "desc": [
                    "Silence spells dispel any magical effects on the target."
                ],
                "req": [
                    70
                ],
                "pos": [
                    68.93,
                    -42.14
                ],
                "id": [
                    "00059B78"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "059B78"
                    }
                ],
                "deps": [
                    1
                ]
            },
            {
                "name": "Stasis",
                "desc": [
                    "Paralysis spells last three times as long."
                ],
                "req": [
                    90
                ],
                "pos": [
                    71.5,
                    -71.5
                ],
                "id": [
                    "000C44B5"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C44B5"
                    }
                ],
                "deps": [
                    2
                ]
            },
            {
                "name": "Captivating Presence",
                "desc": [
                    "Illusion spells last 50% longer.",
                    "Illusion spells last twice as long."
                ],
                "req": [
                    20,
                    60
                ],
                "pos": [
                    22.5,
                    -29.29
                ],
                "id": [
                    "000581E2",
                    "333FA312"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0581E2"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "3FA312"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Indomitable Will",
                "desc": [
                    "Illusion spells are 50% stronger.",
                    "Illusion spells are twice as strong."
                ],
                "req": [
                    40,
                    80
                ],
                "pos": [
                    40.71,
                    -53.93
                ],
                "id": [
                    "33A2FF60",
                    "33B69E11"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "A2FF60"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "B69E11"
                    }
                ],
                "levels": 2,
                "deps": [
                    4
                ]
            },
            {
                "name": "Master of the Mind",
                "desc": [
                    "Illusion spells work on undead.",
                    "Illusion spells work on undead, daedra and automatons."
                ],
                "req": [
                    60,
                    100
                ],
                "pos": [
                    36.43,
                    -85.0
                ],
                "id": [
                    "00059B76",
                    "33EDAD54"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "059B76"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "EDAD54"
                    }
                ],
                "levels": 2,
                "deps": [
                    5
                ]
            },
            {
                "name": "Howl of Rage",
                "desc": [
                    "Frenzy spells increase the target's weapon damage by 50% against everyone except the caster."
                ],
                "req": [
                    30
                ],
                "pos": [
                    1.33,
                    -23.0
                ],
                "id": [
                    "330D01B1"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "0D01B1"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Aspect of Terror",
                "desc": [
                    "Fear spells reduce the target's Armor Rating by 150 and their Magic Resistance by 25%."
                ],
                "req": [
                    70
                ],
                "pos": [
                    7.14,
                    -40.36
                ],
                "id": [
                    "330D01BA"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "0D01BA"
                    }
                ],
                "deps": [
                    7
                ]
            },
            {
                "name": "Voice of Authority",
                "desc": [
                    "Command spells increase the target's Armor Rating by 150 and their Magic Resistance by 25%."
                ],
                "req": [
                    90
                ],
                "pos": [
                    6.79,
                    -67.14
                ],
                "id": [
                    "330D01BB"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "0D01BB"
                    }
                ],
                "deps": [
                    8
                ]
            },
            {
                "name": "Guidance",
                "desc": [
                    "Courage spells last three times as long."
                ],
                "req": [
                    30
                ],
                "pos": [
                    56.43,
                    -28.57
                ],
                "id": [
                    "33F4A371"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "F4A371"
                    }
                ],
                "deps": [
                    0
                ]
            }
        ]
    },
    {
        "name": "Light Armor",
        "cname": "lightarmor",
        "perks": [
            {
                "name": "Light Armor Mastery",
                "desc": [
                    "Light armor is 25% more effective and weighs 50% less when worn.",
                    "Light armor is 50% more effective and weighs nothing when worn."
                ],
                "req": [
                    10,
                    50
                ],
                "pos": [
                    34.29,
                    1.0
                ],
                "id": [
                    "000BE123",
                    "00079376"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0BE123"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "079376"
                    }
                ],
                "levels": 2
            },
            {
                "name": "Skirmisher",
                "desc": [
                    "Your Armor Rating is increased by 100 while wearing light armor."
                ],
                "req": [
                    30
                ],
                "pos": [
                    10.36,
                    -17.86
                ],
                "id": [
                    "00051B1C"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "051B1C"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Survivalist",
                "desc": [
                    "Your Poison and Disease Resistance are increased by 50% while wearing light armor."
                ],
                "req": [
                    40
                ],
                "pos": [
                    21.17,
                    -49.5
                ],
                "id": [
                    "33153BF8"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "153BF8"
                    }
                ],
                "deps": [
                    1
                ]
            },
            {
                "name": "Evasion",
                "desc": [
                    "Tap sprint to dodge while wearing light armor."
                ],
                "req": [
                    60
                ],
                "pos": [
                    -2.83,
                    -74.0
                ],
                "id": [
                    "330D01CD"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "0D01CD"
                    }
                ],
                "deps": [
                    2
                ]
            },
            {
                "name": "Fight or Flight",
                "desc": [
                    "You resist 50% of all incoming weapon and spell damage while dodging."
                ],
                "req": [
                    90
                ],
                "pos": [
                    12.86,
                    -102.5
                ],
                "id": [
                    "330D01CA"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "0D01CA"
                    }
                ],
                "deps": [
                    3
                ]
            },
            {
                "name": "Endurance",
                "desc": [
                    "Your Stamina Regeneration is increased by 50% while wearing light armor.",
                    "Your Stamina Regeneration is increased by 100% while wearing light armor."
                ],
                "req": [
                    20,
                    60
                ],
                "pos": [
                    59.29,
                    -23.57
                ],
                "id": [
                    "330D01CC",
                    "330F38D8"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "0D01CC"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "0F38D8"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Agility",
                "desc": [
                    "Your Movement Speed is increased by 10% while wearing light armor.",
                    "Your Movement Speed is increased by 20% while wearing light armor."
                ],
                "req": [
                    40,
                    80
                ],
                "pos": [
                    40.5,
                    -51.0
                ],
                "id": [
                    "00105F22",
                    "00051B17"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "105F22"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "051B17"
                    }
                ],
                "levels": 2,
                "deps": [
                    5
                ]
            },
            {
                "name": "Adrenaline",
                "desc": [
                    "You spend 20% less Stamina when power attacking or drawing a bow while wearing light armor."
                ],
                "req": [
                    70
                ],
                "pos": [
                    65.83,
                    -77.0
                ],
                "id": [
                    "00051B1B"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "051B1B"
                    }
                ],
                "deps": [
                    6
                ]
            },
            {
                "name": "Unhindered",
                "desc": [
                    "You regenerate Stamina slowly when attacking, blocking, or casting a spell while wearing light armor."
                ],
                "req": [
                    100
                ],
                "pos": [
                    48.0,
                    -103.5
                ],
                "id": [
                    "3315DDC6"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "15DDC6"
                    }
                ],
                "deps": [
                    7
                ]
            }
        ]
    },
    {
        "name": "One-handed",
        "cname": "onehanded",
        "perks": [
            {
                "name": "One-handed Mastery",
                "desc": [
                    "One-handed weapons deal 25% more damage.",
                    "One-handed weapons deal 50% more damage."
                ],
                "req": [
                    10,
                    50
                ],
                "pos": [
                    56.07,
                    4.64
                ],
                "id": [
                    "000BABE4",
                    "00079343"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0BABE4"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "079343"
                    }
                ],
                "levels": 2
            },
            {
                "name": "Bell Ringer",
                "desc": [
                    "Maces deal Stamina damage.",
                    "Maces deal Magicka and Stamina damage."
                ],
                "req": [
                    20,
                    70
                ],
                "pos": [
                    29.29,
                    -17.86
                ],
                "id": [
                    "0005F592",
                    "3351FD46"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "05F592"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "51FD46"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Armor Breaker",
                "desc": [
                    "Maces reduce enemy Armor Rating by 100 for 10 seconds.",
                    "Maces reduce enemy Armor Rating by 200 for 10 seconds."
                ],
                "req": [
                    40,
                    90
                ],
                "pos": [
                    7.86,
                    -35.36
                ],
                "id": [
                    "000C1E92",
                    "000C1E93"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C1E92"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C1E93"
                    }
                ],
                "levels": 2,
                "deps": [
                    1
                ]
            },
            {
                "name": "Precise Cuts",
                "desc": [
                    " Swords and daggers have a 20% chance of dealing critical damage.",
                    "Swords and daggers have a 20% chance of dealing critical damage. Your critical chance is doubled during attacks of opportunity."
                ],
                "req": [
                    20,
                    70
                ],
                "pos": [
                    86.07,
                    -17.86
                ],
                "id": [
                    "000C1E90",
                    "3351FD45"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C1E90"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "51FD45"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Keen Edge",
                "desc": [
                    "Swords and daggers deal three times more critical damage.",
                    "Swords and daggers deal five times more critical damage."
                ],
                "req": [
                    40,
                    90
                ],
                "pos": [
                    110.0,
                    -37.5
                ],
                "id": [
                    "0005F56F",
                    "000C1E91"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "05F56F"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C1E91"
                    }
                ],
                "levels": 2,
                "deps": [
                    3
                ]
            },
            {
                "name": "Hack and Slash",
                "desc": [
                    "War axes deal extra bleeding damage over 10 seconds.",
                    "War axes deal extra bleeding damage over 10 seconds. Staggered targets take 50% extra bleeding damage."
                ],
                "req": [
                    20,
                    70
                ],
                "pos": [
                    40.0,
                    -25.71
                ],
                "id": [
                    "000C3678",
                    "3351FD47"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C3678"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "51FD47"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Carve and Spit",
                "desc": [
                    "War axes deal three times as much bleeding damage over time.",
                    "War axes deal five times as much bleeding damage over time."
                ],
                "req": [
                    40,
                    90
                ],
                "pos": [
                    27.86,
                    -51.0
                ],
                "id": [
                    "0003FFFA",
                    "000C3679"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "03FFFA"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C3679"
                    }
                ],
                "levels": 2,
                "deps": [
                    5
                ]
            },
            {
                "name": "Fighting Stance",
                "desc": [
                    "One-handed power attacks cost 20% less Stamina and deal 25% extra stagger."
                ],
                "req": [
                    30
                ],
                "pos": [
                    57.14,
                    -32.86
                ],
                "id": [
                    "00052D50"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "052D50"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Overrun",
                "desc": [
                    "One-handed power attacks are 20% faster and deal 25% extra damage."
                ],
                "req": [
                    60
                ],
                "pos": [
                    72.17,
                    -69.64
                ],
                "id": [
                    "0003AF81"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "03AF81"
                    }
                ],
                "deps": [
                    7
                ]
            },
            {
                "name": "Warmaster",
                "desc": [
                    "Killing an enemy with a One-handed power attack restores 100 Stamina."
                ],
                "req": [
                    100
                ],
                "pos": [
                    59.64,
                    -160.0
                ],
                "id": [
                    "3336C6E9"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "36C6E9"
                    }
                ],
                "deps": [
                    8,
                    10
                ]
            },
            {
                "name": "Execute",
                "desc": [
                    "One-handed power attacks deal 50% extra damage to enemies who fall below half Health."
                ],
                "req": [
                    80
                ],
                "pos": [
                    44.0,
                    -69.64
                ],
                "id": [
                    "0003AFA6"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "03AFA6"
                    }
                ],
                "deps": [
                    7
                ]
            },
            {
                "name": "Twin Fury",
                "desc": [
                    "You resist 25% of incoming weapon and spell damage while performing a dual wield power attack.",
                    "You resist 50% of incoming weapon and spell damage while performing a dual wield power attack."
                ],
                "req": [
                    40,
                    70
                ],
                "pos": [
                    6.07,
                    -0.71
                ],
                "id": [
                    "00106258",
                    "33AA9796"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "106258"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "AA9796"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Flourish",
                "desc": [
                    "One-handed weapons swing 10% faster when wielded with an empty off-hand.",
                    "One-handed weapons swing 20% faster when wielded with an empty off-hand."
                ],
                "req": [
                    40,
                    70
                ],
                "pos": [
                    9.29,
                    -13.93
                ],
                "id": [
                    "33B5FC0E",
                    "33515C8E"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "B5FC0E"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "515C8E"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Biting Jabs",
                "desc": [
                    "Spears deal extra irresistible damage.",
                    "Spears deal irresistible damage to all targets in front of you."
                ],
                "req": [
                    20,
                    70
                ],
                "pos": [
                    73.93,
                    -26.07
                ],
                "id": [
                    "3338AD05",
                    "3338AD06"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "38AD05"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "38AD06"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Puncturing Sweeps",
                "desc": [
                    "Spears deal three times more irresistible damage.",
                    "Spears deal five times more irresistible damage."
                ],
                "req": [
                    40,
                    90
                ],
                "pos": [
                    92.86,
                    -53.57
                ],
                "id": [
                    "3338AD07",
                    "3338AD08"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "38AD07"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "38AD08"
                    }
                ],
                "levels": 2,
                "deps": [
                    13
                ]
            }
        ]
    },
    {
        "name": "Restoration",
        "cname": "restoration",
        "perks": [
            {
                "name": "Restoration Mastery",
                "desc": [
                    "Restoration spells cost 25% less Magicka.",
                    "Restoration spells cost 50% less Magicka."
                ],
                "req": [
                    10,
                    50
                ],
                "pos": [
                    65.71,
                    -2.5
                ],
                "id": [
                    "000F2CAA",
                    "000C44C7"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0F2CAA"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C44C7"
                    }
                ],
                "levels": 2
            },
            {
                "name": "Empowered Ward",
                "desc": [
                    "Ward spells resist 50% of incoming weapon damage."
                ],
                "req": [
                    20
                ],
                "pos": [
                    47.14,
                    -28.21
                ],
                "id": [
                    "339A234E"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "9A234E"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Radiant Ward",
                "desc": [
                    "Ward spells cost 50% less Magicka."
                ],
                "req": [
                    40
                ],
                "pos": [
                    30.36,
                    -48.21
                ],
                "id": [
                    "3333E9A2"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "33E9A2"
                    }
                ],
                "deps": [
                    1
                ]
            },
            {
                "name": "Prismatic Ward",
                "desc": [
                    "Ward spells absorb Magicka from incoming spells."
                ],
                "req": [
                    70
                ],
                "pos": [
                    -2.14,
                    -63.93
                ],
                "id": [
                    "332DEA8B"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "2DEA8B"
                    }
                ],
                "deps": [
                    2
                ]
            },
            {
                "name": "Affliction",
                "desc": [
                    "Poison spells deal 25% more damage.",
                    "Poison spells deal 50% more damage."
                ],
                "req": [
                    20,
                    70
                ],
                "pos": [
                    83.57,
                    -28.21
                ],
                "id": [
                    "00068BCC",
                    "335851B3"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "068BCC"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "5851B3"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Plague",
                "desc": [
                    "Poison spells reduce enemy Poison Resistance by up to 50% for 10 seconds.",
                    "Poison spells reduce enemy Poison Resistance by up to 100% for 10 seconds."
                ],
                "req": [
                    40,
                    90
                ],
                "pos": [
                    99.29,
                    -48.57
                ],
                "id": [
                    "33098642",
                    "33B5AB06"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "098642"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "B5AB06"
                    }
                ],
                "levels": 2,
                "deps": [
                    4
                ]
            },
            {
                "name": "Scourge",
                "desc": [
                    "Poison spells deal 50% extra damage to targets who fall below half Health. ",
                    "Poison spells deal double damage to targets who fall below half Health. "
                ],
                "req": [
                    80,
                    100
                ],
                "pos": [
                    135.0,
                    -61.79
                ],
                "id": [
                    "335851B5",
                    "33D1D4CA"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "5851B5"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "D1D4CA"
                    }
                ],
                "levels": 2,
                "deps": [
                    5
                ]
            },
            {
                "name": "Recovery",
                "desc": [
                    "Healing spells are 50% stronger.",
                    "Healing spells are twice as strong."
                ],
                "req": [
                    20,
                    70
                ],
                "pos": [
                    63.93,
                    -32.5
                ],
                "id": [
                    "3333E9A0",
                    "33AEB4DC"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "33E9A0"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "AEB4DC"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Repose",
                "desc": [
                    "Regeneration, Attunement, and Circle spells last twice as long."
                ],
                "req": [
                    60
                ],
                "pos": [
                    48.21,
                    -53.57
                ],
                "id": [
                    "33B9C891"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "B9C891"
                    }
                ],
                "deps": [
                    7
                ]
            },
            {
                "name": "Resolve",
                "desc": [
                    "Healing spells are 50% stronger when the target falls below half Health."
                ],
                "req": [
                    80
                ],
                "pos": [
                    60.36,
                    -82.86
                ],
                "id": [
                    "3366E047"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "66E047"
                    }
                ],
                "deps": [
                    8,
                    11
                ]
            },
            {
                "name": "Renewal",
                "desc": [
                    "When you fall below 25% Health while in combat, you automatically heal yourself back to full. This effect can occur once every ten minutes."
                ],
                "req": [
                    100
                ],
                "pos": [
                    87.14,
                    -102.86
                ],
                "id": [
                    "000A3F64"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0A3F64"
                    }
                ],
                "deps": [
                    9
                ]
            },
            {
                "name": "Respite",
                "desc": [
                    "Instant healing spells such as Fast Healing and Close Wounds also restore Stamina."
                ],
                "req": [
                    40
                ],
                "pos": [
                    77.5,
                    -53.57
                ],
                "id": [
                    "000581F9"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0581F9"
                    }
                ],
                "deps": [
                    7
                ]
            },
            {
                "name": "Dawn's Wrath",
                "desc": [
                    "Turn Undead spells are 50% stronger.",
                    "Turn Undead spells are twice as strong."
                ],
                "req": [
                    40,
                    80
                ],
                "pos": [
                    37.14,
                    -19.64
                ],
                "id": [
                    "33673148",
                    "33B69E12"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "673148"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "B69E12"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Burning Light",
                "desc": [
                    "Turn Undead spells deal damage over time."
                ],
                "req": [
                    60
                ],
                "pos": [
                    10.71,
                    -35.36
                ],
                "id": [
                    "335800B2"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "5800B2"
                    }
                ],
                "deps": [
                    12
                ]
            },
            {
                "name": "Illumination",
                "desc": [
                    "Regeneration and Attunement spells last twice as long when dual cast."
                ],
                "req": [
                    40
                ],
                "pos": [
                    -10.0,
                    -25.36
                ],
                "id": [
                    "000581F4"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0581F4"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Pilgrim",
                "desc": [
                    "Divine blessings are twice as strong.",
                    "Divine blessings are twice as strong, and you receive additional bonuses when you pray at their shrines. "
                ],
                "req": [
                    30,
                    60
                ],
                "pos": [
                    140.71,
                    -24.64
                ],
                "id": [
                    "333258C7",
                    "000581F5"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "3258C7"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0581F5"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Divine Glory",
                "desc": [
                    "Sun spells deal 25% more damage.",
                    "Sun spells deal 50% more damage."
                ],
                "req": [
                    20,
                    70
                ],
                "pos": [
                    93.57,
                    -19.29
                ],
                "id": [
                    "000581E4",
                    "332E8C8C"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0581E4"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "2E8C8C"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Power of the Light",
                "desc": [
                    "Sun spells deal extra damage over time.",
                    "Sun spells deal even more damage over time."
                ],
                "req": [
                    40,
                    90
                ],
                "pos": [
                    119.29,
                    -33.93
                ],
                "id": [
                    "333C2802",
                    "33B5AB05"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "3C2802"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "B5AB05"
                    }
                ],
                "levels": 2,
                "deps": [
                    16
                ]
            }
        ]
    },
    {
        "name": "Security",
        "cname": "pickpocket",
        "perks": [
            {
                "name": "Security Mastery",
                "desc": [
                    "You are 25% more likely to succeed at lockpicking and pickpocketing.",
                    "You are 50% more likely to succeed at lockpicking and pickpocketing."
                ],
                "req": [
                    10,
                    50
                ],
                "pos": [
                    37.5,
                    5.71
                ],
                "id": [
                    "000BE124",
                    "00018E6A"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0BE124"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "018E6A"
                    }
                ],
                "levels": 2
            },
            {
                "name": "Golden Touch",
                "desc": [
                    "You find more gold when opening chests and picking pockets. "
                ],
                "req": [
                    20
                ],
                "pos": [
                    47.14,
                    -12.14
                ],
                "id": [
                    "0005820A"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "05820A"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Sleight of Hand",
                "desc": [
                    "You are 50% more likely to succeed at pickpocketing while undetected.\r\n"
                ],
                "req": [
                    40
                ],
                "pos": [
                    63.21,
                    -43.93
                ],
                "id": [
                    "000D79A0"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0D79A0"
                    }
                ],
                "deps": [
                    1
                ]
            },
            {
                "name": "Misdirection",
                "desc": [
                    "Your chance to succeed at pickpocketing can now reach 100%. "
                ],
                "req": [
                    60
                ],
                "pos": [
                    77.5,
                    -71.07
                ],
                "id": [
                    "FE0B001B"
                ],
                "forms": [
                    {
                        "plugin": "HandtoHand.esp",
                        "formId": "00001B",
                        "light": true
                    }
                ],
                "deps": [
                    2
                ]
            },
            {
                "name": "Perfect Touch",
                "desc": [
                    "You can pickpocket equipped armor and jewelry",
                    "You can pickpocket equipped weapons, armor, and jewelry."
                ],
                "req": [
                    80,
                    100
                ],
                "pos": [
                    91.07,
                    -97.5
                ],
                "id": [
                    "00058201",
                    "00058205"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058201"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058205"
                    }
                ],
                "levels": 2,
                "deps": [
                    3
                ]
            },
            {
                "name": "Poisoned Fruit",
                "desc": [
                    "Poisons that you place in enemy pockets are 50% stronger and last twice as slong.",
                    "Poisons that you place in enemy pockets are twice as strong and last three times as slong."
                ],
                "req": [
                    30,
                    70
                ],
                "pos": [
                    79.64,
                    -18.57
                ],
                "id": [
                    "00105F28",
                    "33EC184F"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "105F28"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "EC184F"
                    }
                ],
                "levels": 2,
                "deps": [
                    1
                ]
            },
            {
                "name": "Deep Pockets",
                "desc": [
                    "Your Carry Weight is increased by 50.",
                    "Your Carry Weight is increased by 100."
                ],
                "req": [
                    30,
                    60
                ],
                "pos": [
                    16.07,
                    -18.93
                ],
                "id": [
                    "00096590",
                    "3310CDEA"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "096590"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "10CDEA"
                    }
                ],
                "levels": 2,
                "deps": [
                    1
                ]
            },
            {
                "name": "Locksmith",
                "desc": [
                    "Your lockpicks start close to the opening position, and their position no longer resets upon breaking. "
                ],
                "req": [
                    40
                ],
                "pos": [
                    28.21,
                    -31.43
                ],
                "id": [
                    "00058209"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058209"
                    }
                ],
                "deps": [
                    1
                ]
            },
            {
                "name": "Dungeon Delver",
                "desc": [
                    "You find more rare loot in dungeons."
                ],
                "req": [
                    70
                ],
                "pos": [
                    9.64,
                    -50.36
                ],
                "id": [
                    "00105F26"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "105F26"
                    }
                ],
                "deps": [
                    7
                ]
            },
            {
                "name": "Treasure Hunter",
                "desc": [
                    "You have a chance to find valuable treasure in any chest. "
                ],
                "req": [
                    90
                ],
                "pos": [
                    -8.93,
                    -70.36
                ],
                "id": [
                    "00058208"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058208"
                    }
                ],
                "deps": [
                    8
                ]
            }
        ]
    },
    {
        "name": "Smithing",
        "cname": "smithing",
        "perks": [
            {
                "name": "Smithing Mastery",
                "desc": [
                    "You can temper all items by one additional tier.",
                    "You can temper all items by two additional tiers."
                ],
                "req": [
                    10,
                    50
                ],
                "pos": [
                    101.43,
                    -13.57
                ],
                "id": [
                    "33334BCC",
                    "330B1B74"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "334BCC"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "0B1B74"
                    }
                ],
                "levels": 2
            },
            {
                "name": "Blacksmith",
                "desc": [
                    "You can temper all items by one additional tier."
                ],
                "req": [
                    30
                ],
                "pos": [
                    134.29,
                    -38.93
                ],
                "id": [
                    "330B1B71"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "0B1B71"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Armorer",
                "desc": [
                    "You can temper all items by one additional tier."
                ],
                "req": [
                    70
                ],
                "pos": [
                    157.86,
                    -57.5
                ],
                "id": [
                    "330B1B72"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "0B1B72"
                    }
                ],
                "deps": [
                    1
                ]
            },
            {
                "name": "Forgemaster",
                "desc": [
                    "You can temper all items by one additional tier."
                ],
                "req": [
                    90
                ],
                "pos": [
                    140.0,
                    -70.36
                ],
                "id": [
                    "330B1B73"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "0B1B73"
                    }
                ],
                "deps": [
                    2
                ]
            },
            {
                "name": "Basic Smithing",
                "desc": [
                    "You can create Steel and Leather items at any forge."
                ],
                "req": [
                    20
                ],
                "pos": [
                    62.5,
                    -32.5
                ],
                "id": [
                    "000CB40D"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0CB40D"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Journeyman Smithing",
                "desc": [
                    "You can create Dwarven, Steel Plate, and Scaled items at any forge."
                ],
                "req": [
                    40
                ],
                "pos": [
                    29.64,
                    -48.93
                ],
                "id": [
                    "000CB414"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0CB414"
                    }
                ],
                "deps": [
                    4
                ]
            },
            {
                "name": "Rare Smithing",
                "desc": [
                    "You can create Elven items at any forge."
                ],
                "req": [
                    60
                ],
                "pos": [
                    60.36,
                    -57.5
                ],
                "id": [
                    "000CB40F"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0CB40F"
                    }
                ],
                "deps": [
                    5
                ]
            },
            {
                "name": "Exotic Smithing",
                "desc": [
                    "You can create Glass items at any forge."
                ],
                "req": [
                    80
                ],
                "pos": [
                    92.5,
                    -57.5
                ],
                "id": [
                    "000CB411"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0CB411"
                    }
                ],
                "deps": [
                    6
                ]
            },
            {
                "name": "Mythic Smithing",
                "desc": [
                    "You can create Daedric and Dragon items at any forge."
                ],
                "req": [
                    100
                ],
                "pos": [
                    109.29,
                    -72.5
                ],
                "id": [
                    "000CB413"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0CB413"
                    }
                ],
                "deps": [
                    7,
                    10
                ]
            },
            {
                "name": "Intermediate Smithing",
                "desc": [
                    "You can create Nordic and Orcish items at any forge."
                ],
                "req": [
                    60
                ],
                "pos": [
                    4.64,
                    -61.43
                ],
                "id": [
                    "33334BCD"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "334BCD"
                    }
                ],
                "deps": [
                    5
                ]
            },
            {
                "name": "Advanced Smithing",
                "desc": [
                    "You can create Ebony items at any forge. "
                ],
                "req": [
                    80
                ],
                "pos": [
                    48.93,
                    -72.5
                ],
                "id": [
                    "000CB412"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0CB412"
                    }
                ],
                "deps": [
                    9
                ]
            },
            {
                "name": "Strong Back",
                "desc": [
                    "Your Carry Weight is increased by 50.",
                    "Your Carry Weight is increased by 100."
                ],
                "req": [
                    30,
                    70
                ],
                "pos": [
                    104.29,
                    -44.29
                ],
                "id": [
                    "3353E4A4",
                    "3353E4A6"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "53E4A4"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "53E4A6"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            }
        ]
    },
    {
        "name": "Sneak",
        "cname": "sneak",
        "perks": [
            {
                "name": "Sneak Mastery",
                "desc": [
                    "You are 25% harder to detect when sneaking.",
                    "You are 50% harder to detect when sneaking."
                ],
                "req": [
                    10,
                    50
                ],
                "pos": [
                    62.14,
                    2.5
                ],
                "id": [
                    "000BE126",
                    "000C07C6"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0BE126"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C07C6"
                    }
                ],
                "levels": 2
            },
            {
                "name": "Merciless",
                "desc": [
                    "Sneak attacks with melee weapons deal 50% extra damage."
                ],
                "req": [
                    20
                ],
                "pos": [
                    46.43,
                    -15.36
                ],
                "id": [
                    "00058210"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058210"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Backstab",
                "desc": [
                    "Sneak attacks with one-handed weapons deal 50% more damage."
                ],
                "req": [
                    40
                ],
                "pos": [
                    33.93,
                    -32.14
                ],
                "id": [
                    "001036F0"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "1036F0"
                    }
                ],
                "deps": [
                    1
                ]
            },
            {
                "name": "Assassin's Blade",
                "desc": [
                    "Sneak attacks with daggers deal 50% more damage.",
                    "Sneak attacks with daggers deal double damage."
                ],
                "req": [
                    70,
                    90
                ],
                "pos": [
                    50.0,
                    -53.93
                ],
                "id": [
                    "00058211",
                    "33098669"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058211"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "098669"
                    }
                ],
                "levels": 2,
                "deps": [
                    2
                ]
            },
            {
                "name": "Trespasser",
                "desc": [
                    "You no longer trigger traps, and you can execute a silent roll while sneaking."
                ],
                "req": [
                    30
                ],
                "pos": [
                    100.0,
                    -13.57
                ],
                "id": [
                    "0005820C"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "05820C"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Infiltrator",
                "desc": [
                    "You move 25% faster while sneaking."
                ],
                "req": [
                    60
                ],
                "pos": [
                    104.29,
                    -41.79
                ],
                "id": [
                    "3398DF4D"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "98DF4D"
                    }
                ],
                "deps": [
                    4
                ]
            },
            {
                "name": "Hidden Threat",
                "desc": [
                    "Once every 10 seconds, sneaking in combat turns you invisible for 5 seconds. "
                ],
                "req": [
                    80
                ],
                "pos": [
                    73.57,
                    -58.21
                ],
                "id": [
                    "00058214"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058214"
                    }
                ],
                "deps": [
                    5
                ]
            },
            {
                "name": "Living Shadow",
                "desc": [
                    "Once every 10 seconds, sneaking in combat causes nearby enemies to stop searching for you."
                ],
                "req": [
                    100
                ],
                "pos": [
                    51.07,
                    -91.07
                ],
                "id": [
                    "00058213"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058213"
                    }
                ],
                "deps": [
                    6
                ]
            },
            {
                "name": "Silent Casting",
                "desc": [
                    "Your spells are silent to others."
                ],
                "req": [
                    20
                ],
                "pos": [
                    82.14,
                    -18.57
                ],
                "id": [
                    "000581FD"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0581FD"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Shadow Casting",
                "desc": [
                    "Damage-dealing spells are 50% stronger while sneaking and undetected.",
                    "Damage-dealing spells are twice as strong while sneaking and undetected."
                ],
                "req": [
                    40,
                    70
                ],
                "pos": [
                    83.93,
                    -40.71
                ],
                "id": [
                    "33098666",
                    "332A6F84"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "098666"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "2A6F84"
                    }
                ],
                "levels": 2,
                "deps": [
                    8
                ]
            },
            {
                "name": "Deadly Aim",
                "desc": [
                    "Sneak attacks with bows deal 50% more damage.",
                    "Sneak attacks with bows deal double damage."
                ],
                "req": [
                    30,
                    60
                ],
                "pos": [
                    63.93,
                    -31.07
                ],
                "id": [
                    "33098664",
                    "33098668"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "098664"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "098668"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            }
        ]
    },
    {
        "name": "Speech",
        "cname": "speechcraft",
        "perks": [
            {
                "name": "Speech Mastery",
                "desc": [
                    "Buying and selling prices are 10% better.",
                    "Buying and selling prices are 20% better."
                ],
                "req": [
                    10,
                    50
                ],
                "pos": [
                    60.0,
                    7.86
                ],
                "id": [
                    "000BE128",
                    "000C07CE"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0BE128"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C07CE"
                    }
                ],
                "levels": 2
            },
            {
                "name": "Bard",
                "desc": [
                    "Bard songs increase Health, Magicka, or Stamina for you and all nearby living allies.",
                    "Bard songs increase Health, Magicka, or Stamina and grant an additional bonus to you and all nearby living allies."
                ],
                "req": [
                    30,
                    60
                ],
                "pos": [
                    104.29,
                    -6.79
                ],
                "id": [
                    "00058F79",
                    "3308E42C"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F79"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "08E42C"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Inspiration",
                "desc": [
                    "Bard songs are twice as strong on allies and affect summoned or reanimated minions."
                ],
                "req": [
                    40
                ],
                "pos": [
                    89.64,
                    -27.14
                ],
                "id": [
                    "00058F75"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F75"
                    }
                ],
                "deps": [
                    1
                ]
            },
            {
                "name": "Warsong",
                "desc": [
                    "Bard songs grant all bonuses to allies, regardless of the instrument you play."
                ],
                "req": [
                    90
                ],
                "pos": [
                    102.86,
                    -51.43
                ],
                "id": [
                    "00058F7A"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F7A"
                    }
                ],
                "deps": [
                    2
                ]
            },
            {
                "name": "Trade and Barter",
                "desc": [
                    "Your selling prices are increased by 25%."
                ],
                "req": [
                    30
                ],
                "pos": [
                    13.57,
                    -2.86
                ],
                "id": [
                    "3340455B"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "40455B"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Black Market",
                "desc": [
                    "You can sell stolen items to any merchant."
                ],
                "req": [
                    40
                ],
                "pos": [
                    -2.86,
                    -25.0
                ],
                "id": [
                    "00105F29"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "105F29"
                    }
                ],
                "deps": [
                    4
                ]
            },
            {
                "name": "Supply and Demand",
                "desc": [
                    "Merchants have extra gold available for bartering. ",
                    "Merchants have even more gold available for bartering. "
                ],
                "req": [
                    40,
                    80
                ],
                "pos": [
                    32.5,
                    -27.86
                ],
                "id": [
                    "001090A5",
                    "3376B291"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "1090A5"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "76B291"
                    }
                ],
                "levels": 2,
                "deps": [
                    4
                ]
            },
            {
                "name": "Investor",
                "desc": [
                    "You can invest in a shopkeeper's business to increase their available stock."
                ],
                "req": [
                    70
                ],
                "pos": [
                    15.0,
                    -51.07
                ],
                "id": [
                    "00058F7B"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "058F7B"
                    }
                ],
                "deps": [
                    6
                ]
            },
            {
                "name": "Entrepreneur",
                "desc": [
                    "You can sell any item to any merchant in Tamriel."
                ],
                "req": [
                    100
                ],
                "pos": [
                    16.07,
                    -78.93
                ],
                "id": [
                    "331F5C43"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "1F5C43"
                    }
                ],
                "deps": [
                    7
                ]
            },
            {
                "name": "Quick Learner",
                "desc": [
                    "Training costs much less gold."
                ],
                "req": [
                    60
                ],
                "pos": [
                    48.21,
                    -13.57
                ],
                "id": [
                    "33A1BB5C"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "A1BB5C"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Silver Tongue",
                "desc": [
                    "You are much more likely to succeed at persuasion, and can even bribe guards to ignore your crimes."
                ],
                "req": [
                    20
                ],
                "pos": [
                    75.0,
                    -13.57
                ],
                "id": [
                    "001090A2"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "1090A2"
                    }
                ],
                "deps": [
                    0
                ]
            }
        ]
    },
    {
        "name": "Two-handed",
        "cname": "twohanded",
        "perks": [
            {
                "name": "Two-handed Mastery",
                "desc": [
                    "Two-handed weapons do 25% more damage.",
                    "Two-handed weapons do 50% more damage."
                ],
                "req": [
                    10,
                    50
                ],
                "pos": [
                    70.36,
                    2.5
                ],
                "id": [
                    "000BABE8",
                    "00079346"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0BABE8"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "079346"
                    }
                ],
                "levels": 2
            },
            {
                "name": "Rip and Tear",
                "desc": [
                    "Battleaxes deal extra bleeding damage over 10 seconds.",
                    "Battleaxes deal extra bleeding damage over 10 seconds. Staggered targets take 50% extra bleeding damage."
                ],
                "req": [
                    20,
                    70
                ],
                "pos": [
                    48.21,
                    -27.5
                ],
                "id": [
                    "000C5C05",
                    "335C6EE3"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C5C05"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "5C6EE3"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Rend and Rake",
                "desc": [
                    "Battleaxes deal three times more bleeding damage.",
                    "Battleaxes deal five times more bleeding damage."
                ],
                "req": [
                    40,
                    90
                ],
                "pos": [
                    29.64,
                    -52.14
                ],
                "id": [
                    "000C5C06",
                    "000C5C07"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C5C06"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C5C07"
                    }
                ],
                "levels": 2,
                "deps": [
                    1
                ]
            },
            {
                "name": "Champion's Stance",
                "desc": [
                    "Two-handed power attacks cost 20% less Stamina and deal 25% extra stagger."
                ],
                "req": [
                    30
                ],
                "pos": [
                    70.0,
                    -34.29
                ],
                "id": [
                    "00052D52"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "052D52"
                    }
                ],
                "deps": [
                    0
                ]
            },
            {
                "name": "Massacre",
                "desc": [
                    "Two-handed power attacks deal 50% more damage to enemies who fall below half Health."
                ],
                "req": [
                    80
                ],
                "pos": [
                    53.21,
                    -61.07
                ],
                "id": [
                    "0003AFA7"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "03AFA7"
                    }
                ],
                "deps": [
                    3
                ]
            },
            {
                "name": "Berserker",
                "desc": [
                    "Killing an enemy with a Two-handed power attack increases your Attack Speed by 20% for 20 seconds."
                ],
                "req": [
                    100
                ],
                "pos": [
                    71.79,
                    -179.0
                ],
                "id": [
                    "3336C6E8"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "36C6E8"
                    }
                ],
                "deps": [
                    4,
                    6
                ]
            },
            {
                "name": "Overpower",
                "desc": [
                    "Two-handed power attacks are 20% faster and deal 25% more damage."
                ],
                "req": [
                    60
                ],
                "pos": [
                    87.5,
                    -62.5
                ],
                "id": [
                    "00052D51"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "052D51"
                    }
                ],
                "deps": [
                    3
                ]
            },
            {
                "name": "Perfect Parry",
                "desc": [
                    "Two-handed weapons have a longer parry window. Successful parries deal 25% extra stagger.",
                    "Two-handed weapons have a longer parry window. Successful parries restore 25 Stamina and deal 25% extra stagger."
                ],
                "req": [
                    40,
                    70
                ],
                "pos": [
                    70.71,
                    -77.86
                ],
                "id": [
                    "333717EA",
                    "331F5C2A"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "3717EA"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "1F5C2A"
                    }
                ],
                "levels": 2,
                "deps": [
                    3
                ]
            },
            {
                "name": "Skull Splitter",
                "desc": [
                    "Warhammers deal Stamina damage.",
                    "Warhammers deal Magicka and Stamina damage."
                ],
                "req": [
                    20,
                    70
                ],
                "pos": [
                    36.79,
                    -17.14
                ],
                "id": [
                    "0003AF84",
                    "33612E1E"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "03AF84"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "612E1E"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Armor Crusher",
                "desc": [
                    "Warhammers reduce enemy Armor Rating by 100 for 10 seconds.",
                    "Warhammers reduce enemy Armor Rating by 200 for 10 seconds."
                ],
                "req": [
                    40,
                    90
                ],
                "pos": [
                    5.36,
                    -37.14
                ],
                "id": [
                    "000C1E96",
                    "000C1E97"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C1E96"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C1E97"
                    }
                ],
                "levels": 2,
                "deps": [
                    8
                ]
            },
            {
                "name": "Deep Cuts",
                "desc": [
                    "Greatswords have a 20% chance to deal critical damage.",
                    "Greatswords have a 20% chance to deal critical damage. Your critical chance is doubled during attacks of opportunity."
                ],
                "req": [
                    20,
                    70
                ],
                "pos": [
                    103.93,
                    -17.86
                ],
                "id": [
                    "0003AF83",
                    "335A37D3"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "03AF83"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "5A37D3"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Mortal Wounds",
                "desc": [
                    "Greatswords deal three times more critical damage.",
                    "Greatswords deal five times more critical damage."
                ],
                "req": [
                    40,
                    90
                ],
                "pos": [
                    132.5,
                    -34.64
                ],
                "id": [
                    "000C1E94",
                    "000C1E95"
                ],
                "forms": [
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C1E94"
                    },
                    {
                        "plugin": "Skyrim.esm",
                        "formId": "0C1E95"
                    }
                ],
                "levels": 2,
                "deps": [
                    10
                ]
            },
            {
                "name": "Piercing Strikes",
                "desc": [
                    "Longspears deal extra irresistible damage.",
                    "Longspears deal irresistible damage to all targets in front of you."
                ],
                "req": [
                    20,
                    70
                ],
                "pos": [
                    91.79,
                    -28.57
                ],
                "id": [
                    "33394F16",
                    "33394F18"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "394F16"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "394F18"
                    }
                ],
                "levels": 2,
                "deps": [
                    0
                ]
            },
            {
                "name": "Impaling Thrusts",
                "desc": [
                    "Longspears deal three times more irresistible damage.",
                    "Longspears deal five times more irresistible damage."
                ],
                "req": [
                    40,
                    90
                ],
                "pos": [
                    112.14,
                    -54.29
                ],
                "id": [
                    "33394F19",
                    "33394F1A"
                ],
                "forms": [
                    {
                        "plugin": "Adamant.esp",
                        "formId": "394F19"
                    },
                    {
                        "plugin": "Adamant.esp",
                        "formId": "394F1A"
                    }
                ],
                "levels": 2,
                "deps": [
                    12
                ]
            }
        ]
    }
];
//# sourceMappingURL=adamant-data.js.map