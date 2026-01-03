# dataDecodedCrafted

A blog built for a client to share technical insights about **Databricks** and data engineering. This project was designed to be easy for the client to manage content independently.

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **CMS:** [Sanity.io](https://www.sanity.io/) (Headless CMS for content management)

## Features

- **Headless Architecture:** Separates the frontend code from the content.
- **Dynamic Content:** Fetches blog posts and content in real-time using Sanity's GROQ query.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.
- **Client-Friendly Editing:** Built a Sanity Studio with custom schema so the client can write, edit and post updates without touching the code.

## Overview

### HomePage

- Has three sections --> Featured, New and Recent
- Featured Section --> The client can just make a post as featured with just a toggle in the sanity studio and it will render in the featured section
- New --> The last two posts published by the client will be displayed
- Recent --> A total of 8 posts excluding the new posts will be displayed
- Search section --> **Work in Progress** - Will be able to look for posts with keywords
- Mocked data for now to give an outlook for the site

### PostPage --> **Work in Progress**

- The client can write content, code snippets, upload images and videos through sanity studio
- Data will be fetched and html will be dynamically built

## Challenges

- Starting a project with no design file or just with a plain idea of building a blog since building this for a client who is a close knit was the biggest challenge as i am in a phase of restructuring my career from had been a production support engineer with 6+ yoe into becoming a front end developer
- I wanted to build without any frameworks as a first version of this project to challenge myself

## Author

- GitHub: [@MadhanKumarR150896](https://github.com/MadhanKumarR150896)
- LinkedIn: [@Madhan Kumar Ranganathan](https://www.linkedin.com/in/madhan-kumar-ranganathan-003359271/)

## Acknowledgments

- Youtuber: [@SuperSimpleDev](https://www.youtube.com/@SuperSimpleDev) --> **@SuperSimpleDev** - His videos and conceptual coaching has been my go to ever since i started this journey
- Youtuber: [@TheCoderCoder](https://www.youtube.com/@TheCoderCoder) --> **@TheCoderCoder** - She taught me that it is not bad to make mistakes while learning and creating something

## ScreenShots

### Frontend - Responsive Design

|                 Desktop View                  |               Tab View                |                 Mobile View                 |                          Mobile View with Menu and Overlay                          |
| :-------------------------------------------: | :-----------------------------------: | :-----------------------------------------: | :---------------------------------------------------------------------------------: |
| ![Desktop View](/src/assets/Desktop_View.png) | ![Tab View](/src/assets/Tab_View.png) | ![Mobile View](/src/assets/Mobile_View.png) | ![Mobile View with Menu and Overlay](/src/assets/Mobile_View_Menu_with_Overlay.png) |

### Headless CMS - Sanity Studio

|                   View 1                   |                   View 2                   |                   View 3                   |
| :----------------------------------------: | :----------------------------------------: | :----------------------------------------: |
| ![View 1](/src/assets/Sanity_Studio_1.png) | ![View 2](/src/assets/Sanity_Studio_2.png) | ![View 3](/src/assets/Sanity_Studio_3.png) |
