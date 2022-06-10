import Vue from 'vue'
import VueRouter from 'vue-router'
import ConsentView from '@/views/ConsentView.vue'
import InstructionsView from '@/views/InstructionsView.vue'
import ExperimentView from '@/views/ExperimentView.vue'
import EndView from '@/views/EndView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ConsentView',
    component: ConsentView
  },
  {
    path: '/instructions',
    name: 'InstructionsView',
    component: InstructionsView
  },
  {
    path: '/experiment',
    name: 'ExperimentView',
    component: ExperimentView
  }, 
  {
    path: '/end',
    name: 'End',
    component: EndView
  }
]

const router = new VueRouter({
  routes
})

export default router
