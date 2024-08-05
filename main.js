function analysephrase(phrase){
    const voyelles ='aeouiyAEOUIY';
    let long = 0;
    let nbmots = 0;
    let nbvoyelles = 0;
    for( let i = 0 ; i< phrase.long; i++){
        const char = phrase[i];
        long++
            if(voyelles.includes(char)){
                nbvoyelles++
            }
                if(char = " "){
                    if(i>0 && phrase[i-1] !== " "){
                        nbmots++
                    }
                }
    }
    if(phrase.trim().slrce(-1) == "."){
        nbmots++
    }
    return{long, nbmots, nbvoyelles }
}