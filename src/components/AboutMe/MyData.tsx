const awards: Array<{
  place: number;
  title: string;
  desc: string;
  date: string;
}> = [
  {
    place: 1,
    title: "Technology Student Association State Leadership Conference: Coding",
    desc: "With a teammate, achieved the highest score on a combination of a preliminary test and on-site coding questions.",
    date: "2024"
  },
  {
    place: 1,
    title: "Technology Student Association State Leadership Conference: Webmaster",
    desc: 'Designed the CSS for the winning website (<a href="https://syleneenergy.github.io" target="_blank">here</a>), which was developed alongside three others.',
    date: "2024"
  },
  {
    place: 0,
    title: "SMC Data Challenge",
    desc: "Solution paper accepted for the Smoky Mountains Computational Sciences Data Challenge Conference.",
    date: "2023",
  },
  {
    place: 1,
    title: "HOSA International Leadership Conference: General Chemistry",
    desc: "Won first place in the National Geographic Learning Academic Testing Center General Chemistry test, competiting against students from all over the world.",
    date: "2023",
  },
  {
    place: 2,
    title: "HOSA State Leadership Conference: Medical Math",
    desc: "Won second place in the Medical Math event, competing against students from all over Tennessee.",
    date: "2023",
  },
  {
    place: 1,
    title: "TMTA: Statistics",
    desc: "Achieved a perfect score on the Tennessee Math Teachers Association Statistics exam.",
    date: "2023",
  },
  {
    place: 1,
    title: "TN Regional Science Olympiad: Flight",
    desc: "Won first place in the Flight event for the East Tennessee Regional Science Olympiad",
    date: "2023",
  },
  {
    place: 3,
    title: "TN Regional Science Olympiad: Detector Build",
    desc: "Won third place in the Detector Build event for the East Tennessee Regional Science Olympiad",
    date: "2023",
  },
  {
    place: 2,
    title: "TN Regional Science Olympiad: Chemistry Lab",
    desc: "Won second place in the Chemistry Lab event for the East Tennessee Regional Science Olympiad",
    date: "2023",
  },
  {
    place: 1,
    title: "HOSA Upper East Tennessee Regionals: Medical Math",
    desc: "Won first place in the Medical Math event in my region.",
    date: "2023",
  },
  {
    place: 0,
    title: "HOSA State Leadership Conference: Dental Science",
    desc: "Won fifth place in the Dental Science event, competing against students from all over Tennessee.",
    date: "2022",
  },
  {
    place: 1,
    title: "HOSA Upper East Tennessee Regionals: Dental Science",
    desc: "Won first place in the Dental Science event in my region.",
    date: "2022",
  },
  {
    place: 0,
    title: "USA Biology Olympiad: Certificate of Merit",
    desc: "Awarded after taking the 50-question test online.",
    date: "2022",
  },
];

const affiliations: Array<{
  title: string;
  desc: string;
  date: string;
}> = [
  {
    title: "Knoxville Youth Symphony Orchestra",
    desc: "Played as a percussionist in six concerts over two years.",
    date: "2021-2023",
  },
  {
    title: "National Honors Society",
    desc: "Volunteered about thirty hours over two years in various projects and events.",
    date: "2021-2023",
  },
  {
    title: "Second Harvest Food Bank",
    desc: "Volunteered about seventy hours, working in food packaging for donation to pantries across East Tennessee.",
    date: "2021-2023",
  },
  {
    title: "Mu Alpha Theta",
    desc: "Competed in several math competitions such as Rocket City Math League, TMTA, and MAO.",
    date: "2021-2023",
  },
  {
    title: "Farragut High School Science Club",
    desc: "Attended weekly presentations about various topics in science and participated in competitions like Science Olympiad.",
    date: "2021-2023",
  },
  {
    title: "Oak Ridge National Laboratory",
    desc: "Participated in an internship, and attended about a dozen seminars and workshops during my time.",
    date: "Jun-Jul 2023",
  },
  {
    title: "Knoxville Academy of Music",
    desc: "Further developed drumming skills (total 9 years experience) weekly.",
    date: "2023",
  },
  {
    title: "Health Occupations Students of America",
    desc: "Competed in fast-paced tests, twice state-level and once internationally. Attended various immersive workshops and volunteered for the club.",
    date: "2021-2023",
  },
];

const educationAndExperience: Array<{
  title: string;
  desc: string;
  date: string;
}> = [
  {
    title: "Oak Ridge National Laboratory Internship",
    desc: "Worked in database administration, developing skills in PostgreSQL and getting valuable workplace experience.",
    date: "Jun-Jul 2023",
  },
  {
    title: "Farragut High School",
    desc: "GPA: 4.00/4.72 UW/W, Relevant Coursework: AP Statistics (5), AP Calculus AB/BC (5), AP Research (4), AP Physics 1 (5), AP Chemistry (5), AP Biology (5), AP German, AP Computer Science A (Self-Studied - 5)",
    date: "2020-2024",
  },
];

const hobbies: Array<{
  title: string;
  desc: string;
}> = [
  {
    title: "💻 Programming",
    desc: 'I like programming all sorts of things, like image processing, data science, games, or websites! See the <a href="/projects" target="_blank">Projects</a> section of this site for examples!',
  },
  {
    title: "🥁 Drumming",
    desc: "I've been playing the drumset for about nine years now, and have played in dozens of performances. I especially enjoy drumming alongside my favorite songs.",
  },
  {
    title: "🧩 Cubing",
    desc: "I enjoy solving Rubix Cubes; my favorites are the 3x3 and 7x7 (which I broke). I have about 25 different puzzles (half of which aren't even cuboidal), one of which I made: my penguin cube.",
  },
  {
    title: "🚲 Working Out",
    desc: "Whether it be going to the gym, biking, or even just doing pushups at home, I value physical activity and try to get some every day.",
  },
  {
    title: "🎮 Gaming",
    desc: 'I\'ve played many video games in my life, but my favorite has been <a href="https://www.rocketleague.com/" target="_blank">Rocket League</a>, a game in which rocket-powered cars play soccer.',
  },
];

export { awards, affiliations, educationAndExperience, hobbies };
