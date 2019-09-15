import m4fImg from "./imgs/moodforfood.PNG"
import dadJokesImg from "./imgs/dadJokes.PNG"
import portfolioImg from "./imgs/portfolio.PNG"

export default function AllProjects() {
    let allProjects = [
        {
            id: 0,
            name: "Portfolio",
            projUrl: "#",
            codeUrl: "https://github.com/owengiri20/Portfolio_react",
            img: portfolioImg,
            description: "This very website your looking at! after about a couple months of learning React I decided to rebuild my old portfolio site (it was pure HTML/CSS) in React. I found that this was a great way of reinforcing my learning of React fundimentals. "
        },
        {
            id: 1,
            name: "DAD JOKES",
            projUrl: "https://dadjokes-webapp.netlify.com",
            codeUrl: "https://github.com/owengiri20/Dad_jokes/tree/master/src",
            img: dadJokesImg,
            description: "A fun little DAD jokes generator, built with React. At the time of making this project I was following a React course on Udemy and this was one of the demo projects, It was also a few days before fathers day. I tweaked the styling and added a save functionality to it. "

        },
        {
            id: 2,
            name: "Mood For Food",
            projUrl: "https://moodforfood.netlify.com/",
            codeUrl: "https://github.com/owengiri20/Mood_for_Food/tree/master/code",
            img: m4fImg,
            description: "A Food browsing app, that lets you browse thousands of recipes. this project was built right after i completed a Udemy course focused of vinnila JS. 'Mood For Food' is powered by the Food2Fork API and built with pure HTML, CSS, Javascript."

        },

    ]

    return allProjects;
}