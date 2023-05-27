import React, { useState, useEffect } from "react";

const withFunctions = (WrappedComponent) => (props) => {
    const [isAuth, setIsAuth] = useState("false");

    const onLogin = () => {
        localStorage.setItem("auth", "token");
        window.location.reload(); // Перезагружаем страницу после изменения
    };

    const onLogOut = () => {
        localStorage.removeItem("auth");
        window.location.reload();
    };

    useEffect(() => {
        const authValue = localStorage.getItem("auth");
        if (authValue !== null && authValue !== undefined) {
            setIsAuth("true");
        }
    }, []);

    return (
        <WrappedComponent
            {...props}
            onLogin={onLogin}
            onLogOut={onLogOut}
            isAuth={isAuth}
        />
    );
};

export default withFunctions;
