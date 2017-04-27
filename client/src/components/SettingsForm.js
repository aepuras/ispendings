import React from 'react';
import SettingsFormCategory from './SettingsFormCategory';

const SettingsForm = ({categories}) => {
    const categoryComponents = categories.map((category, i) => {
        return (
            <SettingsFormCategory key={i} category={category} />
        );
    });

    return(
        <div className="settingsForm">{categoryComponents}</div>
    );
}

export default SettingsForm;
