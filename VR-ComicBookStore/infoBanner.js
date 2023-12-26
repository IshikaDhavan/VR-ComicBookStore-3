AFRAME.registerComponent("info-banner",{
    schema:{
        itemId: {type: "string",default: ""}
    },
    update:function(){
        this.createBanner();
    },
    createBanner:function(){
        postersInfo = {
            voices: {
                banner_url: "./assets/voices.jpg",
                title: "Voices",
                description: "In its first comic issue, creators brought their unique perspectives and artistry in a one-shot of Super Hero adventures. The X-Men find their place in the world after declaring a new nation. And, Killmonger strikes! Featuring the work of Evan Narcisse, Geoffrey Thorne, James Iglehart, Brittney L. Williams, Luciano Vecchio, JJ Kirby, Jahnoy Lindsay, and more.",
            },
            superman: {
                banner_url: "./assets/superman.jpg",
                title: "SuperMan",
                description: "Art by Jason Fabok. Superman was born on the fictional planet Krypton with the birth name of Kal-El. As a baby, his parents sent him to Earth in a small spaceship shortly before Krypton was destroyed in a natural cataclysm. His ship landed in the American countryside near the fictional town of Smallville.",
            },
            nightwing: {
                banner_url: "./assets/night-wing.jpeg",
                title: "Nightwing",
                description: "Nightwing is a DC Comics superhero and the alter ego of Dick Grayson, the first Robin. In the comics, Dick Grayson gives up his Robin mantle and becomes Nightwing after his circus family is murdered and he is taken in by Bruce Wayne. Nightwing is a master of acrobatics and a symbol of hope and self-sacrifice.",
            },
            ironman: {
                banner_url: "./assets/the_invincible_iron-man.jpg",
                title: "Iron man",
                description: "Based on the Marvel Comics character, this animated film follows Tony Stark (Marc Worden), an American industrialist and inventor, who has made a fortune from his creations. While in China, Tony accidentally unleashes an ancient evil called the Mandarin (Fred Tatasciore). Now, to battle this malevolent entity back into submission, Tony must build the ultimate weapon. And so the Iron Man is born. Surrounded by a high-tech armored suit, Tony sets out to destroy the Mandarin once and for all",
            }
        };

        const { itemId } = this.data;

        const fadeBackgroundEl = document.querySelector("#fadeBackground");
    
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id", `${itemId}-banner`);
    
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 0.9,
          height: 1,
        });
    
        entityEl.setAttribute("material", { color: "#000" });
        entityEl.setAttribute("position", { x: 0, y: 1.5, z: -1 });
    
        const item = postersInfo[itemId];
    
        const imageEl = this.createImageEl(item);
        const titleEl = this.createTitleEl(item);
        const descriptionEl = this.createDescriptionEl(item);
    
        entityEl.appendChild(imageEl);
        entityEl.appendChild(titleEl);
        entityEl.appendChild(descriptionEl);
    
        fadeBackgroundEl.appendChild(entityEl);
      
    },
    createImageEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 0.85,
          height: 0.4,
        });
        entityEl.setAttribute("material", { src: item.banner_url });
        entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
        return entityEl;
      },
      createTitleEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
          shader: "msdf",
          anchor: "left",
          font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
          width: 1.2,
          height: 2,
          color: "#fff",
          value: `${item.title}`,
        });
        entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
        return entityEl;
      },
      createDescriptionEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
          shader: "msdf",
          anchor: "left",
          font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
          width: 0.75,
          height: 2,
          color: "#fff",
          wrapCount: "40",
          value: item.description,
        });
        entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
        return entityEl;
      },
    });