const projects = [
  {
    title: "MandelPlot",
    repo: "mandelplot",
    website: "GH_PAGES",
    tags: ["math", "fractals", "website", "javascript", "favorite"],
    desc: "A fully interactive, beautiful visualizer of the Mandelbrot Set. Renders zooms quickly at a magnitude of 10<sup>-11</sup>.",
    color: "green",
  },
  {
    title: "AP Statistics Website",
    repo: "ap-statistics-website",
    website: "https://vivaans-statistics-site.000webhostapp.com/index.php",
    tags: ["math", "website", "javascript", "favorite"],
    desc: "A complementary website for AP Statistics, equipped with pages of notes and a calculator for each major concept.",
    color: "rgb(50, 125, 150)",
  },
  {
    title: "SMC Data Challenge",
    repo: "smoky-mountain-data-comp",
    website: "",
    tags: ["computer-vision", "machine-learning", "python", "research", "favorite"],
    desc: "Uses machine learning alongside image processing to complete the first challenge in the <a href=\"https://smc-datachallenge.ornl.gov\" target=\"_blank\">SMCDC23</a> (paper <a href=\"https://github.com/vivaansinghvi07/smoky-mountain-data-comp/tree/main/paper/main.pdf\" target=\"_blank\">here</a>).",
    color: "",
  },
  {
    title: "KenKen Solver",
    repo: "kenken-solver",
    website: "",
    tags: ["computer-vision", "algorithm", "python", "favorite"],
    desc: 'Uses image processing to read a <a href="https://www.kenkenpuzzle.com/" target="_blank">KenKen</a> board from a screenshot and solve it using backtracking.',
    color: "red",
  },
  {
    title: "Pynterface",
    repo: "pynterface",
    website: "https://pypi.org/project/pynterface/",
    tags: ["library", "python", "terminal"],
    desc: "A library that makes terminal-based input and output easier and prettier. Features automatic text centering, gradients, and more.",
    color: "rgb(0, 150, 150)",
  },
  {
    title: "UniSci",
    repo: "unisci",
    website: "https://pypi.org/project/unisci/",
    tags: ["math", "science", "library", "python"],
    desc: "A library designed to make scientific programming easier, with easy conversions and built-in formulas.",
    color: "",
  },
  {
    title: "Why?",
    repo: "why",
    website: "GH_PAGES",
    tags: ["python", "javascript"],
    desc: "A collection of my stupid project ideas, currently featuring a TicTacToe model, an Even/Odd function generator, and a Python Uglifier.",
    color: "",
  },
  {
    title: "CodeForces",
    repo: "codeforces",
    website: "",
    tags: ["competitive-programming", "favorite", "c", "c++", "python", "java"],
    desc: "A collection of CodeForces problems I have solved while programming. Includes solutions in C, C++, Java, and Python.",
    color: "green",
  },
  {
    title: "Advent of Code",
    repo: "advent-of-code",
    website: "",
    tags: ["competitive-programming", "python"],
    desc: 'A collection of some solutions for the <a href="https://www.adventofcode.com/2022" target="_blank">Advent of Code 2022</a>, with the goal of using as few lines as possible.',
    color: "",
  },
  {
    title: "Text to Desmos",
    repo: "text-to-graph",
    website: "",
    tags: ["math", "python"],
    desc: "Uses techinques such as polynomial interpolation to create animated graphs on <a href=\"https://www.desmos.com\" target=\"_blank\">Desmos</a> displaying an inputted text message.",
    color: "rgb(0, 100, 150)"
  },
  {
    title: "Database Operations",
    repo: "database-operations",
    website: "",
    tags: ["database", "python"],
    desc: "The Python part of my work at ORNL learning database administration, with the SQL part being on their servers.",
    color: ""
  },
  {
    title: "Rotation",
    repo: "rotation",
    website: "",
    tags: ["math", "gif", "python"],
    desc: "Uses 3-dimensional rotation matrices to generate GIFs of rotating shapes (currently, tetrahedron, rectangular prism, or sphere).",
    color: "rgb(0, 100, 150)"
  },
  {
    title: "GM Scientific Consensus",
    repo: "gmo-scientific-consensus",
    website: "",
    tags: ["web-scraping", "research", "ai", "python"],
    desc: "Uses web scraping and artifical intelligence to determine the scientific consensus regarding genetically modified organisms.",
    color: ""
  },
  {
    title: "Reaction Balancer",
    repo: "chemical-equation-balancer",
    website: "",
    tags: ["science", "algorithm", "python"], 
    desc: "Transforms a chemical reaction to a math equation, which is solved using <a href=\"https://www.sympy.org\" target=\"_blank\">SymPy</a>.",
    color: ""
  },
  {
    title: "Sudoku Solver",
    repo: "sudoku-solver",
    website: "",
    tags: ["algorithm", "terminal", "java"],
    desc: "Uses the backtracking algorithm to solve any Sudoku board.",
    color: ""
  },
  {
    title: "Fractal Generator",
    repo: "fractal-points",
    website: "",
    tags: ["fractals", "math", "python"],
    desc: "Generates Mandelbrot Set and Julia Set fractals, with adjustable depth, point count, and more.",
    color: "rgb(0, 100, 175)"
  },
  {
    title: "Soccer Database",
    repo: "soccer-database-project",
    website: "",
    tags: ["database", "web-scraping", "python", "sql"],
    desc: "Stores a SQL database structure to hold information about soccer, using web scraping to gather data (work in progress).",
    color: ""
  },
  {
    title: "Connect Four",
    repo: "connect-four",
    website: "GH_PAGES",
    tags: ["website", "game", "javascript"],
    desc: "An aesthetic, two-player implementation of the popular game Connect Four.",
    color: "rgb(0, 75, 150)"
  },
  {
    title: "RL Custom Quickchats",
    repo: "rocket-league-custom-quickchats",
    website: "",
    tags: ["macro", "python"],
    desc: "Custom quickchat macros for Rocket League!",
    color: ""
  },
  {
    title: "Get Javascript",
    repo: "get-javascript",
    website: "GH_PAGES",
    tags: ["website", "game", "javascript"],
    desc: "A clone of the game <a href=\"https://play2048.co/\" target=\"_blank\">2048</a>, where the objective is to combine programming languages to reach Javascript!",
    color: ""
  },
  {
    title: "Encryption",
    repo: "encryption",
    website: "",
    tags: ["algorithm", "python"],
    desc: "Applies various manpulations to a list of bits to encrypt a string of text.",
    color: ""
  },
  {
    title: "Cancer Prediction",
    repo: "cancer-prediction",
    website: "",
    tags: ["machine-learning", "research", "python"],
    desc: "Uses cancer datasets to build predictive classifiers regarding the presence of malignant cancer in a person.",
    color: ""
  },
  {
    title: "Stock Predictor",
    repo: "stock-predictor",
    website: "",
    tags: ["machine-learning", "favorite", "python"],
    desc: "Uses a model trained from historical stock data to predict if one should buy or sell a stock.",
    color: ""
  },
  {
    title: "AI Text Detection",
    repo: "ai-text-detection",
    website: "",
    tags: ["machine-learning", "python"],
    desc: "Uses various text datasets to build a model that predicts if a piece of text was written by human or AI.",
    color: ""
  },
  {
    title: "Mandelbrot Zooms",
    repo: "mandelbrot-gifs",
    website: "",
    tags: ["fractals", "gif", "math", "python"],
    desc: "Generates GIFs of the Mandelbrot set, including those of increasing depth, or increasing zoom level.",
    color: "rgb(0, 100, 175)"
  },
  {
    title: "Misiurewicz Points",
    repo: "misiurewicz-points",
    website: "",
    tags: ["fractals", "math", "python"],
    desc: "Generates <a href=\"https://en.wikipedia.org/wiki/Misiurewicz_point\" target=\"_blank\">Misiurewicz Points</a> for the Mandelbrot Set.",
    color: ""
  },
  {
    title: "Typing Test",
    repo: "typing-test",
    website: "",
    tags: ["game", "terminal", "python"],
    desc: "A typing test that features dynamic color changing, accuracy scores, and timers, all from the terminal.",
    color: "rgb(0, 175, 0)"
  },
  {
    title: "AI Essay Dataset",
    repo: "ai-essay-dataset",
    website: "https://www.kaggle.com/datasets/vivaansinghvi07/ai-generated-essays",
    tags: ["ai", "dataset", "python"],
    desc: "A dataset of nearly 3,000 essays all written using OpenAI's <code>text-davinci-003</code> model.",
    color: ""
  }
];

// determine unique tags
const uniqueTags = new Set();
for (let project of projects) {
  for (let tag of project.tags) {
    uniqueTags.add(tag);
  }
}
const uniqueTagsArray = Array.from(uniqueTags);

export default projects;
export { uniqueTagsArray };
