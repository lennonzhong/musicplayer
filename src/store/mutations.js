const mutations={
    setSinger(state,singer){
        state.singer=singer;
    },
    setSingerInfo(state,info){
        state.singerinfo=info;
    },
    setSingerSongs(state,songs){
        state.singerSongs=songs;
    },
    setplayCurrentObj(state,obj){
        state.playCurrentObj=obj;
    },
    setplayState(state,status){
       state.playstate=status;
    }
}
export default mutations;