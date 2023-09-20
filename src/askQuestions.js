process.stdout.write('Welcome!');

const questions = [
  'What is your name?',
  'What are you doing?',
  'What did you have for lunch?',
];

const answers = [];

function ask(questionIndex = 0) {
  process.stdout.write(`\n\n ${questions[questionIndex]}`);
  process.stdout.write(` > `);
}

ask();

process.stdin.on('data', function (data) {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on('exit', function () {
  process.stdout.write('\n\n');
  process.stdout.write(`Nice meeting you ${answers[0]}, enjoy ${answers[1]}.`);
});
