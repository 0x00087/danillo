document.querySelector('#sort-asc').onclick = mySortUp;
document.querySelector('#sort-desc').onclick = mySortDown;

function insertAfter(newElement, referenceElement) {
    referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
}

function mySortUp(){
    let nav = document.querySelector('.data-price');
    console.log(nav);
    for(let i = 0; i < nav.children.length; i++)
        for(let j = i; j < nav.children.length; j++){
            if(+nav.children[i].getAttribute('data-price') > +nav.children[j].getAttribute('data-price')){
                replaceNode = nav.replaceChild(nav.children[j],nav.children[i]);
                insertAfter(replaceNode, nav.children[i]);
            }

        }
}

function mySortDown(){
    let nav = document.querySelector('.data-price');
    console.log(nav);
    for(let i = 0; i < nav.children.length; i++)
        for(let j = i; j < nav.children.length; j++){
            if(+nav.children[i].getAttribute('data-price') < +nav.children[j].getAttribute('data-price')){
                replaceNode = nav.replaceChild(nav.children[j],nav.children[i]);
                insertAfter(replaceNode, nav.children[i]);
            }

        }
}