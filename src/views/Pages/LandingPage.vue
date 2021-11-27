<template>
<div>
    <div class="btn-group">
        <div class="text-right">
            <router-link to="/login">
            <base-button style=
            "text-transform:capitalize; 
            text-shadow: 0px 1px 1px #000000; 
            border-bottom: 2px solid #b2b2b2; 
            background-color: #ffffff; 
            border-radius: 10px; 
            color: #3aaf85; 
            padding:10px 24px; 
            margin: 15px;
            border-color: #3aaf85; 
            height:auto; 
            width: auto" 
            outline type="login">Login</base-button>
            </router-link>
        </div>

        <div class="text-right">
            <router-link to="/logincompany">
            <base-button style=
            "text-transform:capitalize; 
            text-shadow: 0px 1px 1px #000000; 
            border-bottom: 2px solid #b2b2b2; 
            background-color: #ffffff; 
            border-radius: 10px; 
            color: #3aaf85; 
            padding:10px 24px; 
            margin: 15px;
            border-color: #3aaf85; 
            height:auto; 
            width: auto" 
            outline type="logincompany">Login for Company</base-button>
            </router-link>
        </div>
    </div>

    <div class="text-center">
        <figure>
            <br/>
            <router-link to="/">
                <img src="img/brand/logo.png" alt="Expert In" width=500px; height=auto>
            </router-link>
        </figure>

        <div class="text-logo">
            <h1 style=
            "font-size: 72px; 
            text-transform: uppercase; 
            text-shadow: 0px 1px 1px #000000; 
            font-weight: bold; 
            color: #3aaf85; 
            border-color: #ffffff"
            > EXPERT IN</h1>
        </div>
    </div>

    <div class="text-center">
         <br/>
        <router-link to="/register">
          <base-button style=
          "font-size: 24px; 
          background:linear-gradient(135deg, #3AAF857A, #3aaf85); 
          text-shadow: 0px 1px 1px #000000; 
          border-bottom: 2px solid #b2b2b2; 
          border-top-left-radius:80px 50px; 
          border-bottom-right-radius:80px 50px; 
          border-radius: 10px; 
          padding:10px 20px; 
          border-color: #3aaf85; height:auto; 
          width: auto" 
          outline type="register" class="my-4">Register</base-button>
        </router-link>
    </div>

</div>
</template>

