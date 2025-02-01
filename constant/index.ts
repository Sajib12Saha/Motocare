
interface  SERVICES_PROPS {
        number:string;
        title:string;
        description:string;
}

interface TESTIMONIALS_PROPS {
    name:string;
    role:string;
    image:string;
    rating:number;
    content:string
  }

  interface  METRICS_PROPS{
    name:string;
    percentage:number;
  }

  interface PARTNERS_PROPS{
    name:string;
    logo:string;
  }


  interface BLOG_POSTS_PROPS{
    id:number;
    title:string;
    image:string;
    description:string;
  }

  interface ROUTES_PROPS {
    href:string;
    name:string;
  }


  interface FAQITEMS_PROPS{
    question:string;
    answer:string
    ;
  }



 export const SERVICES: SERVICES_PROPS[] = [
    {
      number: "01",
      title: "Best Services",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      number: "02",
      title: "Comfortable",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      number: "03",
      title: "Expert Team",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
  ]
  
  export const METRICS:METRICS_PROPS[] = [
    { name: "Best Services", percentage: 95 },
    { name: "Comfortable", percentage: 97 },
    { name: "Expert Team", percentage: 92 },
  ]
  


  export const TESTIMONIALS: TESTIMONIALS_PROPS[]= [
    {
      name: "David",
      role: "Client",
      image: "/people/people.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      rating: 5,
    },
    {
      name: "Nathan",
      role: "Client",
      image: "/people/people2.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      rating: 5,
    },
    {
      name: "Clara",
      role: "Client",
      image: "/people/people3.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      rating: 5,
    },
  ]
  

  export const PARTNERS:PARTNERS_PROPS[]= [
    { name: "Speed Auto", logo: "/svg/isuzu.svg" },
    { name: "Car Shop", logo: "/svg/jaguar.svg" },
    { name: "Sports Car", logo: "/svg/land-rover.svg" },
    { name: "Auto Fast", logo: "/svg/mercedes-benz.svg" },
  ]
  

  export const BLOG_POSTS: BLOG_POSTS_PROPS[] = [
    {
       id:1,
      title: "Car engine cleaning tips",
      image: "/psd/blog.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id:2,
      title: "10 brands of quality car paint",
      image: "/psd/blog2.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    { id:3,
      title: "Best paint color 2021",
      image: "/psd/blog3.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    { id:4,
      title: "Best features in car 2025",
      image: "/psd/blog4.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },

    
    {
      id: 5,
      title: "How to care for a car engine",
      image: "/canva/canva.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      title: "Best Modification car 2021",
      image: "/canva/canva5.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

      
    {
      id: 7,
      title: "How to care for a car engine",
      image: "/canva/canva3.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 8,
      title: "Best Modification car 2021",
      image: "/canva/canva4.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    { id:9,
      title: "Best paint color 2021",
      image: "/canva/canva2.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ]



  export const ROUTES:ROUTES_PROPS[] = [
    {
      href:"/", 
      name:"Home",
    },
    {
      href:"/about", 
      name:"About Us",
    },
    {
      href:"/services", 
      name:"Services",
    },
    {
      href:"/blogs", 
      name:"Blogs",
    },
  ]


  export  const FAQITEMS:FAQITEMS_PROPS[] = [
    {
      question: "Can I Have An Estimate Of The Cost?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
 
      question: "How Did You Fix The Problem?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
   
      question: "What Repair Options Do I Have?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },


  ]


  
