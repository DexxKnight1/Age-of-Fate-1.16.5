onEvent('item.modification', (event) => {

  let colors = [`white`, `light_gray`, `gray`, `black`, `red`, `orange`, `yellow`, `lime`, `green`, `light_blue`, `cyan`, `blue`, `purple`, `magenta`, `pink`, `brown`]

  function modifyStack(listOfItems, countPerStack) {
    listOfItems.forEach(item => {
      event.modify(item, item => item.maxStackSize = countPerStack)
    })
  }

  modifyStack([
    /^industrialforegoing:.*addon.*/,
    'cyclic:heart',
    'cyclic:heart_empty',
    'minecraft:ender_pearl',
    'minecraft:egg',
    'minecraft:cake',
    'minecraft:minecart',
    'minecraft:saddle',
    'minecraft:writable_book',
    'minecraft:enchanted_book',
    'minecraft:honey_bottle',
    'minecraft:totem_of_undying',
    'minecraft:snowball',
    'minecraft:armor_stand',
    'minecraft:bucket',
    'minecraft:water_bucket',
    'minecraft:milk_bucket',
    'minecraft:lava_bucket',
    'minecraft:oak_sign',
    'minecraft:spruce_sign',
    'minecraft:oak_sign',
    'minecraft:spruce_sign',
    'minecraft:birch_sign',
    'minecraft:acacia_sign',
    'minecraft:jungle_sign',
    'minecraft:dark_oak_sign',
    'minecraft:crimson_sign',
    'minecraft:warped_sign',
    'minecraft:mushroom_stew',
    'minecraft:rabbit_stew',
    'forbidden_arcanus:cherrywood_sign',
    'forbidden_arcanus:edelwood_sign',
    'forbidden_arcanus:mysterywood_sign',
    'twilightforest:twilight_oak_sign',
    'twilightforest:canopy_sign',
    'twilightforest:mangrove_sign',
    'twilightforest:darkwood_sign',
    'twilightforest:time_sign',
    'twilightforest:trans_sign',
    'twilightforest:mine_sign',
    'twilightforest:sort_sign',
    'upgrade_aquatic:driftwood_sign',
    'upgrade_aquatic:river_sign',
    'tconstruct:greenheart_sign',
    'tconstruct:skyroot_sign',
    'tconstruct:bloodshroom_sign',
    'terraqueous:light_clud_sign',
    'terraqueous:dense_clud_sign',
    'terraqueous:storm_clud_sign',
    'terraqueous:apple_sign',
    'terraqueous:cherry_sign',
    'terraqueous:orange_sign',
    'terraqueous:pear_sign',
    'terraqueous:peach_sign',
    'terraqueous:mango_sign',
    'terraqueous:lemon_sign',
    'terraqueous:plum_sign',
    'terraqueous:coconut_sign',
    'terraqueous:banana_sign',
    'terraqueous:mulberry_sign',
    'endergetic:poise_sign',
    'atum:palm_sign',
    'atum:deadwood_sign',
    'undergarden:smogstem_sign',
    'undergarden:wigglewood_sign',
    'undergarden:grongle_sign',
    'framedblocks:framed_sign',
    'securitycraft:secret_sign_item',
    'securitycraft:secret_spruce_sign_item',
    'securitycraft:secret_birch_sign_item',
    'securitycraft:secret_jungle_sign_item',
    'securitycraft:secret_acacia_sign_item',
    'securitycraft:secret_dark_oak_sign_item',
    'securitycraft:secret_crimson_sign_item',
    'securitycraft:secret_warped_sign_item',
    'minecraft:iron_horse_armor',
    'minecraft:golden_horse_armor',
    'minecraft:diamond_horse_armor',
    'minecraft:leather_horse_armor',
    'byg:ametrine_horse_armor',
    'byg:pendorite_horse_armor',
    'magistuarmory:chainmail_horse_armor',
    'upgradednetherite:netherite_horse_armor',
    'upgradednetherite:gold_upgraded_netherite_horse_armor',
    'upgradednetherite:fire_upgraded_netherite_horse_armor',
    'upgradednetherite:ender_upgraded_netherite_horse_armor',
    'upgradednetherite:water_upgraded_netherite_horse_armor',
    'upgradednetherite:wither_upgraded_netherite_horse_armor',
    'upgradednetherite:poison_upgraded_netherite_horse_armor',
    'upgradednetherite:phantom_upgraded_netherite_horse_armor',
    'upgradednetherite:feather_upgraded_netherite_horse_armor',
    'upgradednetherite:corrupt_upgraded_netherite_horse_armor',
    'blue_skies:camel_saddle',
    'minecraft:oak_boat',
    'minecraft:spruce_boat',
    'minecraft:birch_boat',
    'minecraft:jungle_boat',
    'minecraft:acacia_boat',
    'minecraft:dark_oak_boat',
    'biomesoplenty:fir_boat',
    'biomesoplenty:redwood_boat',
    'biomesoplenty:cherry_boat',
    'biomesoplenty:mahogany_boat',
    'biomesoplenty:jacaranda_boat',
    'biomesoplenty:palm_boat',
    'biomesoplenty:willow_boat',
    'biomesoplenty:dead_boat',
    'biomesoplenty:magic_boat',
    'biomesoplenty:umbran_boat',
    'biomesoplenty:hellbark_boat',
    'endergetic:poise_boat',
    'undergarden:smogstem_boat',
    'undergarden:wigglewood_boat',
    'undergarden:grongle_boat',
    'byg:aspen_boat',
    'byg:baobab_boat',
    'byg:blue_enchanted_boat',
    'byg:cherry_boat',
    'byg:cika_boat',
    'byg:cypress_boat',
    'byg:ebony_boat',
    'byg:fir_boat',
    'byg:green_enchanted_boat',
    'byg:holly_boat',
    'byg:jacaranda_boat',
    'byg:mahogany_boat',
    'byg:mangrove_boat',
    'byg:maple_boat',
    'byg:palm_boat',
    'byg:pine_boat',
    'byg:rainbow_eualyptus_boat',
    'byg:redwood_boat',
    'byg:skyris_boat',
    'byg:willow_boat',
    'byg:witch_hazel_boat',
    'byg:zelkova_boat',
    'upgrade_aquatic:driftwood_boat',
    'upgrade_aquatic:river_boat',
    'minecraft:music_disc_13',
    'minecraft:music_disc_cat',
    'minecraft:music_disc_blocks',
    'minecraft:music_disc_chirp',
    'minecraft:music_disc_far',
    'minecraft:music_disc_mall',
    'minecraft:music_disc_mellohi',
    'minecraft:music_disc_stal',
    'minecraft:music_disc_strad',
    'minecraft:music_disc_ward',
    'minecraft:music_disc_11',
    'minecraft:music_disc_wait',
    'minecraft:music_disc_pigstep',
    'biomesoplenty:music_disc_wanderer',
    'quark:music_disc_endermosh',
    'quark:music_disc_drips',
    'quark:music_disc_ocean',
    'quark:music_disc_rain',
    'quark:music_disc_wind',
    'quark:music_disc_fire',
    'quark:music_disc_clock',
    'quark:music_disc_crickets',
    'quark:music_disc_chatter',
    'botania:record_gaia_1',
    'botania:record_gaia_2',
    'mowziesmobs:music_disc_petiole',
    'eidolon:music_disc_parousia',
    'alexsmobs:music_disc_thime',
    'alexsmobs:music_disc_daze',
    'endergetic:music_disc_kilobyte',
    'rats:music_disc_mice_on_venus',
    'rats:music_disc_living_mice',
    'undergarden:music_disc_mammoth',
    'undergarden:music_disc_limax_maximus',
    'undergarden:music_disc_relict',
    'undergarden:music_disc_gloomper_anthem',
    'forestcraft:music_disc_latina',
    'forestcraft:music_disc_i_say_yes',
    'forestcraft:music_disc_we_took_eachothers_hand',
    'blue_skies:blinding_rage',
    'blue_skies:defying_starlight',
    'blue_skies:venomous_encounter',
    'tconstruct:glow_ball',
    'tconstruct:efln_ball',
    'tconstruct:flint_shuriken',
    'forbidden_arcanus:aureal_bottle',
    'forbidden_arcanus:xpetrified_orb',
    'upgrade_aquatic:mulberry_jam_bottle',
    'mekanism:upgrade_speed',
    'mekanism:upgrade_energy',
    'mekanism:upgrade_filter',
    'mekanism:upgrade_muffling',
    'mekanism:upgrade_gas',
    'mekanism:upgrade_anchor',
    'thermal:explosive_grenade',
    'thermal:slime_grenade',
    'thermal:redstone_grenade',
    'thermal:glowstone_grenade',
    'thermal:ender_grenade',
    'thermal:earth_grenade',
    'thermal:fire_grenade',
    'thermal:ice_grenade',
    'thermal:lightning_grenade',
    'thermal:hearty_stew',
    'thermal:xp_stew',
    'bloodmagic:voidsigil',
    'undergarden:bloody_stew',
    'undergarden:inky_stew',
    'undergarden:indigo_stew',
    'undergarden:veiled_stew',
    'forestcraft:monster_stew',
    'sophisticatedbackpacks:advanced_void_upgrade',
    'ars_nouveau:void_jar',
    'mininggadgets:upgrade_void_junk'
  ], 64)

  colors.forEach(color => {
    event.modify(`minecraft:${color}_banner`, item => item.maxStackSize = 64)
  })

  colors.forEach(color => {
    event.modify(`minecraft:${color}_bed`, item => item.maxStackSize = 64)
  })

  colors.forEach(color => {
    event.modify(`minecraft:${color}_shulker_box`, item => item.maxStackSize = 64)
  })

})
