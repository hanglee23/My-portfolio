const spans = document.querySelectorAll(h1 span)
spans.forEach(span => span.addEventlistener('mouseover', functions(e){
    span.classList.add('animated', 'rubberBand')
}))