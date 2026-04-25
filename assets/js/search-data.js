// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "My GitHub profile and open-source contributions. Stats and trophies count public activity only.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My academic curriculum vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-successfully-defended-my-m-sc-thesis-in-computer-science-and-engineering-at-koç-university-under-the-supervision-of-asst-prof-gözde-gül-şahin",
          title: '🎓 I successfully defended my M.Sc. thesis in Computer Science and Engineering at...',
          description: "",
          section: "News",},{id: "news-we-submitted-our-new-paper-are-non-english-papers-reviewed-fairly-language-of-study-bias-in-nlp-peer-reviews-to-acl-arr-2026-march-this-is-joint-work-with-abdulfattah-safa-verena-blaschke-erika-lombart-marie-catherine-de-marneffe-and-gözde-gül-şahin",
          title: '📝 We submitted our new paper “Are Non-English Papers Reviewed Fairly? Language-of-Study Bias...',
          description: "",
          section: "News",},{id: "projects-llm-collusion-and-identifiability-in-code-generation",
          title: 'LLM Collusion and Identifiability in Code Generation',
          description: "Investigates whether large language models can recognize or attribute code authored by themselves or other LLMs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_llm_collusion/";
            },},{id: "projects-bias-toward-languages-studied-in-nlp-peer-reviews",
          title: 'Bias Toward Languages Studied in NLP Peer Reviews',
          description: "First systematic study of language-of-study bias in NLP peer review, finding that non-English papers face bias rates roughly 40× higher than English-only ones.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_nlp_bias/";
            },},{id: "projects-multimodal-framework-for-detecting-implicit-hate-speech-on-social-media",
          title: 'Multimodal Framework for Detecting Implicit Hate Speech on Social Media',
          description: "Designed a hybrid framework combining text encoders (BERT, LLaMA) with vision backbones (Swin Transformer, ViT) to detect subtle hate speech.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_multimodal_hate_speech/";
            },},{id: "projects-named-entity-recognition-in-turkish-tweets-yildirim-platform",
          title: 'Named Entity Recognition in Turkish Tweets (Yildirim Platform)',
          description: "Developed an annotation platform (Yildirim) for labeling named entities in Turkish tweets.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_turkish_ner/";
            },},{id: "projects-procedural-text-understanding-via-python-code-representation",
          title: 'Procedural Text Understanding via Python Code Representation',
          description: "Explored Python code representation as an intermediate reasoning layer for LLMs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_python_code_rep/";
            },},{id: "projects-intent-prediction-and-slot-filling-with-alexa-massive-dataset",
          title: 'Intent Prediction and Slot Filling with Alexa MASSIVE Dataset',
          description: "Trained multilingual intent and slot-filling models on the Alexa MASSIVE dataset using PyTorch and custom hyper-parameters.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_alexa_massive/";
            },},{id: "projects-shilling-attack-detection-in-recommender-systems",
          title: 'Shilling Attack Detection in Recommender Systems',
          description: "Investigated detection of profile injection (shilling) attacks in recommender systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_shilling_attack/";
            },},{id: "teachings-comp-100-introduction-to-computer-science-and-programming",
          title: 'COMP 100 - Introduction to Computer Science and Programming',
          description: "Supported an introductory Python programming course with 200+ students enrolled. Graded weekly assignments, organized lab sessions, and assisted students in debugging.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/comp-100-spring-2024/";
            },},{id: "teachings-comp-202-data-structures-and-algorithms-in-java",
          title: 'COMP 202 - Data Structures and Algorithms in Java',
          description: "Led weekly lab/tutorial sessions for 50+ undergraduate students on data structures and Java programming. Held office hours, graded assignments/projects, and provided one-on-one academic support.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/comp-202-spring-2023/";
            },},{id: "teachings-comp-302-software-engineering",
          title: 'COMP 302 - Software Engineering',
          description: "Facilitated lectures and labs on software engineering practices including testing, CI/CD, and agile methods. Provided technical mentorship to 60+ students on system design and collaborative workflows.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/comp-302-2024-2025/";
            },},{id: "teachings-comp-491-senior-design-project",
          title: 'COMP 491 - Senior Design Project',
          description: "Advised senior students on project design, implementation, and research methodology. Evaluated technical documentation and presentations, and provided structured feedback.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/comp-491-fall-2023/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%62%61%72%6B%68%6F%72%64%61%72%32%33@%6B%75.%65%64%75.%74%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ebarkhordar", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ebarkhordar", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=rhsSW1gAAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/2302559681", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5990-6091", "_blank");
        },
      },{
        id: 'social-stackoverflow',
        title: 'Stackoverflow',
        section: 'Socials',
        handler: () => {
          window.open("https://stackoverflow.com/users/6672114/ehsan", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
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
