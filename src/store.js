

export const storeDef = {
    state:{
        remotesList: [
            {
                _id: 1,
                alias: 'my alias 1',
                uri: 'http://localhost:8080',
                interval: 500
            },
            {
                _id: 2,
                alias: 'my alias 2',
                uri: 'http://localhost:8080',
                interval: 500
            },
            {
                _id: 3,
                alias: 'my alias 3',
                uri: 'http://localhost:8080',
                interval: 500
            },
            {
                _id: 4,
                alias: 'my alias 4',
                uri: 'http://localhost:8080',
                interval: 500
            }
        ]
    },
    getters:{
        allRemotes: state=>{
            return state.remotesList
        },
        remote:(state, getters)=>id=> 
        {
            return state.remotesList.find(({_id})=>_id=== +id)
        }
    },
    actions:{},
    mutations:{
        saveRemote: (state, remote)=>{
            let index = state.remotesList.findIndex(({_id})=>_id===remote._id)
            if(index >=0){
                state.remotesList[index] = remote
            } else{
                remote._id = Date.now()
                state.remotesList.unshift(remote)
            }
            
        },
        deleteRemote: (state, id)=>{
            let index = state.remotesList.findIndex(({_id})=>_id===id)
            state.remotesList.splice(index, 1)
        }
    }
}