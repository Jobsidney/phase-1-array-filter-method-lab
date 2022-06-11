// Code your solution here
// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching=drivers=>drivers.filter(driver => driver=='Bobby')
console.log(findMatching(drivers));