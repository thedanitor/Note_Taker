# Note_Taker

I created a web application for taking notes. It allows the user to Create, Read, Update, and Delete notes 

![Note Taker gif](/public/assets/demo-images/noteTakerShort.gif)

## Technologies Used

Utilizing an existing front end I created a backend to allow functionality and data persistence.

* HTML, Bootstrap, CSS, and JavaScript were used to create the frontend.
* The backend was developed using Node and JavaScript.
* Node: requires fs to read and write the db.json file.
* JavaScript: GET, POST, and DELETE API routes were created to facilitate the saving, updating, and deleting of notes.

## Description/Use

This project was based off of this user story:

*Application should allow users to create and save notes.\
Application should allow users to view previously saved notes.\
Application should allow users to delete previously saved notes.*

When the user goes to home page, they can click the Get Started button that will take them to the notes page.

![Home Page](/public/assets/demo-images/home.png)

If there are no notes saved the page will be blank with placeholders for note title and note text.

![Blank Notes Page](/public/assets/demo-images/notes_blank.png)

Once a note is saved it appears in a list on the left portion of the page.

![Saved Notes Page](/public/assets/demo-images/notes_saved.png)

The user can then click on the title of the saved note to display the contents.

![Displayed Notes Page](/public/assets/demo-images/notes_saved_displayed.png)

Notes can be deleted by clicking on the red trash icon next to the note title in the list.

## Acknowledgements

I would like to thank UW Coding bootcamp as well as my instructor, TA's, tutor, and classmates who have all helped me improve much more than I could have on my own.