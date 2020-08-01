let MyInfoController;
let EducationController;
let PI = document.querySelector(".fa-user");
let Ed = document.querySelector(".fa-university");
let SK = document.querySelector(".fa-book-open");
let HB = document.querySelector(".fa-dumbbell");
let CO = document.querySelector(".fa-user-graduate");
//let MYInfo = document.querySelector(".MYInfo");
CO.addEventListener("click", () => {
  //const div = document.createElement("div");
  //div.classList.add("revealED");
  //MYInfo.appendChild(div);
  //EducationAnimation();
  //const Info = document.querySelector(".revealED");

  const E = document.querySelector(".My");
  const S = document.getElementById("ED");
  const ob = document.querySelector(".ob");
  const st = document.querySelector(".st");
  const mj = document.querySelector(".major");
  const Rest = document.querySelector(".Rest");
  const list1 = document.querySelector(".L1");
  const list2 = document.querySelector(".L2");
  const list3 = document.querySelector(".L3");
  const list4 = document.querySelector(".L4");
  const list5 = document.querySelector(".L5");
  const list6 = document.querySelector(".L6");
  const list7 = document.querySelector(".L7");
  const list8 = document.querySelector(".L8");
  const list9 = document.querySelector(".L9");

  E.textContent = "MY ";
  S.textContent = "University Core Courses";
  ob.textContent = "Courses";
  st.textContent = "Logic Design - Database System - Networks 1";

  Rest.innerHTML =
    "Computer Architecture - Operating System - Artificial Intelligence ";
  mj.innerHTML = "";
  list1.textContent = " Software Courses";
  list2.textContent = "Software Requirement";
  list3.textContent = "Software Testing";
  list4.textContent = "Software Engineering 1";
  list5.textContent = "Software Engineering 2 (Design patterns)";
  list6.textContent = "Software Architecture";
  list7.textContent = "Data Structure";
  list8.textContent = "Objected Oriented Programming ";

  // Info.remove();
});

HB.addEventListener("click", () => {
  //const div = document.createElement("div");
  //div.classList.add("revealED");
  //MYInfo.appendChild(div);
  //EducationAnimation();
  //const Info = document.querySelector(".revealED");

  const E = document.querySelector(".My");
  const S = document.getElementById("ED");
  const ob = document.querySelector(".ob");
  const st = document.querySelector(".st");
  const mj = document.querySelector(".major");
  const Rest = document.querySelector(".Rest");
  const list1 = document.querySelector(".L1");
  const list2 = document.querySelector(".L2");
  const list3 = document.querySelector(".L3");
  const list4 = document.querySelector(".L4");
  const list5 = document.querySelector(".L5");
  const list6 = document.querySelector(".L6");
  const list7 = document.querySelector(".L7");
  const list8 = document.querySelector(".L8");

  E.textContent = "MY ";
  S.textContent = "HOBBIES";
  ob.textContent = "Interests";
  st.textContent = "Music - Movies - New Technologies - Video Games";

  Rest.innerHTML = "";
  mj.innerHTML = "";
  list1.textContent = "Hobbies";
  list2.textContent = "Natural BodyBuilding";
  list3.textContent = "Playing League of Legends Game";
  list4.textContent = "Watching TV Series";
  list5.textContent = "";
  list6.textContent = "";
  list7.textContent = "";
  list8.textContent = "";

  // Info.remove();
});
function InfoAnimation() {
  MyInfoController = new ScrollMagic.Controller();
  const Info = document.querySelector(".revealMyInfo");
  const K = gsap.timeline({
    defaults: {
      duration: 25,
      ease: "power2.inout",
    },
  });

  K.fromTo(Info, { x: "0%" }, { x: "1000%" });
}

