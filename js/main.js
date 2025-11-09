(() => {
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      title:"Battery Indicator",
      text:"Indicate different state of your earbuds",
      image:"images/li-2.png"
    },
    {
      title:"Battery Indicator",
      text:"Indicate different state of your earbuds",
      image:"images/li-1.png"
    },
    {
      title:"Ergonomic Design",
      text:"Ergonomic design that fits your ear in the most comfortable way",
    
    },
    {
      title:"Ergonomic Design",
      text:"Ergonomic design that fits your ear in the most comfortable way",
    }
  ]

  function loadInfo(){
    infoBoxes.forEach((infoBox, index)=>{
      // console.log(index+1);
      let selected = document.querySelector(`#hotspot-${index+1}`);
      console.log(selected);

      const titleElement = document.createElement('h2');
      titleElement.textContent= infoBox.title;
      
      const textElement = document.createElement('p');
      textElement.textContent = infoBox.text;

      const imageElement = document.createElement('img');
      imageElement.src = infoBox.image;
      


      selected.appendChild(titleElement);
      selected.appendChild(textElement);
      selected.appendChild(imageElement);
    });
  }

   function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 1 });
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 0 });
  }
  
 hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

  loadInfo();

})();

// In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.