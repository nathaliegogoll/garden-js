const lvlDisplay = ( xp, lvl=1 ) => {
    if (isNaN(xp)) {
        return 0;
    }
    let leftOverXp = xp -= 3;
    /*if(xp === 3){
        console.log("here")
        console.log(xp);
        console.log(lvl);
        return ( leftOverXp < 0) ? lvl : lvlDisplay (leftOverXp, (lvl + 1));
    }*/
    return ( leftOverXp < 0) ? lvl : lvlDisplay (leftOverXp, (lvl + 1));
}

export { lvlDisplay };