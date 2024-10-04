export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  const hood1989 = (expansion1989 === undefined) ? 89 : expansion1989; // Local variable for 1989
  const hood2019 = (expansion2019 === undefined) ? 19 : expansion2019; // Local variable for 2019

  return initialNumber + hood1989 + hood2019;
}
