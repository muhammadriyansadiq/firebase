            const firebaseApp = firebase.initializeApp({
                apiKey: "AIzaSyACWVZ9pyA-Qjv92tHKwEL2tqMdCfJa9hM",
                authDomain: "riyansadiq-6546f.firebaseapp.com",
                projectId: "riyansadiq-6546f",
                storageBucket: "riyansadiq-6546f.appspot.com",
                messagingSenderId: "394513111904",
                appId: "1:394513111904:web:5f7770ccc71c2cc5389c05",
                measurementId: "G-09XJ8WTVN9"
            });

            // Initialize Firebase
            //   const app = initializeApp(firebaseConfig);
            //   const analytics = getAnalytics(app);
            const auth = firebaseApp.auth();
            const db = firebaseApp.firestore();
            function signupcall(){
                let email = document.querySelector("#email").value
                console.log("email",email);
                console.log("password",password);
                auth.createUserWithEmailAndPassword(email , password)
                .then((res)=>{
            console.log(res);
                })
                .catch((error)=>{
                    alert(error.message)
            console.log(error);
                })
            };




            function signIncall(){
                let password = document.querySelector("#password").value
                console.log("email",email);
                console.log("password",password);
                auth.signInWithEmailAndPassword(email , password).then((res)=>{
                    alert(res)
            console.log(res);
                })
                .catch((error)=>{
                    alert(error.message)
            console.log(error);
                })
            }
            function createdata(){
                let email = document.querySelector("#email").value
                let password = document.querySelector("#password").value
                let name = document.querySelector("#name").value

                console.log("email",email);
                console.log("password",password);
                console.log("name",name);

                db.collection("users")
.add({
    email:email,
    password:password,
    name:name
})
                .then((res)=>{
            console.log(res);
                })
                .catch((error)=>{
                    // alert(error.message)
            console.log(error);
                })
            };




            function readdata(){
                

                db.collection("users")
.get()
                .then((res)=>{
console.log(res.docs);
                    console.log(res.docs.map((item)=>{
                return { ...item.data() , id: item.id}
            }));
                })
                .catch((error)=>{
                    // alert(error.message)
            console.log(error);
                })
            };



