import express,{json} from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {dirname,join} from 'path';
import { fileURLToPath } from 'url';
import userRouter from './routes/user_routes.js';
import authRouter from './routes/auth_routes.js';
dotenv.config();
const app= express();
const __dirname = dirname(fileURLToPath(import.meta.url));


const corsOptions= {credentials:true,origin:process.env.URL || '*'};
app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());



app.use('/',express.static(join(__dirname,'public')));
app.use('/api/users',userRouter);
app.use('/api/auth',authRouter);






const PORT = process.env.PORT || 5000;
 app.listen(PORT,()=>console.log(`Connected!! on ${PORT}`));