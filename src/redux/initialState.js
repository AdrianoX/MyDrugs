export const initialState = {
  options: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  drugs: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  cart: {
    drugs: [],
  },
};


// export const initialState = {


//   options: {
//     data: [
//       { id: 'Small Pills',
//         option: 'Sweet & Dry',
//         image: 'https://i.postimg.cc/26f0676X/Blue-Elephant-pills-haunt-the-young.jpg' },
//       { id: 'Small Pills',
//         option: 'Hard LiQ',
//         image: 'https://i.postimg.cc/g03KfLDy/sleeping-pills-alzheimers.jpg' },
//       { id: 'Small Pills',
//         option: 'Porot SQ',
//         image: 'https://i.postimg.cc/FzTpTtx2/gettyimages-607034539-2000.jpg' },
//       { id: 'Medium Pills',
//         option: 'Marco One Love',
//         image: 'https://i.postimg.cc/8PnwWScv/LOVE-PILLS-PIGULKI-MILOSCI-PREZENT-NA-WALENTYNKI-Waga-z-opakowaniem-0-1-kg.jpg' },
//       { id: 'Medium Pills',
//         option: 'Pablo Bon',
//         image: 'https://i.postimg.cc/G2JqsTT3/6968d6f7404387959f5ae9388675.jpg' },
//       { id: 'Medium Pills',
//         option: 'Bamos Rapido',
//         image: 'https://i.postimg.cc/7YbnqW9Z/spilled-pills-feature.jpg' },
//       { id: 'Limited Editi0n',
//         option: 'Mars',
//         image: 'https://i.postimg.cc/x8pGKvfQ/sleeping-pills-1170.jpg' },
//       { id: 'Limited Editi0n',
//         option: 'Saturn',
//         image: 'https://i.postimg.cc/mgvwXyQ2/medications.jpg' },
//       { id: 'Limited Editi0n',
//         option: 'Earth',
//         image: 'https://i.postimg.cc/G3x54VvP/77475597-m6300160-pills-spl.jpg' },

//       { id: 'Begginers Excstasy',
//         option: 'New World',
//         image: 'https://i.postimg.cc/50vX28Gy/blue-pills.jpg' },
//       { id: 'Begginers Excstasy',
//         option: 'Kindergarden',
//         image: 'https://i.postimg.cc/KcPKXrBs/174220762.jpg' },
//       { id: 'Begginers Excstasy',
//         option: 'Say Hello To Uncle Festa',
//         image: 'https://i.postimg.cc/4N8xZ8dw/image.jpg' },
//       { id: 'Advanced Excstasy',
//         option: 'Old Sql',
//         image: 'https://i.postimg.cc/2645DrbB/pill1jpg.jpg' },
//       { id: 'Advanced Excstasy',
//         option: 'Spicy Joe',
//         image: 'https://i.postimg.cc/rsVq2W2v/k362bpepfxs31.jpg' },
//       { id: 'Advanced Excstasy',
//         option: 'Senior Gonzales',
//         image: 'https://i.postimg.cc/mZyrpZWv/ffrokjp0pvo11.jpg' },
//       { id: 'Level Pro',
//         option: 'Ultra Trip',
//         image: 'https://i.postimg.cc/5tDHJssD/EXTRA-POTENT-IKEA-BRANDED-ECSTASY-is-very-dangerous-Do-Not-Take-this-VIVISXN-MEDIA-do-not-trip-on-th.jpg' },
//       { id: 'Level Pro',
//         option: 'Weird Adventure',
//         image: 'https://i.postimg.cc/qq14JRkg/Snapchat-ecstasy-pills-696x366-1280x720.png' },
//       { id: 'Level Pro',
//         option: 'Be carefful',
//         image: 'https://i.postimg.cc/QxqW7kMW/13793873-smiley-face-pills.jpg' },

