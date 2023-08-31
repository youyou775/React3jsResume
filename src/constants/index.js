import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    conix,
    yfa,
    modernAcademy,
    conixAi,
    zebra,
    aditheyogi,
    yusuf,
    hamdy, 
    tamer
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "3D Designer",
      icon: web,
    },
    {
      title: "React/Angular Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content/Graphic Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Senior Computational Designer/Full Stack Developer",
      company_name: "CONIX.AI",
      icon: conix,
      iconBg: "#fff",
      date: "July 2021 - Present",
      points: [
        "switched to Angular/React and Node.js to improve scalability, increasing deployment efficiency by 50%.",
        "Managed DevOps through GoDaddy then Cloudflare, reducing costs by 33%.",
        "Wrote database using MYSQL migrating from MSSQL.",
        "Secured $1.2 million in funding and reduced design time over 90% through AI development.",
        "Deployed our stack on AWS, serving over 1000 users.",
        "Currently managing a team of computational designers and developers.",
        "The full result is at WWW.conix.ai (you can operate the AI).",
      ],
    },
    {
      title: "Computational Designer/Full Stack Developer",
      company_name: "YUSUF FAHMY ARCHITECTS (YFA)",
      icon: yfa,
      iconBg: "#fff",
      date: "July 2017 - June 2021",
      points: [
        "Worked in startup environment.",
        "Developed custom tools in C# and .NET, combining architecture and coding for innovative solutions.",
        " Designed algorithms in Java and Processing to automate 3D modeling.",
        "Built physics engines from scratch using C# and Grasshopper.",
        "Created and maintained company website using JS and ASP.NET.",
        "Wrote database using MSSQL.",
        "Built physics engines from scratch using C# and Grasshopper.",
        "Incorporated PHP and React for our web design.",
        "Secured first enterprise client seed round to found startup Conix.AI.",
        "Deployed on Digital Ocean cutting costs by 20%.",
      ],
    },
    {
      title: "Bachelor's Degree in Architecture",
      company_name: "MODERN ACADEMY",
      icon: modernAcademy,
      iconBg: "#fff",
      date: "September 2011 -June 2017",
      points: [
        "Graduated with B+ average (above 80%). Demonstrated creative computational design skills.",
        "Conducted innovative research and implemented new  systems. Developed concepts using beginner C++.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Youssef proved me wrong.",
      name: "Yusuf Fahmy",
      designation: "CEO",
      company: "Conix.AI",
      image: yusuf,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Youssef does.",
      name: "Mohamed Hamdy",
      designation: "Product Manager",
      company: "Conix.AI",
      image: hamdy,
    },
    {
      testimonial:
        "After Youssef optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Tamer Ramadan",
      designation: "Ceo ",
      company: " Alg-Architects",
      image: tamer,
    },
  ];
  
  const projects = [
    {
      name: "Conix AI",
      description:
        "Integrating Artificial Intelligence into the design process, creating sustainable and innovative designs.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "NodeJS",
          color: "pink-text-gradient",
        },

      ],
      image: conixAi,
      source_code_link: "https://www.conix.ai/",
    },
    {
      name: "Zebra",
      description:
        "Zebra is a C# grasshopper plugin, developed by YFA team when a need came for an agent based design plugin.",
      tags: [
        {
          name: ".NET",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "Grasshopper",
          color: "pink-text-gradient",
        },
      ],
      image: zebra,
      source_code_link: "https://www.food4rhino.com/en/app/zebra",
    },
    {
      name: "Adi the yogi",
      description:
        "A small website designed from sratch as a way of marketing for a yoga teacher. using react and php .",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
      ],
      image: aditheyogi,
      source_code_link: "http://aditheyogi.rf.gd/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };