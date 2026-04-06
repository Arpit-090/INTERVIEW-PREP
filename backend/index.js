import express, { json, urlencoded } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import router from './routes/auth-route.js'
import sessionrouter from './routes/session-route.js'
import airouter from './routes/ai-route.js'
import { connectDB } from './config/database-config.js'

const PORT = process.env.PORT || 9000

dotenv.config();
const app = express();

console.log(PORT);

try {
    console.log("inside try");

    const connected = await connectDB();
    if (connected) console.log("connected to db");



} catch (error) {
    console.log("error at index js file ", error);

}

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    origin: "https://interview-prep-1-frontend.onrender.com",
    credentials:true,
}));

// app.get('/',(req,res)=>{
//     // res.json({msg:"we are here",
//     //     data:{username:"something"},
//     //     success:true
//     // });
//     res.json({success:false,
//         msg:"getting an error",
//         status:400,
//         err:"error"
//     })
// })

app.use("/api/auth", router);
app.use("/api/sessions", sessionrouter);
app.use("/api/ai", airouter);

app.listen(PORT, () => {
    console.log(`app is listing at port ${PORT}`);
})
