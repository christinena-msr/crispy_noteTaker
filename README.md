# Note Taker

## Description
This is a heroku-deployed node application that will allow the user to create and manage notes. The user will be able to create new notes, delete old notes, and view all notes. 

## Installation
Install the following dependencies: 
```
npm install node
npm install express
npm install fs
```

## Instructions
1. Option A: If using the application locally, navigate to the folder containing the "server.js" file.
Ensure the following folders are in the same folder as your "server.js" file:
* db/
    * This will contain your database json file
* public/
    * All files needed to display the front-end interface

Navigate to your [localhost](localhost:3000) port 3000. 

1. Option B: To access the Heroku-deployed application. Click this [link](https://shrouded-caverns-83725.herokuapp.com/).

2. You will be greeted with a homepage. To get started with adding and viewing your notes, click on the "Get Started" button. You will be directed to the notes page.

3. Create a title for your note and add your note to the body. When you're ready to save, click on the save button :floppy_disk: in the upper right-hand corner. 

4. You can view all your saved notes on the left-hand side. These are ordered chronologically at the time you created them. 

5. To view a note, click on the title. 

6. To delete a note, click on the delete button :wastebasket:

## Credits:
Author: [crispysodium](https://github.com/crispysodium)