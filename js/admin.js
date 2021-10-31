const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCk1yrVh0zTC8BBu-mirrHaqhaMGcg-6Xo",
  authDomain: "duccboxjs-281f7.firebaseapp.com",
  databaseURL: "https://duccboxjs-default-rtdb.firebaseio.com",
  projectId: "duccboxjs",
  storageBucket: "duccboxjs.appspot.com",
  messagingSenderId: "1070773113218",
  appId: "1:1070773113218:web:578d79b68a8e7d1727ff9b",
  measurementId: "G-7WDEN5SZJ6",
});
const socket = io()
const date = new Date()
const app = firebase
const auth = app.auth();
let user
app.analytics();
 class App extends React.Component {
    constructor(props) {
        super(props);
        this.passRef = React.createRef();
        this.userRef = React.createRef();
      }
    render() {
      let AllUsers
     function submit() {
       socket.emit('requset-all')
       socket.on('users',userRecord=>{
        for (let i = 0; i < userRecord.length; i++) {
                      
        }
         console.log(userRecord)
         AllUsers = userRecord;
         document.getElementById('all-users').innerHTML = userRecord
       })
       console.log(AllUsers)
       if (document.getElementById('user').value = 'admin@duccboxjs-281f7.firebaseapp.com') {
         auth.signInWithEmailAndPassword(document.getElementById('user').value,document.getElementById('pass').value)
         .then(() => {
          document.getElementById('admin-box').style.display = 'block';
          document.getElementById('login-box').style.display = 'none';
          document.getElementById('welcome-msg').innerHTML = `Welcome ${user.displayName}!`
         }).catch((err)=>{
alert(err)
         })
       } else {
         
       }
       auth.onAuthStateChanged(userq => { 
        if (userq) {
          user = userq
          
       }
    });
     }
     let name
     if (user){
       document.getElementById('admin-box').style.display = 'block'
     }else{
      name = 'invalid session_';
     }
     socket.on("chat message", function (msg) {
      const item = document.createElement("li");
      item.textContent = `Chat:${msg}`;
      document.getElementById('console').appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
    });
    socket.on("duccbox.update.remove", function () {
      const item = document.createElement("li");
      item.textContent = `duccbox.update.remove:user left the WebSocket network`;
      document.getElementById('console').appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
    });
    socket.on("duccbox.update.pos", (pos1, pos2, pos3, posRot) => {
      const item = document.createElement("li");
      item.textContent = `duccbox.update.pos:x:${pos1},y:${pos3},z:${pos2}`;
      document.getElementById('console').appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
    });

        return <div className='App-header'>
            <div id='login-box' className='login-box'>
            <br/><br/>
                <input type='text' id='user' className='login-input-box' ref={this.userRef} defaultValue='user' ></input><br/>
                <input type='text'id='pass'className='login-input-box' ref={this.passRef} defaultValue='password' ></input><br/>
                <p className='extend-box-login'><samp> DuccBOX.js admin login box</samp></p><br/>
                <button id='login-btn' className='left-box-button' onClick={()=>{
                  submit();
                }}>Login</button><br/><br/>
            </div>
            <div id='admin-box' className='admim-box-main'><div id='user-page'><p>All users...</p><br/>
            </div><div id='main-page'>
              <samp id='welcome-msg'>Welcome !</samp><br/>
              <button className='left-box-button' onClick={()=>{
                if (user) {       console.log(user.uid)
                  console.log(user.uid)

                  socket.emit('reload-toAll',()=>{
                    alert('done!')
                  })
                } else {
                  alert('session invalid')
                }
              }}>Reload all user windows</button>
              </div><div id='event-console' className='event-console'>
<samp>DuccBOX.js event console</samp><br/>
               <div id='console'></div>
                  
                </div><div className='left-box'>
              <button className='left-box-button' id='main-page-btn' onClick={()=>{
                document.getElementById('event-console').style.display = 'none';
                document.getElementById('main-page').style.display = 'block';
              }}>Main Page</button><br/><br/>
              <button className='left-box-button' id='users-page-btn'>Users</button><br/><br/>
              <button className='left-box-button' id='users-page-btn'>Send custom messages</button><br/><br/>
              <button className='left-box-button' id='users-page-btn' onClick={()=>{
                document.getElementById('event-console').style.display = 'block';
                document.getElementById('main-page').style.display = 'none';
              }}>Event Console</button><br/><br/>
                </div></div>
        </div>
    }
 }
ReactDOM.render(<App />, document.getElementById('root'))