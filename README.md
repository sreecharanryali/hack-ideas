                      **** HACK IDEAS ****
This is a web application called HACK IDEAS. Using this app employees of an organisation can add/manage challenges for internal hackathons which they organise every month
* Uers can login using email/password
* Users can add an idea
* Users can upvote an idea
* Users can sort by date and vote count in the home page

Extract the heck-ideas.zip into a folder.

run 'npm install' to install the node_modules and all ohter dependency packages for this project.


once the installation is complete, run 'npm start' to run the project in a local server(once the code is compiled and executed, you should see a localhost:3000 window opened in your browser)

Now the initial page in this application is LOGIN. 

It's a email/password login flow that has been implemented by using Google Firebase.
Blelow are a few users I've created to use this app:

Username: user01@test.com
Pwd: user01
Username: user02@test.com
Pwd: user02
Username: user03@test.com
Pwd: user03
Username: user04@test.com
Pwd: user04

Once you've successfully logged in, you should be redirected to HOME page where ther's a list of already added Ideas which can be sorted by selecting one of the sorting options provided.

In the header, there are 3 links after logging in: All Ideas | Add new Idea | Logout

* Upon clicking on All Ideas, you'll be redirected to the home page,
* You can add a new idea by clicking on 'Add new Idea' link and then by filling the 'New Idea Form'
* Once the form is submitted successfully, you'll be redirected to the home page where you can see the updated list of Ideas

