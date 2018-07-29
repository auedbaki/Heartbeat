import RemotesList from './components/RemotesList.vue'
import RemoteForm from './components/RemoteForm.vue'

export const routes = [
    {name: 'Home', path:'/',component:RemotesList},
    {name: 'Remote', path:'/remote', component:RemoteForm}
]