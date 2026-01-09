// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Study projects that are either ongoing or did before.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-code",
          title: "Code",
          description: "Open-source code for some projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/code/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-research-direction-multiscale-mechanics-and-physics",
        
          title: "Research direction - multiscale mechanics and physics",
        
        description: "A summary and the possible future studies",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/direction/";
          
        },
      },{id: "post-critical-buckling-force-of-a-thin-plate",
        
          title: "Critical buckling force of a thin plate",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/buckling-cirtical/";
          
        },
      },{id: "news-research-direction-about-multiscale-mechanobiology",
          title: 'Research direction about multiscale mechanobiology',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-new-papers-published-in-acs-nano-and-cmame",
          title: 'New papers published in ACS Nano and CMAME!',
          description: "",
          section: "News",},{id: "news-the-new-website-sparkles-smile",
          title: 'The new website! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-cross-scale-theory-inlcuding-spatial-and-teporal-effects",
          title: 'Cross-scale theory inlcuding spatial and teporal effects',
          description: "Develop strain gradient viscoelasticity and viscoplasticity theory to characterize the cross-scale effects.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-tissue-growth-model-and-its-numerical-simulation",
          title: 'Tissue growth model and its numerical simulation',
          description: "Proposed a viscoelastic growth model and simulate it using FEM and PINNs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-microscale-mechanisms-of-cell-migration",
          title: 'Microscale mechanisms of cell migration',
          description: "Revealed the biophysical mechanisms of cell sense extracellular",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
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
