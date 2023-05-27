import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <div>
            {isAuth ? (
                <button onClick={onLogOut}>Выйти из системы</button>
            ) : (
                <button onClick={onLogin}>Войти</button>
            )}
        </div>
    );
};

export default SimpleComponent;

SimpleComponent.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLogOut: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired
};
