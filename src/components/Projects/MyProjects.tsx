type ProjectArrayType = Array<{
  title: string;
  repo: string;
  website: string;
  tags: Array<string>;
  desc: string;
  color: string;
  date: string;
}>;

const projects: ProjectArrayType = [
  {
    title: "Study++",
    repo: "study-plus-plus",
    website: "",
    tags: [
        "website",
        "full-stack",
        "ai",
        "flask",
        "python",
        "javascript"
    ],
    desc: 'My first flask application: an AI-integrated homework helper with a JavaScript frontend and Python backend. Built with <a target="_blank" href="https://www.github.com/gracetic37">Grace Feng</a>.',
    date: "09-11-23",
    color: "black"
  },
  {
    title: "ViSeNet",
    repo: "visenet",
    website: "",
    tags: [
        "machine-learning",
        "neural-network",
        "computer-vision",
        "python"
    ],
    desc: "My introduction to neural networks by building one for the purpose of video segmentation.",
    color: "",
    date: "08-29-23"
  },
  {
    title: "Sound Experiments",
    repo: "sound-experiments",
    website: "",
    tags: [
        "sound-processing",
        "python"
    ],
    desc: "A project in which several different operations were applied to sound files to see what effects they would have.",
    color: "orange",
    date: "07-31-23"
  },
  {
    title: "Personal Website",
    repo: "vivaansinghvi07.github.io",
    website: "https://vivaansinghvi07.github.io",
    tags: [
        "website",
        "react",
        "typescript"
    ],
    desc: "The code for this website, which was my introduction to the React library and TypeScript!",
    color: "rgb(50, 125, 150)",
    date: "08-23-23"
  },
  {
    title: "MandelPlot",
    repo: "mandelplot",
    website: "GH_PAGES",
    tags: ["math", "fractals", "website", "javascript", "favorite"],
    desc: "A fully interactive, beautiful visualizer of the Mandelbrot Set. Renders zooms quickly at a magnitude of 10<sup>-11</sup>.",
    color: "green",
    date: "04-15-23",
  },
  {
    title: "AP Statistics Website",
    repo: "ap-statistics-website",
    website: "https://vivaans-statistics-site.000webhostapp.com/index.php",
    tags: ["math", "website", "javascript", "favorite"],
    desc: "A complementary website for AP Statistics, equipped with pages of notes and a calculator for each major concept.",
    color: "rgb(50, 125, 150)",
    date: "03-17-23",
  },
  {
    title: "SMC Data Challenge",
    repo: "smoky-mountain-data-comp",
    website: "",
    tags: [
      "computer-vision",
      "machine-learning",
      "python",
      "data-science",
      "favorite",
    ],
    desc: 'Uses machine learning alongside image processing to complete the first challenge in the <a href="https://smc-datachallenge.ornl.gov" target="_blank">SMCDC23</a> (paper <a href="https://github.com/vivaansinghvi07/smoky-mountain-data-comp/tree/main/paper/main.pdf" target="_blank">here</a>).',
    color: "",
    date: "07-29-23",
  },
  {
    title: "KenKen Solver",
    repo: "kenken-solver",
    website: "",
    tags: ["computer-vision", "algorithm", "python", "favorite"],
    desc: 'Uses image processing to read a <a href="https://www.kenkenpuzzle.com/" target="_blank">KenKen</a> board from a screenshot and solve it using backtracking.',
    color: "red",
    date: "06-01-23",
  },
  {
    title: "Pynterface",
    repo: "pynterface",
    website: "https://pypi.org/project/pynterface/",
    tags: ["library", "python", "terminal"],
    desc: "A library that makes terminal-based input and output easier and prettier. Features automatic text centering, gradients, and more.",
    color: "rgb(0, 150, 150)",
    date: "05-14-23",
  },
  {
    title: "UniSci",
    repo: "unisci",
    website: "https://pypi.org/project/unisci/",
    tags: ["math", "science", "library", "python"],
    desc: "A library designed to make scientific programming easier, with easy conversions and built-in formulas.",
    color: "",
    date: "04-26-23",
  },
  {
    title: "Why?",
    repo: "why",
    website: "GH_PAGES",
    tags: ["python", "javascript"],
    desc: "A collection of my stupid project ideas, currently featuring a TicTacToe model, an Even/Odd function generator, and a Python Uglifier.",
    color: "",
    date: "08-15-23",
  },
  {
    title: "CodeForces",
    repo: "codeforces",
    website: "",
    tags: ["competitive-programming", "favorite", "c", "c++", "python", "java"],
    desc: "A collection of CodeForces problems I have solved while programming. Includes solutions in C, C++, Java, and Python.",
    color: "green",
    date: "",
  },
  {
    title: "Advent of Code",
    repo: "advent-of-code",
    website: "",
    tags: ["competitive-programming", "python"],
    desc: 'A collection of some solutions for the <a href="https://www.adventofcode.com/2022" target="_blank">Advent of Code 2022</a>, with the goal of using as few lines as possible.',
    color: "",
    date: "07-11-23",
  },
  {
    title: "Text to Desmos",
    repo: "text-to-graph",
    website: "",
    tags: ["math", "python"],
    desc: 'Uses techinques such as polynomial interpolation to create animated graphs on <a href="https://www.desmos.com" target="_blank">Desmos</a> displaying an inputted text message.',
    color: "rgb(0, 100, 150)",
    date: "07-03-23",
  },
  {
    title: "Database Operations",
    repo: "database-operations",
    website: "",
    tags: ["database", "python"],
    desc: "The Python part of my work at ORNL learning database administration, with the SQL part being on their servers.",
    color: "",
    date: "06-16-23",
  },
  {
    title: "Rotation",
    repo: "rotation",
    website: "",
    tags: ["math", "gif", "python"],
    desc: "Uses 3-dimensional rotation matrices to generate GIFs of rotating shapes (currently, tetrahedron, rectangular prism, or sphere).",
    color: "rgb(0, 100, 150)",
    date: "05-22-23",
  },
  {
    title: "GM Scientific Consensus",
    repo: "gmo-scientific-consensus",
    website: "",
    tags: ["web-scraping", "data-science", "ai", "python"],
    desc: "Uses web scraping and artifical intelligence to determine the scientific consensus regarding genetically modified organisms.",
    color: "",
    date: "05-21-23",
  },
  {
    title: "Reaction Balancer",
    repo: "chemical-equation-balancer",
    website: "",
    tags: ["science", "algorithm", "python"],
    desc: 'Transforms a chemical reaction to a math equation, which is solved using <a href="https://www.sympy.org" target="_blank">SymPy</a>.',
    color: "",
    date: "05-17-23",
  },
  {
    title: "Sudoku Solver",
    repo: "sudoku-solver",
    website: "",
    tags: ["algorithm", "terminal", "java"],
    desc: "Uses the backtracking algorithm to solve any Sudoku board.",
    color: "",
    date: "05-02-23",
  },
  {
    title: "Fractal Generator",
    repo: "fractal-points",
    website: "",
    tags: ["fractals", "math", "python"],
    desc: "Generates Mandelbrot Set and Julia Set fractals, with adjustable depth, point count, and more.",
    color: "rgb(0, 100, 175)",
    date: "09-00-22",
  },
  {
    title: "Soccer Database",
    repo: "soccer-database-project",
    website: "",
    tags: ["database", "web-scraping", "python", "sql"],
    desc: "Stores a SQL database structure to hold information about soccer, using web scraping to gather data (work in progress).",
    color: "",
    date: "04-28-23",
  },
  {
    title: "Connect Four",
    repo: "connect-four",
    website: "GH_PAGES",
    tags: ["website", "game", "javascript"],
    desc: "An aesthetic, two-player implementation of the popular game Connect Four.",
    color: "rgb(0, 75, 150)",
    date: "03-28-23",
  },
  {
    title: "RL Custom Quickchats",
    repo: "rocket-league-custom-quickchats",
    website: "",
    tags: ["macro", "python"],
    desc: "Custom quickchat macros for Rocket League!",
    color: "",
    date: "03-22-23",
  },
  {
    title: "Get Javascript",
    repo: "get-javascript",
    website: "GH_PAGES",
    tags: ["website", "game", "javascript"],
    desc: 'A clone of the game <a href="https://play2048.co/" target="_blank">2048</a>, where the objective is to combine programming languages to reach Javascript!',
    color: "",
    date: "03-17-23",
  },
  {
    title: "Encryption",
    repo: "encryption",
    website: "",
    tags: ["algorithm", "python"],
    desc: "Applies various manpulations to a list of bits to encrypt a string of text.",
    color: "",
    date: "04-15-23",
  },
  {
    title: "Cancer Prediction",
    repo: "cancer-prediction",
    website: "",
    tags: ["machine-learning", "data-science", "python"],
    desc: "Uses cancer datasets to build predictive classifiers regarding the presence of malignant cancer in a person.",
    color: "",
    date: "04-12-23",
  },
  {
    title: "Stock Predictor",
    repo: "stock-predictor",
    website: "",
    tags: ["machine-learning", "favorite", "python"],
    desc: "Uses a model trained from historical stock data to predict if one should buy or sell a stock.",
    color: "",
    date: "03-30-23",
  },
  {
    title: "AI Text Detection",
    repo: "ai-text-detection",
    website: "",
    tags: ["machine-learning", "python"],
    desc: "Uses various text datasets to build a model that predicts if a piece of text was written by human or AI.",
    color: "",
    date: "03-16-23",
  },
  {
    title: "Mandelbrot Zooms",
    repo: "mandelbrot-gifs",
    website: "",
    tags: ["fractals", "gif", "math", "python"],
    desc: "Generates GIFs of the Mandelbrot set, including those of increasing depth, or increasing zoom level.",
    color: "rgb(0, 100, 175)",
    date: "03-29-23",
  },
  {
    title: "Misiurewicz Points",
    repo: "misiurewicz-points",
    website: "",
    tags: ["fractals", "math", "python"],
    desc: 'Generates <a href="https://en.wikipedia.org/wiki/Misiurewicz_point" target="_blank">Misiurewicz Points</a> for the Mandelbrot Set.',
    color: "",
    date: "03-26-23",
  },
  {
    title: "Typing Test",
    repo: "typing-test",
    website: "",
    tags: ["game", "terminal", "python"],
    desc: "A typing test that features dynamic color changing, accuracy scores, and timers, all from the terminal.",
    color: "rgb(0, 175, 0)",
    date: "03-20-23",
  },
  {
    title: "AI Essay Dataset",
    repo: "ai-essay-dataset",
    website:
      "https://www.kaggle.com/datasets/vivaansinghvi07/ai-generated-essays",
    tags: ["ai", "dataset", "python"],
    desc: "A dataset of nearly 3,000 essays all written using OpenAI's <code>text-davinci-003</code> model.",
    color: "",
    date: "03-12-23",
  },
  {
    title: "Wordle Cheater",
    repo: "wordle-cheater",
    website: "GH_PAGES",
    tags: ["website", "javascript"],
    desc: "A website that calculates the possible answers to any Wordle, given inputted green, yellow, and gray letters.",
    color: "",
    date: "03-18-23",
  },
  {
    title: "Income on SAT Scores",
    repo: "income-vs-sat-scores",
    website: "",
    tags: ["data-science", "python"],
    desc: "Analyzes the effects of school's median income in their ZIP codes on their average SAT scores.",
    color: "rgb(0, 75, 150)",
    date: "03-14-23",
  },
  {
    title: "Wordle",
    repo: "wordle",
    website: "",
    tags: ["game", "terminal", "java"],
    desc: "A Java implementation of the game Wordle, featuring everything from the original verison in the terminal.",
    color: "",
    date: "03-16-23",
  },
  {
    title: "Riemann Sums",
    repo: "riemann-sums",
    website: "",
    tags: ["math", "python"],
    desc: "A program that computes the Riemann sum of a given function and plots the bars used to determine this sum.",
    color: "",
    date: "11-00-22",
  },
  {
    title: "Minesweeper",
    repo: "minesweeper",
    website: "",
    tags: ["game", "terminal", "java"],
    desc: "A Java implementation of Minesweeper, which plays almost the same as the original.",
    color: "",
    date: "02-27-23",
  },
  {
    title: "Tower of Hanoi v2",
    repo: "tower-of-hanoi-v2",
    website: "",
    tags: ["game", "terminal", "java"],
    desc: "A remake of my previous Tower of Hanoi to add colors and exercise my Java.",
    color: "",
    date: "02-10-23",
  },
  {
    title: "Chess",
    repo: "chess",
    website: "",
    tags: ["game", "java"],
    desc: 'An implementation of chess created with <a target="_blank" href="https://www.github.com/calebyhan">@calebyhan</a>, where the king must be captured to finish the game.',
    color: "rgb(207, 185, 151)",
    date: "02-21-23",
  },
  {
    title: "Checkers Bot",
    repo: "checkers-bot",
    website: "",
    tags: ["game", "bot", "terminal", "java"],
    desc: "A Java implementation of checkers for the terminal, where the player goes against a bot - granted, not a very good one.",
    color: "",
    date: "01-19-23",
  },
  {
    title: "Pong",
    repo: "pong",
    website: "GH_PAGES",
    tags: ["website", "game", "p5.js", "javascript"],
    desc: "The game Pong implemented with p5.js, featuring adjustable settings for the ball and the paddle!",
    color: "",
    date: "01-20-23",
  },
  {
    title: "Tower of Hanoi",
    repo: "tower-of-hanoi",
    website: "",
    tags: ["game", "terminal", "java"],
    desc: 'A command-line implementation of the game <a href="https://en.wikipedia.org/wiki/Tower_of_Hanoi" target="_blank">Tower of Hanoi</a> using Java!',
    color: "",
    date: "01-16-23",
  },
  {
    title: "Tic-Tac-Toe Bot",
    repo: "tic-tac-toe",
    website: "",
    tags: ["game", "bot", "terminal", "java"],
    desc: "A command-line implementation of tic-tac-toe featuring a bot that never loses. It can also either compliment you or trash talk!",
    color: "",
    date: "01-13-23",
  },
  {
    title: "Hangman",
    repo: "hangman",
    website: "",
    tags: ["game", "terminal", "java"],
    desc: "The word guessing game Hangman, featuring ASCII art, compelling colors, and random words!",
    color: "",
    date: "02-03-23",
  },
  {
    title: "Aim Trainer",
    repo: "aim-trainer",
    website: "GH_PAGES",
    tags: ["website", "game", "p5.js", "javascript"],
    desc: "An aim trainer built using p5.js, with a click speed tester, a tracer, and a reaction test!",
    color: "",
    date: "01-31-23",
  },
];

