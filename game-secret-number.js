function guessSecretNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let left = 1;
  let right = 100;
  let attempts = 0;

  console.log(randomNumber);

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    attempts++;

    console.log(`Компьютер 2: Пробую число ${mid}\nПопытки: ${attempts}`);

    if (mid === randomNumber) {
      return console.log(`Компьютер 1: Угадал!\nПотрачено попыток: ${attempts}`);
    } else if (mid > randomNumber) {
      right = mid - 1;
      console.log(`Компьютер 1: Меньше.\nДиапазон: от ${left} до ${right}`);
    } else {
      left = mid + 1;
      console.log(`Компьютер 1: Больше.\nДиапазон: от ${left} до ${right}`);
    }
  }
}

guessSecretNumber();