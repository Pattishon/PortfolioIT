# Portfolio
Personal portfolio page [https://patti-adams.netlify.com/](https://patti-adams.netlify.com/) delivered with [React](https://pl.reactjs.org/ "React") and [React-Bootstrap](https://react-bootstrap.github.io/ "React-Bootstrap").

## Building Process

1. Core of the project established with [Create React App](https://create-react-app.dev/ "create react app"). 
2. [New layout](https://www.figma.com/file/ZqHg4IBe3kmIUcdloCzK3w/Potrfolio?node-id=0%3A1 "Figma prototype") of the portfolio created in Figma.
3. Migrate [old version of portfolio](https://partycja-a.netlify.com/ "Old portfolio") which was using only [Bootstrap](https://getbootstrap.com/ "Bootstrap") to use [React](https://pl.reactjs.org/ "React") and [React-Bootstrap](https://react-bootstrap.github.io/ "React-Bootstrap").
4. I modified the design to use [React-Router](https://reacttraining.com/react-router/web/guides/quick-start "React-Router") with a different page for each section of the portfolio.
5. I added scss instead of the regular css files. Up this moment I was wondering which library for styles I should use. Finally settled for [React-Bootstrap](https://react-bootstrap.github.io/ "React-Bootstrap") and [Material ui](https://material-ui.com/ "Material UI") components.
5. For skills I used the carousel from [React-Multi-Carousel](https://www.npmjs.com/package/react-multi-carousel "React-Multi-Carousel")
5. Added icons from [Iconify](https://iconify.design/ "Iconify") for skills and social media icons.
6. Added form for the contact page. It uses [netlify](https://www.netlify.com/ "Netlify") serverless solution to post submissions, as I don't need anything more in this project.
7. Updated text on all the pages.

## Challanges in rebuildning the website

1. I found implementing menu challanging, spent some time figuring how can I use my own component instead of the default bootstrap icon for the mobile/small screen version of the menu. 
2. Structuring the application Routes took me some time. Now it is ready for me to add a blog section in the near future and shoud scale easily if I decide to add any new features to the website.

### Thank you for checking my website
Please feel free to [contact me](https://patti-adams.netlify.com/contact "contact")
