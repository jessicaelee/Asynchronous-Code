// // //#1 ASYNC WAY - 

// async function getFact(num) {
//     let resp = await axios.get(`http://numbersapi.com/${num}?json`)
//     return resp.text
// }

// //#2 PROMISE WAY -


// //#3 CALLBACK WAY - 



// //#2 PROMISE WAY - 

// async function factsPromises() {
//     let p1 = axios.get(`http://numbersapi.com/1?json`)
//     let p2 = axios.get(`http://numbersapi.com/2?json`)
//     let p3 = axios.get(`http://numbersapi.com/3?json`)
//     let p4 = axios.get(`http://numbersapi.com/4?json`)

//     let answersPromise = Promise.all([p1, p2, p3, p4])

//     let results = await answersPromise

//     results.forEach(result => $("#facts").append(`<li>${result.data.text}</li>`))
// }

// factsPromises()

// //#2 ASYNC WAY -

// async function factsAsync() {
//     let p1 = axios.get(`http://numbersapi.com/1?json`)
//     let p2 = axios.get(`http://numbersapi.com/2?json`)
//     let p3 = axios.get(`http://numbersapi.com/3?json`)
//     let p4 = axios.get(`http://numbersapi.com/4?json`)

//     let r1 = await p1
//     let r2 = await p2
//     let r3 = await p3
//     let r4 = await p4

//     let answers = [r1, r2, r3, r4]

//     answers.forEach(answer => $("#facts").append(`<li>${answer.data.text}</li>`))
// }

// factsAsync()

// //#2 CALLBACK WAY - 

// function getFirstFact() {
//     return axios.get(`http://numbersapi.com/1?json`)
// }
// function getSecondFact() {
//     return axios.get(`http://numbersapi.com/2?json`)
// }
// function getThirdFact() {
//     return axios.get(`http://numbersapi.com/3?json`)
// }
// function getFourthFact() {
//     return axios.get(`http://numbersapi.com/4?json`)
// }

// function factsCB() {
//     axios.all([getFirstFact(), getSecondFact(), getThirdFact(), getFourthFact()])
//         .then(axios.spread(function (resp1, resp2, resp3, resp4) {
//             $("#facts").append(`<li>${resp1.data.text}</li>`)
//             $("#facts").append(`<li>${resp2.data.text}</li>`)
//             $("#facts").append(`<li>${resp3.data.text}</li>`)
//             $("#facts").append(`<li>${resp4.data.text}</li>`)
//         })
//         )
// }

// factsCB()

// //#3 PROMISE WAY -

// async function factsPromises(faveNum) {

//     let arr = [];
//     let counter = 0;
//     while (counter < 4) {
//         arr.push(axios.get(`http://numbersapi.com/${faveNum}?json`));
//         counter++;
//     }

//     // let p1 = axios.get(`http://numbersapi.com/${faveNum}?json`)
//     // let p2 = axios.get(`http://numbersapi.com/${faveNum}?json`)
//     // let p3 = axios.get(`http://numbersapi.com/${faveNum}?json`)
//     // let p4 = axios.get(`http://numbersapi.com/${faveNum}?json`)

//     let answersPromise = Promise.all(arr)

//     let results = await answersPromise

//     results.forEach(result => $("#facts").append(`<li>${result.data.text}</li>`))

// }

// factsPromises(7)

// //#3 ASYNC WAY - 

// async function factsAsync(faveNum) {
//     let p1 = axios.get(`http://numbersapi.com/${faveNum}?json`)
//     let p2 = axios.get(`http://numbersapi.com/${faveNum}?json`)
//     let p3 = axios.get(`http://numbersapi.com/${faveNum}?json`)
//     let p4 = axios.get(`http://numbersapi.com/${faveNum}?json`)

//     let r1 = await p1
//     let r2 = await p2
//     let r3 = await p3
//     let r4 = await p4

//     let answers = [r1, r2, r3, r4]

//     answers.forEach(answer => $("#facts").append(`<li>${answer.data.text}</li>`))
// }

// factsAsync(7)

// //#3 CALLBACK WAY - 

// function getFirstFact(faveNum) {
//     return axios.get(`http://numbersapi.com/${faveNum}?json`)
// }
// function getSecondFact(faveNum) {
//     return axios.get(`http://numbersapi.com/${faveNum}?json`)
// }
// function getThirdFact(faveNum) {
//     return axios.get(`http://numbersapi.com/${faveNum}?json`)
// }
// function getFourthFact(faveNum) {
//     return axios.get(`http://numbersapi.com/${faveNum}?json`)
// }

// function factsCB(faveNum) {
//     axios.all([getFirstFact(faveNum), getSecondFact(faveNum), getThirdFact(faveNum), getFourthFact(faveNum)])
//         .then(axios.spread(function (resp1, resp2, resp3, resp4) {
//             $("#facts").append(`<li>${resp1.data.text}</li>`)
//             $("#facts").append(`<li>${resp2.data.text}</li>`)
//             $("#facts").append(`<li>${resp3.data.text}</li>`)
//             $("#facts").append(`<li>${resp4.data.text}</li>`)
//         })
//         )
// }

// factsCB(7)

// 3.
let favNumber = 5;
let baseURL = "http://numbersapi.com";

Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
).then(facts => {
    facts.forEach(data => $("#facts").append(`<p>${data.text}</p>`));
});


