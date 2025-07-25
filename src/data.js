import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';       
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour6 from './images/tour-6.jpeg';

export const pageLinks = [
    {
        id:1,
        href: "#home",
        text: "home"
    }
    ,
    {
        id:2,
        href: "#about",
        text: "about"
    },
    {
        id:3,
        href: "#services",
        text: "services"
    },
    {
        id:4,
        href: "#tours",
        text: "tours"
    }
]

export const socialLinks = [
    {
        id: 1,
        href: "https://www.facebook.com",
        icon: "fab fa-facebook"
    },
    {
        id: 2,
        href: "https://www.twitter.com",
        icon: "fab fa-twitter"
    },
    {
        id: 3,
        href: "https://www.squarespace.com",
        icon: "fab fa-squarespace"
    }
]


export const tours = [
    {
        id: 1,
        image: tour1,
        date: "august 26th, 2020",
        title: "Tibet Adventure",
        info: "Explore the hidden gems of Tibet with our exclusive tour package.",
        duration: "6 days",
        location: "China",
        cost: "$2100"
    },
    {
        id: 2,
        image: tour2,
        date: "september 15th, 2020",
        title: "Best of Java",
        info: "Experience the vibrant culture and stunning landscapes of Java.",
        duration: "8 days",
        location: "Indonesia",
        cost: "$1800"
    },
    {
        id: 3,
        image: tour3,
        date: "october 5th, 2020",
        title: "Explore Hong Kong",
        info: "Join us .",
        duration: "10 days",
        location: "Hong Kong",
        cost: "$2500"
    },
    {
        id: 4,
        image: tour4,
        date: "november 20th, 2020",
        title: "kenya highlights",
        info: "Discover the breathtaking beauty of Kenya.",
        duration: "7 days",
        location: "Kenya",
        cost: "$3000"
    },
    {
        id: 5,
        image: tour6,
        date: "december 10th, 2020",
        title: "Taj Mahal",
        info: "Experience the rich history and culture of India.",
        duration: "9 days",
        location: "India",
        cost: "$2200"
    }
];  