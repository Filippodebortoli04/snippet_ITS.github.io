async function its() {
    const response = await fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json');
    const json = await response.json();
    let elementi = document.getElementsByClassName("item_text");
    
    for (let jane=0; jane < elementi.length; jane++) 
    {
        elementi[jane].innerHTML= json.programming_languages_popular[jane];
    }
    
    let img= document.getElementsByClassName("eltdf-normal-logo");
    console.log(img.length);

    img[0].src='https://static.wixstatic.com/media/44764b_8742a1151cb34cce9adf250e6bd49490~mv2.png/v1/fill/w_2048,h_2048,al_c/w3schools-2048.png';
    
}
its();

