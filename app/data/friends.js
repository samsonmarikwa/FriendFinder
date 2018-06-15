// people who have registered are recorded in this array. The data could be coming from a persistent data source but for now I use the array.

var people = [{
    personName: "Jacob Zuma",
    photoLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIJkgsPnuKEIjRlHRFnp7_7VoKJAX8kA72YuaTtkVzkPOxO8orA",
    scores: [1,
        3,
        5,
        2,
        3,
        1,
        5,
        3,
        4,
        2
    ],
    difference: 0
}, {
    personName: "Donald Trump",
    photoLink: "http://inthesetimes.com/images/articles/trump_flicker_face_yess.jpg",
    scores: [1,
        3,
        5,
        2,
        3,
        1,
        5,
        3,
        4,
        2
    ],
    difference: 0
}, ];

module.exports = people;