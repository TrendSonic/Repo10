function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "CD"
            },
            gold: true
        },
        002: {
            artist: "Some artist",
            title: "Violina",
            release_year: 1990,
            formats: {
                1: "LP",
                2: "8T",
                3: "CD"
            },
            gold: true
        }
    };
}
myFunction()[2];
module.exports = myFunction;