//       { id: 'Ultra Trip',
//         option: 'Bob 24',
//         image: 'https://i.postimg.cc/0Q82C73z/Fedora.jpg' },
//       { id: 'Ultra Trip',
//         option: 'Lilly 15',
//         image: 'https://i.postimg.cc/HWvsQctL/marijuana-454601963-resized-569fd2345f9b58eba4ad583d.jpg' },
//       { id: 'Ultra Trip',
//         option: 'Prodly 01',
//         image: 'https://i.postimg.cc/XJ7454GF/i-Stock-000048088138-Large.jpg' },
//       { id: 'Weird Adventure',
//         option: 'Giant Master',
//         image: 'https://i.postimg.cc/HsjnK4L5/Faceoff-OG-jar-origins-of-og-kush-strains.jpg' },
//       { id: 'Weird Adventure',
//         option: 'Hombre Snatch',
//         image: 'https://i.postimg.cc/mr7tjLg5/17125872-302107570204180-6553978583113531392-n.jpg' },
//       { id: 'Weird Adventure',
//         option: 'Uncle George',
//         image: 'https://i.postimg.cc/y8Zd61c8/Faceoff-OG-jar-origins-of-og-kush-strains-2.jpg' },
//       { id: 'Be Carefful',
//         option: 'Happy Martha',
//         image: 'https://i.postimg.cc/XJ7454GF/i-Stock-000048088138-Large.jpg' },
//       { id: 'Be Carefful',
//         option: 'Proud Weronica',
//         image: 'https://i.postimg.cc/PJ2rCNrB/antitrust-cannabis-monopoly-e1593721551755.jpg' },
//       { id: 'Be Carefful',
//         option: 'Curious Sandra',
//         image: 'https://i.postimg.cc/HxtTNj5V/wholesale-cannabis-light-cbd-bananas-unpackaged.png' },


//       { id: 'Light Mush',
//         option: 'Ponciss',
//         image: 'https://i.postimg.cc/2yNSqMyV/4683.jpg' },
//       { id: 'Light Mush',
//         option: 'MarQss',
//         image: 'https://i.postimg.cc/xTVjfwNm/Untitle2d.png' },
//       { id: 'Light Mush',
//         option: 'Batrolla',
//         image: 'https://i.postimg.cc/GhPLHXv5/Untitled1.png'},
//       { id: 'Medium Mush',
//         option: 'Rotosolo Moren',
//         image: 'https://i.postimg.cc/wTHBgCnr/1476449271-the-magic-of-mushrooms.jpg' },
//       { id: 'Medium Mush',
//         option: 'Kornollo Deqs',
//         image: 'https://i.postimg.cc/3r2RM8fp/AP-18337760540761.jpg' },
//       { id: 'Medium Mush',
//         option: 'Huees Poss',
//         image: 'https://i.postimg.cc/1R09CW4r/psychedelicc.jpg' },
//       { id: 'Huge Mush',
//         option: 'Latonna Pasiv',
//         image: 'https://i.postimg.cc/X7VnTwCS/psilocybe-semilanceata-shrooms-magic.jpg' },
//       { id: 'Huge Mush',
//         option: 'Mendre Korll',
//         image: 'https://i.postimg.cc/15yxYsNv/Untit222led.png' },
//       { id: 'Huge Mush',
//         option: 'PrelloQ BastQ',
//         image: 'https://i.postimg.cc/xT5wwhvn/Untitled.png' },


//       { id: 'Simpsons Stamps',
//         option: 'HomerLSD',
//         image: 'https://i.postimg.cc/vB8SML5k/81l0d-Rsl-Sh-L-AC-SL1142.jpg' },
//       { id: 'Simpsons Stamps',
//         option: 'Homer & Barth',
//         image: 'https://i.postimg.cc/3wRqpFch/simpsons-blotter-art-lsd-acid-art-1-d5b46acf6060d6adf9eb463a184c628a.jpg' },
//       { id: 'Simpsons Stamps',
//         option: 'Simpson Family',
//         image: 'https://i.postimg.cc/QNWR0Sxx/gwdaq9nl3rj31.jpg'},
//       { id: 'Limited edition',
//         option: 'PacMan',
//         image: 'https://i.postimg.cc/RZcPHbR2/blot294.jpg' },
//       { id: 'Limited edition',
//         option: 'Queen',
//         image: 'https://i.postimg.cc/pdH6ctr2/91n-Pb-Hra-Ul-L-SL1500.jpg' },
//       { id: 'Limited edition',
//         option: 'Albert',
//         image: 'https://i.postimg.cc/CMRpqSft/il-fullxfull-894991209-a7ge.jpg' },
//       { id: 'Veterans only',
//         option: 'MicroDosing',
//         image: 'https://i.postimg.cc/Jhr94LLp/microdosing.jpg' },
//       { id: 'Veterans only',
//         option: 'SunShine',
//         image: 'https://i.postimg.cc/t4tKjgL1/k514qw5pfgj31.jpg' },
//       { id: 'Veterans only',
//         option: 'GOT edition',
//         image: 'https://i.postimg.cc/WzhWqNW7/2xb39enn7pu01.jpg' },

