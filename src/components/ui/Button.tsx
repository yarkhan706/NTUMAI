import React from "react";
import {Pressable} from "react-native";
import AppText from "../../../components/AppText";

interface ButtonProps{
    title:string;
    onPress:()=>void;
    className?:string;
}

const Button:React.FC<ButtonProps>=(props)=>{
    return(
        <Pressable
        className={`bg-teal-600 w-full py-4 rounded-lg mb-2 ${props.className}`}
        onPress={props.onPress}
        >
            <AppText className={` text-center text-lg font-semibold ${props.className}`}>{props.title}</AppText>
        </Pressable>
    )
}

export default Button;
