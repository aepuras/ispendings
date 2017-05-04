import React from 'react';
import SettingsFormCategory from './SettingsFormCategory';
import './SettingsForm.css'

const SettingsForm = ({categories, deleteCategory}) => {
    const categoryComponents = categories.map((category, i) => {
        return (
            <SettingsFormCategory key={i} category={category} deleteCategory={deleteCategory} />
        );
    });

    return(
        <div className="settings">
            <h1>Edit Categories</h1>
            <div className="settingsForm">{categoryComponents}</div>
        </div>
    );
}

export default SettingsForm;
