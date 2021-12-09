function jogar () {
    var cores = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige",
    "Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood",
    "CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue",
    "Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
    "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen",
    "DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen",
    "DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet",
    "DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick",
    "FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold",
    "GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink",
    "IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush",
    "LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
    "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink",
    "LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray",
    "LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen",
    "Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
    "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen",
    "MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose",
    "Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange",
    "OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise",
    "PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum",
    "PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue",
    "SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna",
    "Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
    "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat",
    "White","WhiteSmoke","Yellow","YellowGreen"]
    var corAleatoria = []
    var corSorteada = null
    var user = null 
    var life = 5 
    

    for (i = 0; i < 10 ; i++) {
        corAleatoria.push(cores[Math.floor(Math.random() * cores.length) +1].toLowerCase())
        corAleatoria.sort()
        corSorteada = corAleatoria[Math.floor((Math.random() * corAleatoria.length) + 1)]
    }

    do{
        user = prompt(`Dime las colores abajo\n\n${corAleatoria.toString()}\n\n\nVida Restante: ${life}`).toLowerCase()

         if (user != corSorteada) { 
            verificar(corSorteada, user, life)
            alert('Por Dios como es terrible')
            life--
    }
        
        else if (user == corSorteada){
            document.body.style.backgroundColor = user
            alert('Buenissimo que lindo eres!')
            life = 0
        }
  
         
       
}while (life != 0);

    function verificar() { 
        
        if (user == ""){
            alert('Campo en branco!!')
       
}

        }
}