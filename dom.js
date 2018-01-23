var $ = function(sel){
    var elem = document.querySelectorAll(sel);

    var text = function(str){
        for (var i=0; i < elem.length; i++){
            elem[i].innerText = str;
        }
    }

    var addClass = function(className){
        for(var i = 0; i < elem.length; i++){
            elem[i].classList.add(className);
        }
    }

    var removeClass = function(classRemove){
        for(var i = 0; i < elem.length; i++){
            elem[i].classList.remove(classRemove);
        }
    }

    var on = function(action, cb) {
        for(var i = 0; i < elem.length; i++){
            elem[i].addEventListener(action, cb);
        }
    }

    var toggleClass = function(className){
        for(var i = 0; i < elem.length; i++){
            if(elem[i].className.includes(className)){
                elem[i].classList.remove(className);
            }
            else{
                elem[i].classList.add(className);
            }
        }
    }

    var html = function(newHtml){
        for (var i=0; i < elem.length; i++){
            elem[i].innerHTML = newHtml;
        }
    }


    var publicAPI = {
        element: elem,
        text: text,
        addClass: addClass,
        removeClass: removeClass,
        on: on,
        html: html,
        toggleClass: toggleClass
    }
    return publicAPI;
}


//toggle class

//html