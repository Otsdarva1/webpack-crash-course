import _ from 'lodash'
import { nijou, hoge } from './utilities'
import Lion from './utilities'

console.log(nijou(11))
console.log(hoge)
console.log(Lion.say())

const component = () => {
    const element = document.createElement('div');
    const array = ['Hello', 'webpack', '!!']
    element.innerHTML = _.join(array, ' ')
    return element;
}

document.body.appendChild(component());