// determine unique tags
const uniqueTags: Set<string> = new Set();
for (let project of projects) {
  for (let tag of project.tags) {
    uniqueTags.add(tag);
  }
}
const uniqueTagsArray: Array<string> = Array.from(uniqueTags);

// determine sorted by date
var projectsSortedByDate: ProjectArrayType = [...projects].sort((a, b) => {
  // check for blank
  if (!a.date && !b.date) {
    return 0;
  } else if (!a.date) {
    return -1;
  } else if (!b.date) {
    return 1;
  }

  // get dates
  let aDate = a.date.split("-");
  let bDate = b.date.split("-");

  for (let idx of [2, 0, 1]) {
    if (aDate[idx] === bDate[idx]) {
      continue;
    }
    return Number(aDate[idx] < bDate[idx]) * 2 - 1;
  }
  return 0;
});

// reverse accordingly
const projectsOldToNew: ProjectArrayType = [...projectsSortedByDate];
projectsSortedByDate.reverse();
const projectsNewToOld: ProjectArrayType = [...projectsSortedByDate];

// sort alphabetically
const projectsAlphabetical: ProjectArrayType = [...projects].sort((a, b) => {
  if (a.title < b.title) {
    return -1;
  } else {
    return 1;
  }
});

export {
  uniqueTagsArray,
  projectsOldToNew,
  projectsNewToOld,
  projectsAlphabetical,
};
