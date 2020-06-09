import QCButton from './button';
import QCMessage from './message';

const components = [
    QCButton,
    QCMessage
]

const install = function(Vue) {
    components.forEach(component =>{
        Vue.component(component.name, component);
    })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    QCButton,
    QCMessage
}