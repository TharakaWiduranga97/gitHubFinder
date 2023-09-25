const apiUrl = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(user) {
    const response = await fetch(apiUrl + user);
    const responseData = await response.json();

    createUser(responseData);
    console.log(responseData);
    getRepo(user);
}
async function getRepo(user) {
    const response = await fetch(apiUrl + user +"/repos");
    const responseData = await response.json();

    createRepo(responseData);
    console.log(responseData.description);
}

function createUser(user) {
    const cardHTML = `<div class="user-name-header text-bg-dark">
  <P>${user.name}</P>
</div>
<div class="main-content">
  <div class="profile-pic col-12 col-sm-12 col-md-4 col-lg-4">
         <div class="pic">
             <img src="${user.avatar_url}" alt="">
         </div>
      <div class="btn btn-1 btn-dark">View Profile</div>
  </div>
  <div class="content col-12 col-sm-12 col-md-8 col-lg-8">

      <span class="badge text-bg-dark">Public Repos: ${user.public_repos}</span>
      <span class="badge text-bg-dark">Public Gists: ${user.public_gists}</span>
      <span class="badge text-bg-dark">Followers:${user.followers}</span>
      <span class="badge text-bg-dark">Following:${user.following}</span>


       <div class="main-content">
           <ul class="list-g">
               <li >Bio: ${user.bio}</li>
               <li >Email address:${user.email}</li>
               <li >Company: ${user.company}</li>
               <li >Website/blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
               <li >Location: ${user.location}</li>
               <li >Member Since: ${user.created_at}</li>
               <li >Last Updated at:${user.updated_at} ${user.updated_at}</li>



           </ul>
       </div>

  </div>
  </div>
    
    `;

    main1.innerHTML = cardHTML;
}
function createRepo(repo) {
    const carddHTML = `         <div class="latest-reopo">
  <div class="well">
      <div class="row">
          <div class="col-md-7 col-12">
              <strong>${repo.name}</strong>: ${repo.description}
          </div>
          <div class="col-md-3 col-12">
              <span class="badge text-bg-dark">Forks:${repo.forks_count}</span>
              <span class="badge text-bg-dark">Watchers:${repo.watchers_count}</span>
              <span class="badge text-bg-dark">Stars: ${repo.stargazers_count}</span>
          </div>
          <div class="col-md-2 col-12">
              <a href="${repo.html_url}" target="_blank" class="btn btn-2 btn-dark">Repo Page</a>
          </div>
      </div>
  </div>
</div>
    `;

    main2.innerHTML = carddHTML;
}

$(document).ready(function () {
    $("#searchUser").on("keyup", function (e) {
        let user = e.target.value;
        console.log(user);
        if (user) {
            getUser(user);

            // setInterval( getRepo(user), 1000);

        }
    });
});

// myFunction = () => {
//   const user = search.value;
//   console.log(user);

//   getUser();
// };

