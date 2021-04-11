import flatironPoppies from './art-pics/0B5A6DC9-2196-4967-827B-0DD45E991732.jpeg';
import drippingHair from './art-pics/dripping_hair.jpeg';
import shellLayersFullHorizontal from './art-pics/1A6A4948.JPG';
import shellLayersPartial1 from './art-pics/1A6A4955.JPG';
import shellLayersPartial2 from './art-pics/1A6A4962.JPG';
import orangeFishFull from './art-pics/orange_fish_full.jpeg';
import orangeFishCloseup1 from './art-pics/orange_fish_closeup1.jpeg';
import orangeFishCloseup2 from './art-pics/orange_fish_closeup2.jpeg';
import blueFishFull from './art-pics/blue_fish_full.jpeg';
import blueFishPartial from './art-pics/blue_fish_partial.jpeg';
import circleClumpTrees from './art-pics/circle_clump_trees.jpeg';
import clamDisco from './art-pics/clam_disco.jpeg';
import buddhaWithinFull from './art-pics/buddha_within_full.jpeg';
import buddhaWithinPartial from './art-pics/buddha_within_partial.jpeg';
import redPoppies from './art-pics/red_poppies.jpeg';
import redPoppiesPartial from './art-pics/red_poppies_partial.jpeg';
import lotsOLotus from './art-pics/lots_o_lotus.jpeg';
import lotusLifeCycle from './art-pics/lotus_life_cycle.jpeg';
import mossWaterPixels from './art-pics/moss_water_pixels.jpeg';
import mossWaterPixelsClose1 from './art-pics/moss_water_pixels_close1.jpeg';
import mossWaterPixelsClose2 from './art-pics/moss_water_pixels_close2.jpeg';
import mossWaterPixelsGallery from './art-pics/moss_water_pixels_gallery.jpeg';
import lotusHeartMountain from './art-pics/lotus_heart_mountain.jpeg';
import yellowUnderCanopy from './art-pics/yellow_under_canopy.jpeg';
import blueDanTien from './art-pics/blue_dan_tien.jpeg';
import heartacheDecompartmentalized from './art-pics/heartache_decompartmentalized.jpeg';
import tripleBlueEncausticPartial from './art-pics/triple_blue_encaustic_partial.jpeg';
import thornWrappedComfort from './art-pics/thorn_wrapped_comfort.jpeg';
import shipCthuluWaves from './art-pics/ship_cthulu_waves.jpeg';
import tripleBlueEncausticGallery from './art-pics/triple_blue_encaustic_gallery.jpeg';
import celloDan from './art-pics/cello_dan.jpeg';
import snailFreedom from './art-pics/snail_freedom.jpeg';
import manyBranches from './art-pics/many_branches.jpeg';
import celloDanPartial from './art-pics/cello_dan_partial.jpeg';
import drippingHairPartial from './art-pics/dripping_hair_partial.jpeg';
import fishyCubism from './art-pics/fishy_cubism.jpeg';
import samuraiDogJoy from './art-pics/samurai_dog_joy.jpeg';
import doubleDogPrint from './art-pics/double_dog_print.jpeg';
import bunniesRedSky from './art-pics/bunnies_red_sky.jpg';
import shellfishlyOrange from './art-pics/shellfishly_orange.jpg';
import octopusOverHeart from './art-pics/octopus_over_heart.jpg';
import personSittingInHeart from './art-pics/person_sitting_in_heart.jpg';
import squidRelationship from './art-pics/squid_relationship.jpg';
import bloodyStocking from './art-pics/bloody_stocking.jpg';
import cagedCrow from './art-pics/caged_crow.jpg';
import whereHaveYouBean from './art-pics/where_have_you_bean.jpg';
import youOctopi from './art-pics/you_octopi.jpg';
import youAreHereOrange from './art-pics/you_are_here_orange.jpg';
import acornInHeart from './art-pics/acorn_in_heart.jpg';
import cephalopod from './art-pics/cephalopod.jpg';
import gopherASnuggle from './art-pics/gopher_a_snuggle.png';
import whaleSky from './art-pics/whale_sky.png';
import whaleSkyBlue from './art-pics/whale_sky_blue.png';

const ArtRepo = {
  encaustics: [
    drippingHair,
    drippingHairPartial,
    tripleBlueEncausticPartial,
    tripleBlueEncausticGallery,
    manyBranches
  ],
  prints: [
    whaleSky,
    whaleSkyBlue,
    gopherASnuggle,
    acornInHeart,
    cephalopod,
    cagedCrow,
    whereHaveYouBean,
    youOctopi,
    youAreHereOrange,
    squidRelationship,
    bloodyStocking,
    personSittingInHeart,
    octopusOverHeart,
    shellfishlyOrange,
    bunniesRedSky,
    flatironPoppies,
    yellowUnderCanopy,
    heartacheDecompartmentalized,
    thornWrappedComfort,
    shipCthuluWaves,
    snailFreedom,
    fishyCubism,
    samuraiDogJoy
  ],
  mixed: [
    {
      src: shellLayersFullHorizontal,
      title: "Shell Layers",
      medium: "Acrylic",
      price: 50,
      partials: [
        { src: shellLayersPartial1 },
        { src: shellLayersPartial2 }
      ]
    },
    {
      src: orangeFishFull,
      title: "Orange Fish",
      medium: "Acrylic",
      price: 80,
      partials: [
        { src: orangeFishCloseup1 },
        { src: orangeFishCloseup2 }
      ]
    },
    {
      src: blueFishFull,
      title: "Blue Fish",
      medium: "Acrylic",
      price: 100,
      partials: [
        {src: blueFishPartial}
      ]
    },
    {
      src: circleClumpTrees,
      title: "Circle Clump Trees",
      medium: "Acrylic and Discs",
      price: 120
    },
    {
      src: clamDisco,
      title: "Clam Disco",
      medium: "Acrylic",
      price: 75
    },
    {
      src: buddhaWithinFull,
      title: "Buddha Within",
      medium: "Acrylic",
      price: 150,
      partials: [
        { src: buddhaWithinPartial }
      ]
    },
    {
      src: redPoppies,
      title: "Red Poppies",
      medium: "Acrylic",
      price: 80,
      partials: [
        { src: redPoppiesPartial }
      ]
    },
    {
      src: lotsOLotus,
      title: "Lots \'O Lotus",
      medium: "Acrylic",
      price: 180
    },
    {
      src: lotusLifeCycle,
      title: "Lotus Life Cycle",
      medium: "Acrylic",
      price: 140
    },
    {
      src: mossWaterPixels,
      title: "Moss & Water Pixels",
      medium: "Acrylic",
      price: 320,
      partials: [
        { src: mossWaterPixelsClose1 },
        { src: mossWaterPixelsClose2 },
        { src: mossWaterPixelsGallery }
      ]
    },
    {
      src: lotusHeartMountain,
      title: "Lotus Heart Mountain",
      medium: "Acrylic",
      price: 220
    },
    {
      src: blueDanTien,
      title: "Blue Dan Tien",
      medium: "Acrylic",
      price: 175
    },
    {
      src: celloDan,
      title: "Cello Dan",
      medium: "Acrylic",
      price: 185
    }
  ]
}

export {ArtRepo};
