
var specOrder = [
    "Anoplura", 
    "Archaeognatha", 
    "Blattodea",
    "Coleoptera",
    "Dermaptera",
    "Diptera",
    "Embioptera",
    "Ephemeroptera",
    "Grylloblattodea",
    "Hemiptera",
    "Hymenoptera",
    "Isoptera",
    "Lepidoptera",
    "Mallophaga",
    "Mantodea",
    "Mecoptera",
    "Megaloptera",
    "Neuroptera",
    "Odonata",
    "Orthoptera",
    "Phasmatodea",
    "Phthiraptera",
    "Plecoptera",
    "Psocoptera",
    "Raphidioptera",
    "Rhaphidioptera",
    "Siphonaptera",
    "Strepsiptera",
    "Thysanoptera",
    "Thysanura",
    "Trichoptera",
    "Undetermined",
    "Zoraptera",
];
var specCount = [
    2,
    372,
    32819,
    273310,
    10746,
    252071,
    51,
    29988,
    22,
    39885,
    207286,
    2001,
    117564,
    15,
    13031,
    723,
    3629,
    3654,
    51179,
    496422,
    11935,
    1149,
    9625,
    876,
    184,
    43,
    587,
    58,
    1829,
    143,
    64315,
    41171,
    1
];
function wordCloudSize {
    if (specCount[i] <= 100){
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