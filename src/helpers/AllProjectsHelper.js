import m4fImg from "./imgs/moodforfood.PNG";
import dadJokesImg from "./imgs/dadJokes.PNG";
import portfolioImg from "./imgs/portfolio.PNG";
import colourPickerImg from "./imgs/colourPickerImg.PNG";
import mdb from "./imgs/mdb.PNG";



export default function AllProjects() {
    let allProjects = [
        {
            id: 0,
            name: "Portfolio",
            projUrl: "#",
            codeUrl: "https://github.com/owengiri20/Portfolio_react",
            img: portfolioImg,
            description: "This very website your looking at! after about a couple months of learning React I decided to rebuild my old portfolio site (it was pure HTML/CSS) in React. I found that this was a great way of reinforcing my learning of React fundimentals. ",
            featured: true
        },
        {
            id: 1,
            name: "DAD JOKES",
            projUrl: "https://dadjokes-owen.netlify.com",
            codeUrl: "https://github.com/owengiri20/Dad_jokes/tree/master/src",
            img: dadJokesImg,
            description: "A fun little DAD jokes generator, built with React. At the time of making this project I was following a React course on Udemy and this was one of the demo projects, It was also a few days before fathers day. I tweaked the styling and added a save functionality to it. ",
            featured: false


        },
        {
            id: 2,
            name: "Mood For Food",
            projUrl: "https://moodforfood.netlify.com/",
            codeUrl: "https://github.com/owengiri20/Mood_for_Food/tree/master/code",
            img: m4fImg,
            description: "A Food browsing app, that lets you browse thousands of recipes. this project was built right after i completed a Udemy course focused of vinnila JS. 'Mood For Food' is powered by the Food2Fork API and built with pure HTML, CSS, Javascript.",
            featured: true


        },
        {
            id: 3,
            name: "Colour Picker App (in progress)",
            projUrl: "https://colour-picker-inprogress.netlify.com/",
            codeUrl: "https://github.com/owengiri20/React_colour_app/tree/master/src",
            img: colourPickerImg,
            description: "~In progress~.",
            featured: false


        },
        {
            id: 4,
            name: "TMDB browser (in progress)",
            projUrl: "https://movie-db-browse.netlify.com",
            codeUrl: "https://github.com/owengiri20/MoviesLibary/tree/master/src",
            img: mdb,
            description: "A movies browsing web app where you can view 1000s of movie deatils/ info, built with react, using the TMDB API.",
            featured: true


        },

    ]

    return allProjects;
}