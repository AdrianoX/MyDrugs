export const initialState = {
  categories: [
    { id: 'pills',    name: 'Only best Pills !',     image: 'https://i.postimg.cc/VvqRrQ1H/R3ak9ku-TURBXy8w-YWFh-Nz-Zi-My0x-Zj-Vj-LTRm-ZTAt-OWQw-Ni03-Zm-Ew-MGYw-MDc5-NDkuan-Bl-Z5-GVAs0-DBw-DDw4-Gh-MAE.jpg' },
    { id: 'ecstasy',  name: '100% oryginal Ecstasy', image: 'https://i.postimg.cc/XYQskb5R/nintchdbpict000254677956.jpg' },
    { id: 'cannabis', name: 'Best kind of Cannabis', image: 'https://i.postimg.cc/bYBVK8Fp/photo-1558010089-ff6fd29ea39a.jpg' },
  ],

  options: [
    { id: 'small_pills',
      option: 'sweet_dry',
      image: 'https://i.postimg.cc/26f0676X/Blue-Elephant-pills-haunt-the-young.jpg' },
    { id: 'small_pills',
      option: 'hard_liq',
      image: 'https://i.postimg.cc/g03KfLDy/sleeping-pills-alzheimers.jpg' },
    { id: 'small_pills',
      option: 'porot_qa',
      image: 'https://i.postimg.cc/FzTpTtx2/gettyimages-607034539-2000.jpg' },
    { id: 'medium_pills',
      option: 'marco_1',
      image: 'https://i.postimg.cc/8PnwWScv/LOVE-PILLS-PIGULKI-MILOSCI-PREZENT-NA-WALENTYNKI-Waga-z-opakowaniem-0-1-kg.jpg' },
    { id: 'medium_pills',
      option: 'pablo_2',
      image: 'https://i.postimg.cc/G2JqsTT3/6968d6f7404387959f5ae9388675.jpg' },
    { id: 'medium_pills',
      option: 'bamos_3',
      image: 'https://i.postimg.cc/7YbnqW9Z/spilled-pills-feature.jpg' },
    { id: 'large_pills',
      option: 'mars',
      image: 'https://i.postimg.cc/x8pGKvfQ/sleeping-pills-1170.jpg' },
    { id: 'large_pills',
      option: 'saturn',
      image: 'https://i.postimg.cc/mgvwXyQ2/medications.jpg' },
    { id: 'large_pills',
      option: 'earth',
      image: 'https://i.postimg.cc/G3x54VvP/77475597-m6300160-pills-spl.jpg' },

    { id: 'begginers_excstasy',
      option: 'new world',
      image: 'https://i.postimg.cc/50vX28Gy/blue-pills.jpg' },
    { id: 'begginers_excstasy',
      option: 'kindergarden',
      image: 'https://i.postimg.cc/KcPKXrBs/174220762.jpg' },
    { id: 'begginers_excstasy',
      option: 'say hello to uncle festa',
      image: 'https://i.postimg.cc/4N8xZ8dw/image.jpg' },
    { id: 'advanced_excstasy',
      option: 'Old sQl_22',
      image: 'https://i.postimg.cc/2645DrbB/pill1jpg.jpg' },
    { id: 'advanced_excstasy',
      option: 'Spicy_Joe',
      image: 'https://i.postimg.cc/rsVq2W2v/k362bpepfxs31.jpg' },
    { id: 'advanced_excstasy',
      option: 'Senior_Gonzales_02',
      image: 'https://i.postimg.cc/mZyrpZWv/ffrokjp0pvo11.jpg' },
    { id: 'ultra-advanced_excstasy',
      option: 'Ultra_Trip',
      image: 'https://i.postimg.cc/5tDHJssD/EXTRA-POTENT-IKEA-BRANDED-ECSTASY-is-very-dangerous-Do-Not-Take-this-VIVISXN-MEDIA-do-not-trip-on-th.jpg' },
    { id: 'ultra-advanced_excstasy',
      option: 'Weird_adventure',
      image: 'https://i.postimg.cc/qq14JRkg/Snapchat-ecstasy-pills-696x366-1280x720.png' },
    { id: 'ultra-advanced_excstasy',
      option: 'Be carefful',
      image: 'https://i.postimg.cc/QxqW7kMW/13793873-smiley-face-pills.jpg' },

    { id: 'ultra_trip',
      option: 'Bob_24',
      image: 'https://i.postimg.cc/0Q82C73z/Fedora.jpg' },
    { id: 'ultra_trip',
      option: 'Lilly_15',
      image: 'https://i.postimg.cc/HWvsQctL/marijuana-454601963-resized-569fd2345f9b58eba4ad583d.jpg' },
    { id: 'ultra_trip',
      option: 'Prodly_01',
      image: 'https://i.postimg.cc/XJ7454GF/i-Stock-000048088138-Large.jpg' },
    { id: 'weird-adventure',
      option: 'Giant_Master_4',
      image: 'https://i.postimg.cc/HsjnK4L5/Faceoff-OG-jar-origins-of-og-kush-strains.jpg' },
    { id: 'weird-adventure',
      option: 'Hombre_Snatch',
      image: 'https://i.postimg.cc/mr7tjLg5/17125872-302107570204180-6553978583113531392-n.jpg' },
    { id: 'weird-adventure',
      option: 'Uncle_George_61',
      image: 'https://i.postimg.cc/y8Zd61c8/Faceoff-OG-jar-origins-of-og-kush-strains-2.jpg' },
    { id: 'be_carefful',
      option: 'Happy_Martha',
      image: 'https://i.postimg.cc/XJ7454GF/i-Stock-000048088138-Large.jpg' },
    { id: 'be_carefful',
      option: 'Proud_Weronica',
      image: 'https://i.postimg.cc/PJ2rCNrB/antitrust-cannabis-monopoly-e1593721551755.jpg' },
    { id: 'be_carefful',
      option: 'Curious_Sandra',
      image: 'https://i.postimg.cc/HxtTNj5V/wholesale-cannabis-light-cbd-bananas-unpackaged.png' },
  ],

  drugs: {
    data: [
      {
        _id: '1',
        name: 'Magic Pills',
        option: 'small_pills',
        image: 'https://i.postimg.cc/zfddyrV6/13up-health-opioids1-medium-Square-At3-X.jpg',
        description: 'Evrything what you need to know about "Small  pills" - check here !',
        price: 150,
        rate: 1,
        category: 'pills',
        productSelect: 'Type your choose...',
      },
      {
        _id: '2',
        name: 'Magic Pills',
        option: 'medium_pills',
        image: 'https://i.postimg.cc/m2M68J51/tablets-1.jpg',
        description: 'Evrything what you need to know about "Medium  pills" - check here !',
        price: 150,
        rate: 1,
        category: 'pills',
        productSelect: 'Type your choose...',
      },
      {
        _id: '3',
        name: 'Magic Pills',
        option: 'large_pills',
        image: 'https://i.postimg.cc/66FmVtYN/original-1.jpg',
        description: 'Evrything what you need to know about "Large  pills" - check here !',
        price: 150,
        rate: 1,
        category: 'pills',
        productSelect: 'Type your choose...',
      },

      {
        _id: '4',
        name: 'Best of excstasy   : )',
        option: 'begginers_excstasy',
        image: 'https://i.postimg.cc/ZnPpy8wn/IAD-mdma3-Hcrop-072719.jpg',
        description: 'Evrything what you need to know about "begginers_excstasy" - check here !',
        price: 100,
        rate: 2,
        category: 'ecstasy',
        productSelect: 'Type your choose...',
      },
      {
        _id: '5',
        name: 'Best of excstasy   : )',
        option: 'advanced_excstasy',
        image: 'https://i.postimg.cc/8kLh3GTG/comment-1592823813-Ai-NKO80jx2vx-E0ipi-Nxdg-D.jpg',
        description: 'Evrything what you need to know about "advanced_excstasy" - check here !',
        price: 100,
        rate: 2,
        category: 'ecstasy',
        productSelect: 'Type your choose...',
      },
      {
        _id: '6',
        name: 'Best of excstasy   : )',
        option: 'ultra-advanced_excstasy',
        image: 'https://i.postimg.cc/T33gpWg2/ups-ecstasy-pills-ravejungle.jpg',
        description: 'Evrything what you need to know about "ultra-advanced_excstasy" - check here !',
        price: 100,
        rate: 2,
        category: 'ecstasy',
        productSelect: 'Type your choose...',
      },

      {
        _id: '7',
        name: 'Best of Cannabis',
        option: 'ultra_trip',
        image: 'https://i.postimg.cc/7685MCG2/4840-jar-cannabis-1200x628-facebook.jpg',
        description: 'Evrything what you need to know about "Ultra_Trip" - check here !',
        price: 120,
        rate: 3,
        category: 'cannabis',
        productSelect: 'Type your choose...',
      },
      {
        _id: '8',
        name: 'Best of Cannabis',
        option: 'weird-adventure',
        image: 'https://i.postimg.cc/x89qhWPj/weedg829446642-1507837.jpg',
        description: 'Evrything what you need to know about "Weird_adventure" - check here !',
        price: 120,
        rate: 3,
        category: 'cannabis',
        productSelect: 'Type your choose...',
      },
      {
        _id: '9',
        name: 'Best of Cannabis',
        option: 'be_carefful',
        image: 'https://i.postimg.cc/xdbkzGCQ/cannabis-use-web-824x550.jpg',
        description: 'Evrything what you need to know about "Be carefful" - check here !',
        price: 120,
        rate: 3,
        category: 'cannabis',
        productSelect: 'Type your choose...',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },

  cart: {
    drugs: [],
  },
};
