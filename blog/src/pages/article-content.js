const articles = [
    {
        name: 'learn-react',
        title: 'The Fastest Way to Learn React',
        content: [
            `The first thing you’ll want to do is set up an environment that supports at 
            the very least JSX, the XML-like syntax most React code relies upon. You’ll 
            probably also want all the niceties of ES6 or ES7, and maybe even TypeScript.

            If you are just setting up your first React project and want to dive into 
            tutorials rather than messing with configuration, I would recommend using 
            Create React App, which will generate all the boilerplate you need to get started.
            
            Create React App will likely not provide the level of custom configuration you want 
            down the road, but when you get to that point, it allows you to “eject” the project, 
            giving you control over the build steps.`,

            `The React extension adds another tab to your browser’s dev tools, allowing 
            you to look through React components the same way you would look at HTML 
            elements. Along with the structure of the components, it also shows the props, 
            state, and context a component contains. This can be a big help when debugging.`,

            `Okay, so you’ve got the tools. Now it’s time to write some code. React’s 
            documentation provides a tutorial that goes over the steps to create a tic-tac-toe game. 
            It offers a light intro to the syntax and basic concepts of React so you can get up and 
            running before you dig into more details in the documentation.`, 

            `The docs give a good overview of the basics you’ll need to understand React development.`,
            `The standard for testing React components is Enzyme. Enzyme builds wrappers around components
             so they can be rendered either in isolation or inside of other components, and appear in your webapp. 
             It allows you to easily simulate user interaction like mouse clicks and entering text.

            The Jest testing framework is often used along Enzyme for testing your components. 
            One of its features is “snapshot” testing. The first time a snapshot test is run on a component, 
            it documents how the component renders–what text is present, the elements, any child components, etc. 
            Any subsequent run of the test just verifies that nothing has changed.
            
            Any time the rendering of the component changes, you will be alerted via a failing test. If the change 
            was unintended, you will see the diff and be able to easily correct it. If the change was intended, you 
            can easily update the snapshot.`,
        ]
    },    {
        name: 'learn-node',
        title: 'How to Build a Node Server in 10 Minutes',
        content: [
            `Assuming you’ve got Node and Mongo installed already, the first step is to open 
            the terminal and create a directory ‘toDoListAPI’. Then run ‘npm init’ to create 
            a package.json file. In the JSON file, add details about your app, its name, the 
            version and a little description etc. Then create a server.js file. Finally, create 
            a new directory ‘api’ with three subdirectories, models, routes and controllers. 
            Then add a toDoListController.js file to the controllers folder, a toDoListModel.js 
            file to the models folder and toDoListRoutes.js to the routes folder. `,

            `The next step is to get your server up and running. For this, you’ll need to install 
            express.js along with nodmon, which will keep track of code changes and restart the 
            server accordingly. You’ll then have to add these packages as dependencies to your 
            JSON file, remembering to add nodmon as the value of the ‘start’ key in the ‘scripts’ 
            section. Finally, copy the following code snippet into server.js and start the server 
            with ‘npm run start’. `,

            `Next, you’ll need to install Mongoose. This is a library that will let you interact 
            with your Mongo db instance. Create a new file in the models folder toDoListModel.js 
            and copy the following code snippet into it.`,

            `Setup the Routes and Controllers`,

            `The final steps are to add your database url to the Mongoose connection instance, 
            load the created model ‘task’ and register the routes with the server.
            You might want to install BodyParser and use BodyParser parse as middleware 
            before the handlers too. Finally start the Mongo server by running ‘mongod’ in 
            the terminal.`,

            `The last thing you want to do is test that everything works as promised. For this, you’ll need Postman installed.`,

        ]
    },     {
        name: 'my-thoughts-on-resumes',
        title: 'My Thoughts on Resumes',
        content: [
            `Don’t start your job search without giving due thought to your resume as a strong 
            resume does wonders for your chances of making it to the interview stage. Additionally, 
            it can work wonders for your job search in general. Here’s how to make sure yours ends up in the ‘yes’ tray.`,
 
            `1. Keep it brief - usually two pages maximum.`,
            `2. Avoid unnecessary personal detail such as age, religion, and sex.`,
            
            `3. Don’t write in the first person – start sentences with verbs.`,
            
            `4. List your career history in reverse chronological order. Don’t forget to include a short note to explain any gaps.`,
            
            `5. Use bullet points for achievements and responsibilities – include more detail on recent roles and less on older ones, 
            unless they are particularly relevant to the job you are applying for.`,
            
            `6. List educational institutions and qualifications in reverse chronological order.`,
            
            `7. Include computer skills, language skills, and any relevant training.`,
            
            `8. Keep your hobbies and interest section short.`,
            
            `9. References can be provided on request – you don’t need to include their contact details on your resume.`,
            
            `10. Check for typos. Even if you think your resume is error-free, it’s worth asking a friend to read it through.`,
            
        ]
    },  
];

export default articles;