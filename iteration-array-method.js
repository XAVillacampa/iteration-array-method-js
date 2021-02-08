const personData = [
    {
        "name": "Mori",
        "age": 24,
        "gender": "F",
        "contact": "(263) 203-7243",
        "adress": "208 Pilar Street 1550, Mandaluyong City",
        "email": "ddou@ecour.se"
    },
    {
        "name": "Eka",
        "age": 21,
        "gender": "F",
        "contact": "(373) 568-6562",
        "adress": "Paranaque Plant II: Km 17 Cervantes St., West Service Rd., South Superhighway, Paranaque City",
        "email": "kcr.achraf.7@sensavault.com"
    },
    {
        "name": "Arianne",
        "age": 28,
        "gender": "F",
        "contact": "(393) 306-3216",
        "adress": "2/F JEMMS Building, Zaragoza Street, Manila",
        "email": "ijust.dude7@xzdhmail.tk"
    },
    {
        "name": "Angeline",
        "age": 36,
        "gender": "F",
        "contact": "(879) 308-8058",
        "adress": "Lasama Building, Arellano Extension, Ugac Sur, Tuguegarao City",
        "email": "nkarimcarlo@aeronauticalglossary.com"
    },
    {
        "name": "John",
        "age": 22,
        "gender": "M",
        "contact": "(307) 517-7519",
        "adress": "1425 Quirino Avenue, Paranaque City",
        "email": "0igorfeliperc@arguments.today"
    },
    {
        "name": "Arthur",
        "age": 25,
        "gender": "M",
        "contact": "(439) 801-7223",
        "adress": "B. Moreno Building, Highway, Gusa, Cagayan De Oro",
        "email": "gjoaovictor.antuw@ncaccenture.com"
    },
    {
        "name": "Martin",
        "age": 27,
        "gender": "M",
        "contact": "(741) 698-0380",
        "adress": "Anne Raquel Building Magsaysay Drive, 2200, Olangopo City",
        "email": "pcgupta.hacker@coronagg.com"
    },
    {
        "name": "Jonathan",
        "age": 30,
        "gender": "M",
        "contact": "(902) 396-6643",
        "adress": "McArthur Highway, A-9 Marina Arcade DAU, Mabalacat City, Pampanga",
        "email": "1mhamad.optima@itfeed.net"
    },
    {
        "name": "Lorraine",
        "age": 21,
        "gender": "F",
        "contact": "(895) 347-5081",
        "adress": "Galvan, Dagupan, Pangasinan",
        "email": "5ajaykumar.chl@tobuso.com"
    },
    {
        "name": "Eunice",
        "age": 21,
        "gender": "F",
        "contact": "(716) 891-1857",
        "adress": "Rm. 702 Manufacturers Building, Sta. Cruz",
        "email": "uahm@xasgs.com"
    }
];

let methods = {
    forloop: function () {
        console.log("\nfor loop\n");
        for (let x = 0; x < personData.length; x++) {
            console.log(personData[x]);
        };
    },
    forinloop: function () {
        console.log("for-in loop\n");
        for (x in personData) {
            console.log(personData[x])
        };
    },
    forofloop: function () {
        console.log("for-of loop\n");
        for (x of personData) {
            console.log(x)
        };
    },
    whileloop: function () {
        console.log("while loop\n");
        let x = 0;
        while (x < personData.length) {
            console.log(personData[x]);
            x++;
        };
    },
    forEachloop: function () {
        console.log("forEach loop\n");
        personData.forEach(function (a, b) {
            console.log(a);
        });
    },
    filterMethod: function () {
        console.log("Filter Method\n");
        let ageFilter = personData.filter(function (data) { return data.age <= 25 });
        console.log(ageFilter);
    },
    mapMethod: function () {
        console.log("Map Method\n");
        let map = personData.map(data => {
            return {
                'name': data.name,
                'age': data.age
            }
        });
        console.log(map);
    },
    reduceMethod: function () {
        console.log("Reduce Method\n");
        let sum = personData.reduce(function (acc, data) { return acc + data.age }, 0);
        console.log(sum);
    }
};

console.log(methods.forloop(personData));
console.log("==============================\n");
console.log(methods.forinloop(personData));
console.log("==============================\n");
console.log(methods.forofloop(personData));
console.log("==============================\n");
console.log(methods.forEachloop(personData));
console.log("==============================\n");
console.log(methods.whileloop(personData));
console.log("==============================\n");
console.log(methods.filterMethod(personData));
console.log("==============================\n");
console.log(methods.mapMethod(personData));
console.log("==============================\n");
console.log(methods.reduceMethod(personData));
console.log("==============================\n");

// console.log("\nfor loop\n");
// for (let x = 0; x < personData.length; x++) {
//     console.log(personData[x]);
// };
// 
// console.log("==============================\n");

// console.log("for-in loop\n");
// let x = 0;
// for (x in personData) {
//     console.log(personData[x])
// };
// 
// console.log("==============================\n");

// console.log("for-of loop\n");
// for (x of personData) {
//     console.log(x)
// };
// 
// console.log("==============================\n");

// console.log("While Loop\n");
// let y = 0;
// while (y < personData.length) {
//     console.log(personData[y]);
//     y++;
// };
// 
// console.log("==============================\n");

// console.log("forEach Loop\n");
// personData.forEach ( function (a, b) {
//     console.log(a);
// } );
// 
// console.log("==============================\n");

// console.log("Filter Array Method\n");
// let ageFilter = personData.filter( function(data) { return data.age <= 25 } );
// console.log(ageFilter);
// 
// console.log("==============================\n");

// console.log("Map Array Method\n");
// let map = personData.map(function (data) { return data.age });
// console.log(map);

// console.log("==============================\n");

// console.log("Reduce Array Method\n");
// let sum = personData.reduce(function (acc, data) { return acc + data.age }, 0);
// console.log(sum);