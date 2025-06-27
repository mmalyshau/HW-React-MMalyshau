import {useState} from "react";

 export const useForm = (initial: string) => {
    const [value, setValue] = useState('');
    const [isDirty, setIsDirty] = useState(false);

    const onChange = (event: React.ChangeEvent<HTMLInputElement> ) =>{
        setValue(event.target.value);

    };
    const onBlur = ()=>{
        setIsDirty(true);
    }

    const reset = () =>{
        setValue(initial);
        setIsDirty(false);
    }


    return {
        value,
        onChange,
        onBlur,
        isDirty,
        reset
    }
}


