import {annotate, annotationGroup} from "https://unpkg.com/rough-notation?module"

const author = document.querySelector('#author');

const a1 = annotate(author,{type:'highlight',color:'#7f5af0'});

a1.show();