PI.addEventListener("click", () => {
  InfoAnimation();
  const E = document.querySelector(".My");
  const S = document.getElementById("ED");
  const ob = document.querySelector(".ob");
  const st = document.querySelector(".st");
  const mj = document.querySelector(".major");
  const Rest = document.querySelector(".Rest");
  const list1 = document.querySelector(".L1");
  const list2 = document.querySelector(".L2");
  const list3 = document.querySelector(".L3");
  const list4 = document.querySelector(".L4");
  const list5 = document.querySelector(".L5");
  const list6 = document.querySelector(".L6");
  const list7 = document.querySelector(".L7");
  const list8 = document.querySelector(".L8");

  E.textContent = "I'M ";
  S.textContent = "HASSAN KHALED";
  ob.textContent = "OBJECTIVE";
  st.textContent =
    "a progressive Job opportunity in the field of Software Engineering, ";

  Rest.innerHTML =
    "Web Developing or Cloud Computing where I can improve my skills to achieve my ambition.";
  mj.innerHTML = "";

  list1.textContent = "Personal information";
  list2.textContent = "Gender: Male";
  list3.textContent = "Marital Status: Single";
  list4.textContent = "Date of Birth: 03/01/1999";
  list5.textContent = "Nationality: Egyptian";
  list6.textContent = "Mobile: +2 01118877375";
  list7.textContent = "Email: hassankhaled4432@gmail.com";
  list8.textContent =
    "Student in Software Engineering Department in Faculty of Computers & Information – Cairo University";
});

Ed.addEventListener("click", () => {
  //const div = document.createElement("div");
  //div.classList.add("revealED");
  //MYInfo.appendChild(div);
  //EducationAnimation();
  //const Info = document.querySelector(".revealED");

  const E = document.querySelector(".My");
  const S = document.getElementById("ED");
  const ob = document.querySelector(".ob");
  const st = document.querySelector(".st");
  const mj = document.querySelector(".major");
  const Rest = document.querySelector(".Rest");
  const list1 = document.querySelector(".L1");
  const list2 = document.querySelector(".L2");
  const list3 = document.querySelector(".L3");
  const list4 = document.querySelector(".L4");
  const list5 = document.querySelector(".L5");
  const list6 = document.querySelector(".L6");
  const list7 = document.querySelector(".L7");
  const list8 = document.querySelector(".L8");

  E.textContent = "MY ";
  S.textContent = "EDUCATION";
  ob.textContent = "University 2017 – 2019";
  st.textContent =
    "Cairo University, Faculty of Computers & Information                                               ";

  Rest.innerHTML = "GPA: 3.0";
  mj.innerHTML = " , Major: Software Engineering";
  list1.textContent = "SCHOOL 2005 - 2016";
  list2.textContent = "Secondary Educational Degree (Thanaweya Amaa)";
  list3.textContent = "Preparatory Educational Degree";
  list4.textContent = "Primary Education Degree";
  list5.textContent = "";
  list6.textContent = "";
  list7.textContent = "";
  list8.textContent = "";

  // Info.remove();
});
function InfoAnimation() {
  MyInfoController = new ScrollMagic.Controller();
  const Info = document.querySelector(".revealMyInfo");
  const K = gsap.timeline({
    defaults: {
      duration: 25,
      ease: "power2.inout",
    },
  });

  K.fromTo(Info, { x: "0%" }, { x: "1000%" });
}

SK.addEventListener("click", () => {
  const E = document.querySelector(".My");
  const S = document.getElementById("ED");
  const ob = document.querySelector(".ob");
  const st = document.querySelector(".st");
  const mj = document.querySelector(".major");
  const Rest = document.querySelector(".Rest");
  const list1 = document.querySelector(".L1");
  const list2 = document.querySelector(".L2");
  const list3 = document.querySelector(".L3");
  const list4 = document.querySelector(".L4");
  const list5 = document.querySelector(".L5");
  const list6 = document.querySelector(".L6");
  const list7 = document.querySelector(".L7");
  const list8 = document.querySelector(".L8");

  E.textContent = "MY ";
  S.textContent = "SKILLS";
  ob.textContent = "Languages";
  st.textContent = "Arabic - English - Deutsch ";

  Rest.innerHTML = "";
  mj.innerHTML = "";
  list1.textContent = "Computer Skills";
  list2.textContent =
    "Programming using different languages (C++, Python and Assembly)  ";
  list3.textContent = "SQL & Search Skills";
  list4.textContent = "Object Oriented Programmimg ";
  list5.textContent = "Front-end (Html, CSS, Bootstrap and Javascript)  ";
  list6.textContent = "Well understood to design patterns  ";
  list7.textContent =
    "Perform Online Shopping System Using Design Patterns and Solid Principle ";
  list8.textContent = "Knowing Software Testing Techniques";
});

function EducationAnimation() {
  EducationController = new ScrollMagic.Controller();
  const Info = document.querySelector(".revealED");
  const K = gsap.timeline({
    defaults: {
      duration: 25,
      ease: "power2.inout",
    },
  });

  K.fromTo(Info, { x: "0%" }, { x: "1000%" });
}

InfoAnimation();
