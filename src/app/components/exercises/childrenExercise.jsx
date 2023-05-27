import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <NumberedList>
                <Component />
                <Component />
                <Component />
            </NumberedList>
        </CollapseWrapper>
    );
};

ChildrenExercise.propTypes = {
    children: PropTypes.node.isRequired
};

const NumberedList = ({ children }) => {
    const childrenArray = React.Children.toArray(children);

    return (
        <ul>
            {childrenArray.map((child, index) => (
                <ul key={index}>
                    {index + 1}. {child}
                </ul>
            ))}
        </ul>
    );
};

NumberedList.propTypes = {
    children: PropTypes.node.isRequired
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
