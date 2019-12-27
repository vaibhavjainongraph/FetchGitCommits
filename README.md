
## Please follow all the below instrutions to setup the project and use it 

(i) Install the node version 10.15.3 
    (You can use this link to install the node : https://nodejs.org/download/release/v10.15.3/)

(ii) After installing the node use the below command to install the Angular CLI
     npm install -g @angular/cli@8.3.21

(iii) Inside the project directory open the terminal and use the below command to install the node_modules (libraries to run the project properly)
     npm install

(iv)  When you have installed the libraries then use the below command to serve or use the project in browser. This command will open the browser automatically
     ng serve --open

(v) In case if the browser is not opened then open the browser manually of your choice and hit the below url 
    http://localhost:4200

(vi) We have used the below github api to fetch the list of commit :
    GET /repos/:owner/:repo/commits

(vii) In project we are displaying the below field from the received data :-
     Author Name
     Author Email
     Commit Message
     Commit Link

(viii) To consume commmit API for other git repo or account we need to update env variables respectively 
    username : 'github user name'
    repoName : 'repo Name'

Repo link : https://github.com/vaibhavjainongraph/FetchGitCommits // code base available here at public repo


    


