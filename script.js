function openInNewTab(url) {
    window.open(url, '_blank').focus();
}




function linkedin() {
    openInNewTab("https://www.linkedin.com/in/bhagya-vishwakarma-6a52b72bb")
}
function github() {
    openInNewTab("https://github.com/Bhagya-Vishwakarma-20")
}
function leetcode() {
    openInNewTab("https://leetcode.com/bhagyavishwakarma88/")
}
function x() {
    openInNewTab("https://twitter.com/Bhagya_20 ")
}

let a = 0
document.querySelector('.nav2 button').addEventListener('click', () => {

    if (a == 0) {
        document.querySelector('.nav2').style.animation = 'opennav 1s ease-in-out 0.25s forwards ,inchieght 2s ease-in-out forwards';
        // document.querySelector('.nav2').style.left= '0';
        a = 1;
    }
    else{
        document.querySelector('.nav2').style.animation = 'closenav 1.5s ease-in-out forwards  ,dechieght 2s ease-in-out forwards';
        a = 0;
    }
});


// block 2

let projects=document.querySelectorAll(".project")
console.log(projects);

let maincontent=document.querySelector(".maincontent")

projects.forEach(project => {
        project.addEventListener('click',()=>{
            project.style.backgroundColor="#d2b48c"
            project.style.color= "#0e0e0e";

            if (project==projects[0]) {
                
                maincontent.innerHTML=`<div class="imgdes">Snapshots of Legal Vizier</div>
                <div class="img">
                    <img  src="assets/legalvizier.png" alt="">
                    <img src="assets/legalviezer2.png" alt="">
                    <img src="assets/legalvizier3.png" alt="">
                </div>
                <div class="projectdes">
                    <div class="a">

                        <button type="button">
                            <a href="https://legalvizier.github.io/Legal-Vizier/" target="_blank">Visit Legal Vizier</a>
                        </button>
                          
                          


                    </div>
                    <p> Our platform is a comprehensive tool designed to empower individuals by providing personalized information about their rights in various situations. Users can input details of their circumstances into our user-friendly interface, covering areas such as employment, housing, consumer rights, and more. Our advanced algorithm quickly analyzes the input and generates tailored results, offering comprehensive insights into relevant laws, regulations, and practical advice.<br>
                    <b>
                    Our platform, honored with an honorable mention in the Hack Swift hackathon by Devpost, delivers personalized legal guidance to empower users.</b></p>
                </div>`;
            } 
            if (project==projects[1]) {
                
                maincontent.innerHTML=`<div class="imgdes">Snapshots of Spotify clone</div>
                <div class="img">
                <img src="assets/spotify (3).png" alt="">
                <img src="assets/spotify (1).png" alt="">
                <img src="assets/spotify (2).png" alt="">
                </div>
                <div class="projectdes">
                <div class="a">

                <button type="button">
                    <a href="https://myspotify-music.freewebhostmost.com/" target="_blank">Visit Spotify Clone</a>
                </button>
                  
                  


            </div>
                    <p>Certainly! Imagine a music streaming platform modeled after Spotify but with a standout feature: seamless responsiveness across all devices. This clone of Spotify automatically scans for music libraries and adds songs as soon as a folder is included, ensuring that your music collection stays up-to-date effortlessly. Whether you're accessing it from your computer, tablet, or smartphone, the experience remains smooth and consistent.</p>
                </div>`;
            }
            if (project==projects[2]) {
                
                maincontent.innerHTML=`<div class="imgdes">Snapshots of X (twitter) clone</div>
                <div class="img">
                <img src="assets/x-tablet.png" alt="">
                <img src="assets/x-Desktop.png" alt="">
                <img src="assets/x-phone.png" alt="">
                </div>
                <div class="projectdes">
                <div class="a">

                <button type="button">
                    <a href="https://bhagya-vishwakarma-20.github.io/X-clone/" target="_blank">Visit X Clone</a>
                </button>
                  
                  


            </div>
                    <p>
                    The website mirrors the modern aesthetics and intuitive features of website X,
ensuring a fully responsive experience across all devices.
Navigation flows smoothly and naturally,
aligning with the original's layout and design.

Users benefit from seamless browsing and interaction,
experiencing the familiar feel of the original site.
Consistency and functionality enhance the overall user experience,
capturing the true essence of website X.
                    </p>
                </div>`;
            }
            
            

            projects.forEach(project2 => {
                if(project2==project){
                    
                }
                else{
                project2.style.backgroundColor="transparent";
                project2.style.color= "white";

            }


        })
    })

});


// hackathon display: 





                
                
                

