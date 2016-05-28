import Vue              from 'vue'
import Vuex             from 'vuex'
import VueRouter        from 'vue-router'
import VueResource      from 'vue-resource'

import App              from './App'
import Foo              from './components/Foo'
import Bar              from './components/Bar'
import Index            from './components/Index'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter()

router.map({
    '/': {
        name: 'index',
        component: Index
    },
    '/foo': {
        name: 'foo',
        component: Foo
    },
    '/bar': {
        name: 'bar',
        component: Bar
    },
})

router.start(App, 'app')