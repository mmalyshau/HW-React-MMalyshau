import { useState, useEffect } from "react";
type TValidations = {
    isEmpty?: boolean;
    isEmail?: boolean;
    isValid?: boolean;
}

 const useValidation = (value: string, validations: TValidations) => {
    const [isEmpty, setIsEmpty] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "isEmpty":
                    setIsEmpty(value.trim() === "");
                    break;
                case "isEmail":
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    setIsEmail(emailRegex.test(value.toLowerCase()));
                    break;
                default:
                    break;
            }
        }
    }, [value, validations]);

    useEffect(() => {
        let valid = true;
        if (validations.isEmpty && isEmpty) valid = false;
        if (validations.isEmail && !isEmail) valid = false;
        setIsValid(valid);
    }, [isEmpty, isEmail, isValid, validations]);

    return {
        isEmpty,
        isEmail,
        isValid,
    };
};

export default useValidation;