import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { inject, TestBed } from "@angular/core/testing";
import { of, throwError } from 'rxjs';
import { PokemonDetails } from "../Models/pokemon-details.model";
import { PokemonListResponse } from "../Models/pokemon-list-response.model";
import { Pokemon } from "../Models/pokemon.model";
import { Type } from "../Models/type.model";
import { PokemonService } from "../Services/pokemon.service"
const input : any = {
    "abilities": [
        {
            "ability": {
                "name": "overgrow",
                "url": "https://pokeapi.co/api/v2/ability/65/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "chlorophyll",
                "url": "https://pokeapi.co/api/v2/ability/34/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
    "base_experience": 142,
    "forms": [
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon-form/2/"
        }
    ],
    "game_indices": [
        {
            "game_index": 9,
            "version": {
                "name": "red",
                "url": "https://pokeapi.co/api/v2/version/1/"
            }
        },
        {
            "game_index": 9,
            "version": {
                "name": "blue",
                "url": "https://pokeapi.co/api/v2/version/2/"
            }
        },
        {
            "game_index": 9,
            "version": {
                "name": "yellow",
                "url": "https://pokeapi.co/api/v2/version/3/"
            }
        },
        {
            "game_index": 2,
            "version": {
                "name": "gold",
                "url": "https://pokeapi.co/api/v2/version/4/"
            }
        },
        {
            "game_index": 2,
            "version": {
                "name": "silver",
                "url": "https://pokeapi.co/api/v2/version/5/"
            }
        },
        {
            "game_index": 2,
            "version": {
                "name": "crystal",
                "url": "https://pokeapi.co/api/v2/version/6/"
            }
        },
        {
            "game_index": 2,
            "version": {
                "name": "ruby",
                "url": "https://pokeapi.co/api/v2/version/7/"
            }
        },
        {
            "game_index": 2,
            "version": {
                "name": "sapphire",
                "url": "https://pokeapi.co/api/v2/version/8/"
            }
        },
        {
            "game_index": 2,
            "version": {
                "name": "emerald",
                "url": "https://pokeapi.co/api/v2/version/9/"
            }
        },
        {
            "game_index": 2,
            "version": {
                "name": "firered",
                "url": "https://pokeapi.co/api/v2/version/10/"
            }
        },
        {
            "game_index": 2,
            "version": {
                "name": "leafgreen",
                "url": "https://pokeapi.co/api/v2/version/11/"
            }
        },
        {
            "game_index": 2,
            "version": {
                "name": "diamond",
                "url": "https://pokeapi.co/api/v2/version/12/"
            }
        },
        {
            "game_index": 2,
            "version": {
                "name": "pearl",
                "url": "https://pokeapi.co/api/v2/version/13/"
            }
        },
        {
            "game_index": 2,
            "version": {
                "name": "platinum",
                "url": "https://pokeapi.co/api/v2/version/14/"
            }
        },
        {
            "game_index": 2,
            "version": {
                "name": "heartgold",
                "url": "https://pokeapi.co/api/v2/version/15/"
            }
        },
        {
            "game_index": 2,
            "version": {
                "name": "soulsilver",
                "url": "https://pokeapi.co/api/v2/version/16/"
            }
        },
        {
            "game_index": 2,
            "version": {
                "name": "black",
                "url": "https://pokeapi.co/api/v2/version/17/"
            }
        },
        {
            "game_index": 2,
            "version": {
                "name": "white",
                "url": "https://pokeapi.co/api/v2/version/18/"
            }
        },
        {
            "game_index": 2,
            "version": {
                "name": "black-2",
                "url": "https://pokeapi.co/api/v2/version/21/"
            }
        },
        {
            "game_index": 2,
            "version": {
                "name": "white-2",
                "url": "https://pokeapi.co/api/v2/version/22/"
            }
        }
    ],
    "height": 10,
    "held_items": [],
    "id": 2,
    "is_default": true,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/2/encounters",
    "moves": [
        {
            "move": {
                "name": "swords-dance",
                "url": "https://pokeapi.co/api/v2/move/14/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "cut",
                "url": "https://pokeapi.co/api/v2/move/15/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                }
            ]
        },
        
    ],
    "name": "ivysaur",
    "order": 2,
    "past_types": [],
    "species": {
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon-species/2/"
    },
    "sprites": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
        "back_female": null,
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png",
        "back_shiny_female": null,
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
        "front_shiny_female": null,
        "other": {
            "dream_world": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
                "front_female": null
            },
            "home": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png",
                "front_female": null,
                "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/2.png",
                "front_shiny_female": null
            },
            "official-artwork": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
                "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/2.png"
            }
        },
        "versions": {
            "generation-i": {
                "red-blue": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/2.png",
                    "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/2.png",
                    "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/2.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/2.png",
                    "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/2.png",
                    "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/2.png"
                },
                "yellow": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/2.png",
                    "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/2.png",
                    "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/2.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/2.png",
                    "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/2.png",
                    "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/2.png"
                }
            },
            "generation-ii": {
                "crystal": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/2.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/2.png",
                    "back_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/2.png",
                    "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/2.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/2.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/2.png",
                    "front_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/2.png",
                    "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/2.png"
                },
                "gold": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/2.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/2.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/2.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/2.png",
                    "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/2.png"
                },
                "silver": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/2.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/2.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/2.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/2.png",
                    "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/2.png"
                }
            },
            "generation-iii": {
                "emerald": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/2.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/2.png"
                },
                "firered-leafgreen": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/2.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/2.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/2.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/2.png"
                },
                "ruby-sapphire": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/2.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/2.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/2.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/2.png"
                }
            },
            "generation-iv": {
                "diamond-pearl": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/2.png",
                    "back_female": null,
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/2.png",
                    "back_shiny_female": null,
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/2.png",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/2.png",
                    "front_shiny_female": null
                },
                "heartgold-soulsilver": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/2.png",
                    "back_female": null,
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/2.png",
                    "back_shiny_female": null,
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/2.png",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/2.png",
                    "front_shiny_female": null
                },
                "platinum": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/2.png",
                    "back_female": null,
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/2.png",
                    "back_shiny_female": null,
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/2.png",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/2.png",
                    "front_shiny_female": null
                }
            },
            "generation-v": {
                "black-white": {
                    "animated": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/2.gif",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/2.gif",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/2.gif",
                        "front_shiny_female": null
                    },
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/2.png",
                    "back_female": null,
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/2.png",
                    "back_shiny_female": null,
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/2.png",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/2.png",
                    "front_shiny_female": null
                }
            },
            "generation-vi": {
                "omegaruby-alphasapphire": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/2.png",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/2.png",
                    "front_shiny_female": null
                },
                "x-y": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/2.png",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/2.png",
                    "front_shiny_female": null
                }
            },
            "generation-vii": {
                "icons": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/2.png",
                    "front_female": null
                },
                "ultra-sun-ultra-moon": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/2.png",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/2.png",
                    "front_shiny_female": null
                }
            },
            "generation-viii": {
                "icons": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/2.png",
                    "front_female": null
                }
            }
        }
    },
    "stats": [
        {
            "base_stat": 60,
            "effort": 0,
            "stat": {
                "name": "hp",
                "url": "https://pokeapi.co/api/v2/stat/1/"
            }
        },
        {
            "base_stat": 62,
            "effort": 0,
            "stat": {
                "name": "attack",
                "url": "https://pokeapi.co/api/v2/stat/2/"
            }
        },
        {
            "base_stat": 63,
            "effort": 0,
            "stat": {
                "name": "defense",
                "url": "https://pokeapi.co/api/v2/stat/3/"
            }
        },
        {
            "base_stat": 80,
            "effort": 1,
            "stat": {
                "name": "special-attack",
                "url": "https://pokeapi.co/api/v2/stat/4/"
            }
        },
        {
            "base_stat": 80,
            "effort": 1,
            "stat": {
                "name": "special-defense",
                "url": "https://pokeapi.co/api/v2/stat/5/"
            }
        },
        {
            "base_stat": 60,
            "effort": 0,
            "stat": {
                "name": "speed",
                "url": "https://pokeapi.co/api/v2/stat/6/"
            }
        }
    ],
    "types": [
        {
            "slot": 1,
            "type": {
                "name": "grass",
                "url": "https://pokeapi.co/api/v2/type/12/"
            }
        },
        {
            "slot": 2,
            "type": {
                "name": "poison",
                "url": "https://pokeapi.co/api/v2/type/4/"
            }
        }
    ],
    "weight": 130
};
describe('Pokemon Service ', () => {
    let httpClientSpy : jasmine.SpyObj<HttpClient> = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{provide: HttpClient, useValue: httpClientSpy}, PokemonService],
            imports: [HttpClientTestingModule]
        });
    });

    it('should format the response and filter unnecessary information (happy path)', inject([PokemonService], (service : PokemonService) => {
            const expectedOutput : Pokemon = {
                "id": 2,
                "name": "ivysaur",
                "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
                "types": [
                    {
                        "name": "grass"
                    },
                    {
                        "name": "poison"
                    }
                ],
                "details": {
                    "abilities": [
                        {
                            "name": "overgrow",
                            "url": "https://pokeapi.co/api/v2/ability/65/"
                        },
                        {
                            "name": "chlorophyll",
                            "url": "https://pokeapi.co/api/v2/ability/34/"
                        }
                    ],
                    "height": 10,
                    "moves": [
                        {
                            "name": "swords-dance",
                            "url": "https://pokeapi.co/api/v2/move/14/"
                        },
                        {
                            "name": "cut",
                            "url": "https://pokeapi.co/api/v2/move/15/"
                        }
                    ],
                    "weight": 130
                }
            } 
            const output = service.processResponse(input);
            expect(output).toEqual(expectedOutput);
        })
    );

    it('should format the response and filter unnecesary information (sad path)', inject([PokemonService], (service : PokemonService) => {
       
            expect(() => service.processResponse(null)).toThrowError("unable to format null or undefined object!");
        })
    );

    it('should return an object with all the information needed to be rendered (happy path)', inject([PokemonService], (service: PokemonService) => {
            const typesArray : Type[] = [
                {
                    "name": "grass"
                },
                {
                    "name": "poison"
                }
            ];
            const details : PokemonDetails = {
                abilities: [{
                    "name": "overgrow",
                    "url": "https://pokeapi.co/api/v2/ability/65/"
                },
                {
                    "name": "chlorophyll",
                    "url": "https://pokeapi.co/api/v2/ability/34/"
                }],
                moves: [
                    {
                        "name": "swords-dance",
                        "url": "https://pokeapi.co/api/v2/move/14/"
                    },
                    {
                        "name": "cut",
                        "url": "https://pokeapi.co/api/v2/move/15/"
                    }
                ],
                height: 10,
                weight: 130
            }
            httpClientSpy.get.and.returnValue(of(input));
            const url = 'https://someurl.com/pokemon/2';
            const pokemonObservable = service.getPokemon(url);

            pokemonObservable.subscribe(pokemon => {
                expect(pokemon.id).toEqual(2);
                expect(pokemon.name).toEqual('ivysaur');
                expect(pokemon.imgSrc).toEqual('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png');
                expect(pokemon.types).toEqual(typesArray);
                expect(pokemon.details).toEqual(details);
            });

        })
    
    );  

    it ('should return an object with all the information needed to be rendered (sad path)' ,inject([PokemonService], (service : PokemonService) => {
            const invalidUrl = 'https://pokeapi.co/api/v2/pokemon/invalid';
            httpClientSpy.get.and.callFake(() => {
                return throwError({
                    message: "Error!"
                });
            });
            service.getPokemon(invalidUrl).subscribe({
                error: (error) => {
                    expect(service.error).toBeTruthy();
                    expect(service.error?.message).toBe("Error!");
                }
            });
        })
    )
})