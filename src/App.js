import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoItemList from './components/TodoItemList';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

class App extends Component {
    state = {
        items: [],
        item: '',
        id: uuid(),
        itemEdited: false
    }
    handleChange = (e) => {
        this.setState({
            item: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            title: this.state.item,
            id: this.state.id
        }
        const newItems = [...this.state.items, newItem];

        this.setState({
            items: newItems,
            item: '',
            id: uuid()
        });
    }
    handleItemEdit = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        const editedItem = this.state.items.find(item => item.id === id);

        this.setState({
            items: filteredItems,
            item: editedItem.title,
            id: id
        });
    }
    handleItemDelete = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id);

        this.setState({
            items: filteredItems
        });
    }
    handleClearList = () => {
        this.setState({
            items: []
        });
    }
    render(){
        return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">            
                    <TodoInput 
                        item={this.state.item}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit} />
                    <TodoItemList 
                        items={this.state.items}
                        handleItemEdit={this.handleItemEdit}
                        handleItemDelete={this.handleItemDelete}
                        handleClearList={this.handleClearList} />
                </div>
            </div>
        </div>
        );
    }
}

export default App;