//     ],
//     loading: {
//       active: false,
//       error: false,
//     },
//   },

//   drugs: {
//     data: [
//       {
//         _id: '1',
//         name: 'First Time : )',
//         option: 'Small Pills',
//         image: 'https://i.postimg.cc/zfddyrV6/13up-health-opioids1-medium-Square-At3-X.jpg',
//         description: 'Evrything what you need to know about "Small  pills" - check here !',
//         price: 90,
//         rate: 1,
//         category: 'pills',
//         categoryName: 'Only best Pills !',
//         categoryImg: 'https://i.postimg.cc/VvqRrQ1H/R3ak9ku-TURBXy8w-YWFh-Nz-Zi-My0x-Zj-Vj-LTRm-ZTAt-OWQw-Ni03-Zm-Ew-MGYw-MDc5-NDkuan-Bl-Z5-GVAs0-DBw-DDw4-Gh-MAE.jpg',
//         productSelect: 'Your choice is ...',
//       },
//       {
//         _id: '2',
//         name: 'Something New : )',
//         option: 'Medium Pills',
//         image: 'https://i.postimg.cc/m2M68J51/tablets-1.jpg',
//         description: 'Evrything what you need to know about "Medium  pills" - check here !',
//         price: 110,
//         rate: 1,
//         category: 'pills',
//         productSelect: 'Your choice is ...',
//       },
//       {
//         _id: '3',
//         name: 'Veterans Only : )',
//         option: 'Limited Editi0n',
//         image: 'https://i.postimg.cc/66FmVtYN/original-1.jpg',
//         description: 'Evrything what you need to know about "Limited Editi0n" - check here !',
//         price: 135,
//         rate: 1,
//         category: 'pills',
//         productSelect: 'Your choice is ...',
//       },

//       {
//         _id: '4',
//         name: 'First Time : )',
//         option: 'Begginers Excstasy',
//         image: 'https://i.postimg.cc/ZnPpy8wn/IAD-mdma3-Hcrop-072719.jpg',
//         description: 'Evrything what you need to know about "Begginers Excstasy" - check here !',
//         price: 100,
//         rate: 2,
//         category: 'ecstasy',
//         categoryName: '100% oryginal Ecstasy !',
//         categoryImg: 'https://i.postimg.cc/XYQskb5R/nintchdbpict000254677956.jpg',
//         productSelect: 'Your choice is ...',
//       },
//       {
//         _id: '5',
//         name: 'Something New  : )',
//         option: 'Advanced Excstasy',
//         image: 'https://i.postimg.cc/8kLh3GTG/comment-1592823813-Ai-NKO80jx2vx-E0ipi-Nxdg-D.jpg',
//         description: 'Evrything what you need to know about "Advanced Excstasy" - check here !',
//         price: 115,
//         rate: 2,
//         category: 'ecstasy',
//         productSelect: 'Your choice is ...',
//       },
//       {
//         _id: '6',
//         name: 'Veterans Only : )',
//         option: 'Level Pro',
//         image: 'https://i.postimg.cc/T33gpWg2/ups-ecstasy-pills-ravejungle.jpg',
//         description: 'Evrything what you need to know about "Level Pro" - check here !',
//         price: 140,
//         rate: 2,
//         category: 'ecstasy',
//         productSelect: 'Your choice is ...',
//       },

