<template>
  
  <div>
    
      <h1>Login Page</h1>
          <div>
              <!-- 이미 넣을때 ^^ -->
              <img id="login_img_1" src="https://cdn.pixabay.com/photo/2018/09/17/23/21/imagination-3685048__340.png" alt="">
          </div>


      <div>
        <div class="input_row">
            <label for="id">id</label>
            <input type="text" id="id" v-model="user.userid">
        </div>
        <div class="input_row">
            <label for="password">pw</label>
            <input type="password" id="password" v-model="user.password">
        </div>
        <button @click="login()">로그인</button>
        <input value="가입하기" type="button" @click="signUp()">
        <input type="button" value="會員" @click="userlist()">
      </div>
  </div>
</template>
<style>
  html {
    background: 
    rgb(221, 221, 221);
  }
  #login_img_1 {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
        border: 10px solid black;
        border-radius: 10%;
    }
    #login_img_1:hover {
        background: red;
    }
</style>
    <script>
      export default {
          data: function () {
              return {
                  user: {
                  userid: '',
                  password: ''
              }
          }
      },
      methods: {
          login() {
            this.$http.post('/users/login', {
              user: this.user
            })
            .then(
              (res) => {  //로그인 성공
                  return alert(res.data.message),
                  this.$router.push({name: 'vv'})
            },
            () => { // error 를 보여줌
                alert('Login failed! please check your id or password');
            })
            .catch(err => {
              alert(err);
              })
          },
          signUp() {
            this.$router.push({name: 'SignUp'})
          },
          userlist() {
            this.$router.push({name: 'userList'})
          }
        }
      }
      </script>

    <!-- <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    built files will be auto injected -->
