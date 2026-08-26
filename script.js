/*=========================================
GLOBAL REVEAL ANIMATION
=========================================*/

function revealOnScroll(){

const elements=document.querySelectorAll(
".reveal-left,.reveal-right,.reveal-up,.fade-up,.featured-service,.small-service,.service-card,.services-heading,.services-footer,.contact-left,.contact-right,.contact-card,.contact-bottom"
);

elements.forEach((element)=>{

const top=element.getBoundingClientRect().top;

if(top<window.innerHeight-100){

element.classList.add("active");

}

});

}

window.addEventListener("scroll",revealOnScroll);
window.addEventListener("load",revealOnScroll);

revealOnScroll();

/*=========================================
VIEW ALL SERVICES
=========================================*/

const showBtn = document.getElementById("showServices");
const moreServices = document.getElementById("moreServices");

if(showBtn && moreServices){

    showBtn.addEventListener("click", function(){

        moreServices.classList.toggle("show");

        if(moreServices.classList.contains("show")){

            showBtn.innerHTML=`
            Show Less
            <i class="fa-solid fa-chevron-up"></i>
            `;

        }else{

            showBtn.innerHTML=`
            View All Medical Services
            <i class="fa-solid fa-chevron-down"></i>
            `;

        }

    });

}



/*=========================================
CARD HOVER EFFECT
=========================================*/

const cards = document.querySelectorAll(

".featured-service, .small-service, .service-card"

);

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -8;

        const rotateY = ((x / rect.width) - 0.5) * 8;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

});


/*=========================================
BUTTON RIPPLE EFFECT
=========================================*/

if(showBtn){

showBtn.addEventListener("click",function(e){

const ripple=document.createElement("span");

ripple.classList.add("ripple");

this.appendChild(ripple);

const x=e.clientX-this.getBoundingClientRect().left;
const y=e.clientY-this.getBoundingClientRect().top;

ripple.style.left=x+"px";
ripple.style.top=y+"px";

setTimeout(()=>{
ripple.remove();
},600);

});

}


/*=========================================
SERVICE COUNTER
=========================================*/

const serviceCards = document.querySelectorAll(".service-card");

console.log(

"Total Services:",

serviceCards.length + 3

);


const statusTitle = document.getElementById("statusTitle");
const statusMessage = document.getElementById("statusMessage");
const badge = document.getElementById("clinicStatus");

const now = new Date();

const day = now.getDay(); // 0=Sun, 1=Mon...
const hour = now.getHours();
const minute = now.getMinutes();

const time = hour * 60 + minute;

let open = false;
let message = "";

if(day >= 1 && day <= 5){

    // Monday-Friday
    if(time >= 480 && time < 1020){

        open = true;
        message = "Closes at 5:00 PM";

    }else if(time < 480){

        message = "Opens today at 8:00 AM";

    }else{

        message = "Opens tomorrow at 8:00 AM";

    }

}

else if(day == 6){

    // Saturday
    if(time >= 480 && time < 780){

        open = true;
        message = "Closes at 1:00 PM";

    }else{

        message = "Opens Monday at 8:00 AM";

    }

}

else{

    // Sunday
    message = "Opens Monday at 8:00 AM";

}

if(open){

    statusTitle.innerHTML = "🟢 Open Now";
    badge.classList.add("open");

}else{

    statusTitle.innerHTML = "🔴 Closed";
    badge.classList.add("closed");

}

statusMessage.innerHTML = message;

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item)=>{

    const question = item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        // Close all other FAQ items
        faqItems.forEach((otherItem)=>{

            if(otherItem !== item){

                otherItem.classList.remove("active");

            }

        });


        // Open or close the clicked question
        item.classList.toggle("active");

    });

});

const menuBtn=document.getElementById("menuBtn");
const menuIcon=document.getElementById("menuIcon");
const navLinks=document.getElementById("navLinks");
const navItems=document.querySelectorAll("#navLinks a");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

if(navLinks.classList.contains("active")){
menuIcon.classList.remove("fa-bars");
menuIcon.classList.add("fa-xmark");
}else{
menuIcon.classList.remove("fa-xmark");
menuIcon.classList.add("fa-bars");
}

});

navItems.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");
menuIcon.classList.remove("fa-xmark");
menuIcon.classList.add("fa-bars");

});

});

document.addEventListener("click",(e)=>{

if(!navLinks.contains(e.target) && !menuBtn.contains(e.target)){

navLinks.classList.remove("active");
menuIcon.classList.remove("fa-xmark");
menuIcon.classList.add("fa-bars");

}

});