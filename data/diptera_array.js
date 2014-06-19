var specOrder = [
    "Acartophthalmidae", 
    "Acroceridae", 
    "Agromyzidae", 
    "Anisopodidae", 
    "Anthomyiidae", 
    "Anthomyzidae", 
    "Apioceridae", 
    "Apsilocephalidae", 
    "Asilidae", 
    "Athericidae", 
    "Aulacigastridae", 
    "Bibionidae", 
    "Blephariceridae", 
    "Blepharoceridae", 
    "Bolitophilidae",
    "Bombyliidae", 
    "Borboridae", 
    "Calliphoridae", 
    "Canaceidae", 
    "Canacidae", 
    "Carnidae", 
    "Cecidomyiidae", 
    "Celyphidae", 
    "Ceratopogonidae", 
    "Chamaemyidae", 
    "Chamaemyiidae", 
    "Chaoboridae", 
    "Chironomidae", 
    "Chloropidae", 
    "Chyromyiidae", 
    "Clusiidae", 
    "Coelopidae", 
    "Conopidae", 
    "Culicidae", 
    "Curtonotidae", 
    "Cuterebridae", 
    "Cylindrotomidae", 
    "Deuterophlebiidae", 
    "Diadocidiidae", 
    "Diastatidae", 
    "Diopsidae", 
    "Ditomyiidae",
    "Dixidae", 
    "Dixiidae", 
    "Dolichopodidae", 
    "Drosophilidae", 
    "Dryomyzidae", 
    "Empididae", 
    "Ephydridae", 
    "Fanniidae", 
    "Heleomyzidae", 
    "Hilarimorphidae",
    "Hippoboscidae", 
    "Keroplatidae", 
    "Lauxaniidae", 
    "Leptidae", 
    "Limoniidae", 
    "Liriopidae",
    "Lonchaeidae", 
    "Lonchopteridae", 
    "Megamerinidae", 
    "Micropezidae", 
    "Milichiidae", 
    "Muscidae", 
    "Muscoidea", 
    "Mycetophilidae", 
    "Mydidae", 
    "Nemestrinidae", 
    "Neriidae", 
    "Nycteribiidae", 
    "Odiniidae", 
    "Oestridae", 
    "Opomyzidae", 
    "Oreogetonidae", 
    "Osteridae", 
    "Ostridae", 
    "Otitidae", 
    "Pallopteridae", 
    "Pantophthalmidae", 
    "Pediciidae", 
    "Pelecorhynchidae", 
    "Phoridae", 
    "Piophilidae", 
    "Pipunculidae", 
    "Platypezidae",
    "Platystomatidae", 
    "Psilidae", 
    "Psychodidae", 
    "Ptychopteridae", 
    "Pyrgotidae", 
    "Rhagionidae", 
    "Rhinophoridae", 
    "Rhopalomeridae", 
    "Richardiidae", 
    "Sarcophagidae", 
    "Scathophagidae", 
    "Scatopsidae", 
    "Scenopinidae", 
    "Sciaridae", 
    "Sciaroidea", 
    "Sciomyzidae", 
    "Sepsidae", 
    "Simulidae", 
    "Simuliidae", 
    "Sphaeroceridae", 
    "Stratiomyidae",
    "Streblidae", 
    "Syringogastridae", 
    "Syrphidae", 
    "Tabanidae", 
    "Tachinidae", 
    "Tanyderidae", 
    "Tanypezidae", 
    "Tendipedidae", 
    "Tephritidae", 
    "Tetanoceridae", 
    "Therevidae", 
    "Tipulidae", 
    "Trichoceridae", 
    "Tricoceridae", 
    "Trixoscelididae", 
    "Ulidiidae", 
    "Undetermined", 
    "Vermileonidae", 
    "Xylomyidae", 
    "Xylophagidae" 
];
var specCount = [
    1,
    62,
    969,
    133,
    3852,
    113,
    22,
    1,
    6143,
    71,
    116,
    1163,
    287,
    41,
    88,
    3818,
    109,
    1456,
    134,
    85,
    70,
    214,
    10,
    516,
    77,
    12,
    165,
    48799,
    3350,
    17,
    35,
    29,
    663,
    8416,
    0,
    3,
    560,
    59,
    5,
    10,
    74,
    4,
    231,
    29,
    6650,
    1066,
    54,
    2254,
    17460,
    75,
    282,
    1,
    143, 
    312,
    1315,
    1,
    23802,
    5,
    290,
    174,
    7,
    1243,
    187,
    3033,
    1,
    5668,
    164,
    46,
    100,
    18,
    46,
    12,
    10, 
    1,
    58,
    84,
    1406,
    38,
    2,
    1305,
    2,
    588,
    175,
    292,
    71,
    388,
    156,
    218,
    349,
    141,
    1162,
    43,
    2,
    53,
    1280,
    225,
    49,
    68, 
    1142,
    1,
    1439,
    969,
    188,
    2102,
    1024,
    1690,
    15,
    3,
    7755,
    6984,
    4700,
    17,
    15,
    7126,
    1989,
    1,
    331,
    24812,
    47,
    855,
    46,
    1,
    34021,
    6,
    70,
    119,
];

function wordCloudSize {
    for (var i = 0; i < specOrder.length; i++) {
        if (specCount[i] <= 100) {
            wordCloudSize(specOrder[i]) = 1
        } else if (specCount[i] <= 500) {
            wordCloudSize(specOrder[i]) = 2
        } else if (specCount[i] <= 1000) {
            wordCloudSize(specOrder[i]) = 3
        } else if (specCount[i] <= 5000) {
            wordCloudSize(specOrder[i]) = 4
        } else if (specCount[i] <= 10000) {
            wordCloudSize(specOrder[i]) = 5
        } else if (specCount[i] <= 50000) {
            wordCloudSize(specOrder[i]) = 6
        } else if (specCount[i] <= 100000) {
            wordCloudSize(specOrder[i]) = 7
        } else if (specCount[i] <= 200000) {
            wordCloudSize(specOrder[i]) = 8
        } else if (specCount[i] <= 300000) {
            wordCloudSize(specOrder[i]) = 9
        } else {
            wordCloudSize(specOrder[i]) = 10
        }
    }
}