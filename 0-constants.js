export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;//i use const
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
