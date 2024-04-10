export default function Die({ numSides }) {
  console.log(numSides);
  const roll = Math.floor(Math.random() * 6) + 1;
  return <p>Die Roll {roll}</p>;
}
