import {useState} from "react";

export const useForm = () => {
    const [value, setValue] = useState('');

    const onChange = (event) =>{
        setValue(event.target.value);
    };

    const reset = () =>{
        setValue('');
    }


    return {
        value,
        onChange,
        reset
    }
}