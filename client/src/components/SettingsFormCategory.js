import React from 'react';
import './SettingsFormCategory.css'

const SettingsFormCategory = ({category, deleteCategory}) => {
    const items = category.items.map((item, i) => {
        return (
            <div key={i}>{item}</div>
        );
    });
    return (
        <div className="settingsFormCategory">
            <div className="settingsFormCategory_name">
                <h3>{category.name}</h3>
                <a onClick={() => deleteCategory(category.name)}>delete</a>
            </div>
            <div className="settingsFormCagegory_items">{items}</div>
        </div>
    );
};

export default SettingsFormCategory;
