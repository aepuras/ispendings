import React, { Component } from 'react';
import Icon from './Icon.js';
import { ICONS } from '../constants.js';
import './SettingsFormCategory.css';

class SettingsFormCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable : false,
            category : this.props.category
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
        this.setState({editable: !this.state.editable});
    }

    renderItems() {
        return this.state.category.items.map(
            (item, i) => {
                return (
                    <div key={i}>
                    {this.state.editable ? (
                        <input type="text" value={item} />
                    ) : (
                        <div>{item}</div>
                    )}
                    </div>
                );
            }
        )
    };

     render() {
        let category = this.state.category;
        let deleteCategory = this.props.deleteCategory;

        return (
            <div className="settingsFormCategory">
                <div className="settingsFormCategory_name">
                    {this.state.editable ? (
                        <input type="text" value={category.name} name="name" />
                    ) : (
                        <h3>{category.name}</h3>
                    )}
                    <div className="settingsFormCategory_tools">
                        <a onClick={this.toggleEdit} title="Edit">
                            <Icon icon={this.state.editable ? ICONS.EXIT : ICONS.EDIT} color="#d26400" />
                        </a>
                        <a onClick={() => deleteCategory(category.name)} title="Delete">
                            <Icon icon={ICONS.BIN} color="#d26400" />
                        </a>
                    </div>
                </div>
                <div className="settingsFormCagegory_items">{this.renderItems()}</div>
                {this.state.editable && <div className="settingsFormCategory_button"><button>Save</button></div>}
            </div>
        );
    }
}

export default SettingsFormCategory;
