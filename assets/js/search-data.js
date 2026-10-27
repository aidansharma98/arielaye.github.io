// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/https://aidansharma98.github.io/arielaye.github.io/";
    },
  },{id: "nav-papers-amp-presentations",
          title: "Papers &amp; Presentations",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https://aidansharma98.github.io/arielaye.github.io/papersandpresentations/";
          },
        },{id: "nav-fieldwork",
          title: "Fieldwork",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https://aidansharma98.github.io/arielaye.github.io/fieldwork/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https://aidansharma98.github.io/arielaye.github.io/assets/pdf/Ye_Oct26.pdf";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/https://aidansharma98.github.io/arielaye.github.io/books/the_godfather/";
            },},{id: "news-i-will-give-a-talk-with-mark-baker-and-thuong-bui-on-the-relationship-of-agreement-to-clitic-doubling-subject-clitics-in-baatonum-at-clitics-and-agreement-markers-across-languages-from-balkan-to-bantu-and-beyond-dgfs-2027-workshop",
          title: 'I will give a talk with Mark Baker and Thuong Bui on The...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/https://aidansharma98.github.io/arielaye.github.io/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/https://aidansharma98.github.io/arielaye.github.io/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/https://aidansharma98.github.io/arielaye.github.io/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/https://aidansharma98.github.io/arielaye.github.io/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/https://aidansharma98.github.io/arielaye.github.io/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/https://aidansharma98.github.io/arielaye.github.io/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/https://aidansharma98.github.io/arielaye.github.io/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/https://aidansharma98.github.io/arielaye.github.io/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/https://aidansharma98.github.io/arielaye.github.io/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/https://aidansharma98.github.io/arielaye.github.io/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/https://aidansharma98.github.io/arielaye.github.io/teachings/introduction-to-machine-learning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
