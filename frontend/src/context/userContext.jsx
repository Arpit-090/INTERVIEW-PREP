import { useState } from "react";
import { Children } from "react";
import { createContext } from "react";

const userContext=createContext();

export const UserProvider =({Children})=>{
const [UserData,setUserData] = useState({});

   const SetUserInformation=(data)=>{
       setUserData(data);
   }

   const getuserInformation=(UserData)=>{
    return UserData;
   }

   return(
    <userContext.Provider value={{SetUserInformation,getuserInformation}}>
        {Children}
    </userContext.Provider>
   )
}

export default {userContext}
