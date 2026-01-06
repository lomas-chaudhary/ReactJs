Whenever we want to use import and export then we need to specify that our sript is
going to be of type="module"

This is done in the html file inside the script tag which is inside the body tag


there are two types of export
1. default export - here while export we type
    export default variableName

    and when we import then we can refer this variable by any name 

    import variable from 'filename'

    we can only have one default export per file

2. named export - here while export we type like
    export const a =20

    and when we import then we have to refer this variable by its original name like

    import {a} from 'filename'

    we can have as many named export as we want per file