//       {
//         _id: '7',
//         name: 'First Time : )',
//         option: 'Ultra Trip',
//         image: 'https://i.postimg.cc/7685MCG2/4840-jar-cannabis-1200x628-facebook.jpg',
//         description: 'Evrything what you need to know about "Ultra_Trip" - check here !',
//         price: 120,
//         rate: 3,
//         category: 'cannabis',
//         categoryName: 'Best kind of Cannabis !',
//         categoryImg:'https://i.postimg.cc/bYBVK8Fp/photo-1558010089-ff6fd29ea39a.jpg',
//         productSelect: 'Your choice is ...',
//       },
//       {
//         _id: '8',
//         name: 'Something New : )',
//         option: 'Weird Adventure',
//         image: 'https://i.postimg.cc/x89qhWPj/weedg829446642-1507837.jpg',
//         description: 'Evrything what you need to know about "Weird_adventure" - check here !',
//         price: 140,
//         rate: 3,
//         category: 'cannabis',
//         productSelect: 'Your choice is ...',
//       },
//       {
//         _id: '9',
//         name: 'Veterans Only : )',
//         option: 'Be Carefful',
//         image: 'https://i.postimg.cc/xdbkzGCQ/cannabis-use-web-824x550.jpg',
//         description: 'Evrything what you need to know about "Be carefful" - check here !',
//         price: 160,
//         rate: 3,
//         category: 'cannabis',
//         productSelect: 'Your choice is ...',
//       },


//       {
//         _id: '10',
//         name: 'First Time : )',
//         option: 'Light Mush',
//         image: 'https://i.postimg.cc/vZ287cDR/mushroom-2798150-1280-e1544482633117.jpg',
//         description: 'Evrything what you need to know about "Tiny mushrooms" - check here !',
//         price: 75,
//         rate: 1,
//         category: 'mushroom',
//         categoryName: 'Mushrooms invasion !',
//         categoryImg: 'https://i.postimg.cc/7Lpxcdgm/8171704c9fd4445cae8dc71206f07cd1-super-Jumbo.jpg',
//         productSelect: 'Your choice is ...',
//       },
//       {
//         _id: '11',
//         name: 'Something New : )',
//         option: 'Medium Mush',
//         image: 'https://i.postimg.cc/fRzkjGKd/545bcd79ecad046376d0d997.jpg',
//         description: 'Evrything what you need to know about "Medium mushrooms" - check here !',
//         price: 95,
//         rate: 1,
//         category: 'mushroom',
//         productSelect: 'Your choice is ...',
//       },
//       {
//         _id: '12',
//         name: 'Veterans Only : )',
//         option: 'Huge Mush',
//         image: 'https://i.postimg.cc/V6nYcgg1/Shrooms.jpg',
//         description: 'Evrything what you need to know about "Huge mushrooms" - check here !',
//         price: 115,
//         rate: 1,
//         category: 'mushroom',
//         productSelect: 'Your choice is ...',
//       },


//       {
//         _id: '13',
//         name: 'First Time',
//         option: 'Simpsons Stamps',
//         image: 'https://i.postimg.cc/GtVMkW6n/91-S73-W1-RULL-AC-SL1500.jpg',
//         description: 'Evrything what you need to know about "Simpsons Stamps" - check here !',
//         price: 155,
//         rate: 1,
//         category: 'lsd',
//         categoryName: 'LSD Looooong Trip !',
//         categoryImg: 'https://i.postimg.cc/gjCDwv6Y/ef365d56-scalecrop-840x350.jpg',
//         productSelect: 'Your choice is ...',
//       },
//       {
//         _id: '14',
//         name: 'Something new',
//         option: 'Limited edition',
//         image: 'https://i.postimg.cc/zfFP9PHT/81l-Fb-NX-e-NL-AC-SL1128.jpg',
//         description: 'Evrything what you need to know about "Limited edition" - check here !',
//         price: 165,
//         rate: 1,
//         category: 'lsd',
//         productSelect: 'Your choice is ...',
//       },
//       {
//         _id: '15',
//         name: 'Welcome back my old friend ; )',
//         option: 'Veterans only',
//         image: 'https://i.postimg.cc/nrj2cdrR/conan-blotter.jpg',
//         description: 'Evrything what you need to know about "Veterans only" - check here !',
//         price: 175,
//         rate: 1,
//         category: 'lsd',
//         productSelect: 'Your choice is ...',
//       },
//     ],
//     loading: {
//       active: false,
//       error: false,
//     },
//   },


//   cart: {
//     drugs: [],
//   },
// };





