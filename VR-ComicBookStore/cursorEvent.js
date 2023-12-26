AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId: {type: "string",default: ""}
    },
    init:function(){
        this.handleMouseEnter();
        this.handleMouseLeave();
    },
    update:function(){
        const fadeBackgroundEl = document.querySelector("#fadeBackground")

        c = fadeBackgroundEl.children;
        if(c.length > 0){
            var i;
            for(i=0; i<= c.length; i++){
                fadeBackgroundEl.removeChild(c[i]);
            }
        }
        else{
            this.handleMouseClickEvents();
        }
    },
    handleMouseLeave:function(){
        this.el.addEventListener("mouseleave",() => {
            if(this.data.selectedItemId){
                const el = document.querySelector(`#${this.data.selectedItemId}`)
                const id = el.getAttribute("id")
                if(id == this.data.selectedItemId){
                    el.setAttribute("material",{color : "#fff",opacity: 0.4})
                }
            }
        })
    },
    handleMouseEnter:function(){
        this.el.addEventListener("mouseenter", () => {
            this.handleComicListState()
        })
    },
    handleComicListState:function(){
        const id = this.el.getAttribute("id")
        const comicslist = ["iron-man","voices","superman","night-wing"]
        if(comicslist.includes(id)){
            const listcontainer = document.querySelector("#poster-container")
            listcontainer.setAttribute("cursor-listener",{selectedItemId: id})
            this.el.setAttribute("material",{color: "blue",opacity : 0.4})
        }
    },
    handleMouseClickEvents: function () {
        this.el.addEventListener("click", () => {
          const { selectedItemId } = this.data;
    
          const fadeBackgroundEl = document.querySelector("#fadeBackground");
          const titleEl = document.querySelector("#title");
          const cursorEl = document.querySelector("#cursor");
    
    
          if (selectedItemId) {
            fadeBackgroundEl.setAttribute("visible", true);
            fadeBackgroundEl.setAttribute("info-banner", {
              itemId: selectedItemId,
            });
            titleEl.setAttribute("visible", false);
            cursorEl.setAttribute("position", { x: 0, y: 0, z: -1 });
            cursorEl.setAttribute("geometry", {
              radiusInner: 0.03,
              radiusOuter: 0.04,
            });
          } else {
            fadeBackgroundEl.setAttribute("visible", false);
            titleEl.setAttribute("visible", true);
            cursorEl.setAttribute("position", { x: 0, y: 0, z: -3 });
            cursorEl.setAttribute("geometry", {
              radiusInner: 0.08,
              radiusOuter: 0.12,
            });
          }
        });
      },
    });