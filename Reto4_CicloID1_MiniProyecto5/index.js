function start () {
    const artyom = new Artyom()
    const UserDictation = artyom.newDictation({
        continuous:true, 
        onResult:function(text){
            const container = document.querySelector('#container');
            const post = document.createElement('h1');
            post.innerHTML = text
            container.appendChild(post)
        },
        onStart:function(){
            console.log("Dictation started by the user");
        },
        onEnd:function(){
            alert("Dictation stopped by the user");
        }
    })
    UserDictation.start()
}