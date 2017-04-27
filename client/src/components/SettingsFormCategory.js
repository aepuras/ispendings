import React from 'react';

const SettingsFormCategory = ({category}) => {
    const items = category.items.map((item, i) => {
        return (
            <div key={i}>{item}</div>
        );
    });
    return (
        <div>
            <div>{category.name}</div>
            <div>{items}</div>
        </div>
    );
};

export default SettingsFormCategory;
