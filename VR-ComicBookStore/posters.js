AFRAME.registerComponent("posters",{
    init:function(){
        this.comicscontainer = this.el
        this.createPoster()
    },
    createPoster:function(){
        const comicCover = [

            {
                id: "iron-man",
                title: "Iron Man-The Invincible",
                url: "./assets/the_invincible_iron-man.jpg"
            },
            {
                id: "voices",
                title: "Voices",
                url: "./assets/voices.jpg"
            },
            {
                id: "superman",
                title: "SuperMan",
                url: "./assets/superman.jpg"
            },
            {
                id: "night-wing",
                title: "Night Wing",
                url: "./assets/night-wing.jpeg"
            }
        ];

        var previousXposition = -60

        for(var item of comicCover){
            const posx = previousXposition+23;
            const posy = 0
            const posz = -25
            const position = {x: posx, y: posy, z: posz}
            previousXposition = posx    
            
            const borderEl = this.createBorder(item.id,position)
            const thumbnailEl = this.createThumbnail(item)
            const titleEl = this.createTitle(position,item)
            borderEl.appendChild(thumbnailEl)
            borderEl.appendChild(titleEl)

            this.comicscontainer.appendChild(borderEl)
        }
    },
    createBorder:function(id,position){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id",id)
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("position",position)        
        entityEl.setAttribute("geometry",{primitive: "plane",width: 12,height: 20})
        entityEl.setAttribute("material",{color: "#fff",opacity: 0.4})
        entityEl.setAttribute("cursor-listener",{})

        return entityEl;
    },
    createThumbnail:function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{primitive: "plane",width: 10,height: 18})
        entityEl.setAttribute("material",{src: item.url})
        return entityEl;
    },
    createTitle:function(position,item){
        const entityEl = document.createElement("a-entity")
        const elPosition = position
        elPosition.y = -20
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("text",{font: "exo2bold", align: "center", width: 60,value: item.title, color: "#000"})
        entityEl.setAttribute("position",elPosition)        
        return entityEl;
    }
})