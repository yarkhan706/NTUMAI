import React from "react";
import {Pressable,Text} from "react-native";

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
            <Text className={` text-center text-lg font-semibold ${props.className}`}>{props.title}</Text>
        </Pressable>
    )
}

export default Button;
