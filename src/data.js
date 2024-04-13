import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const servicesData = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "great comfort",
    text: "lorem ipsum dolor sit amet",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet adventure",
    info: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    location: "China",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "september 10th, 2020",
    title: "Beach getaway",
    info: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    location: "Maldives",
    duration: 7,
    cost: 3500,
  },
  {
    id: 3,
    image: tour3,
    date: "october 5th, 2020",
    title: "Mountain retreat",
    info: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    location: "Switzerland",
    duration: 5,
    cost: 2800,
  },
  {
    id: 4,
    image: tour4,
    date: "november 15th, 2020",
    title: "City exploration",
    info: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    location: "New York",
    duration: 4,
    cost: 1800,
  },
  {
    id: 5,
    image: tour5,
    date: "december 3rd, 2020",
    title: "Desert safari",
    info: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    location: "Dubai",
    duration: 3,
    cost: 1500,
  },
  {
    id: 6,
    image: tour6,
    date: "january 20th, 2021",
    title: "Historical tour",
    info: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    location: "Greece",
    duration: 8,
    cost: 4000,
  },
];
