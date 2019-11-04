import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoItemList extends Component {
    render() {
        const { items, handleItemEdit, handleItemDelete, handleClearList } = this.props;
        return (
            <div className="mt-5">
                { items.map(item => { 
                    return <TodoItem 
                        key={item.id}
                        id={item.id} 
                        title={item.title} 
                        handleItemEdit={handleItemEdit}
                        handleItemDelete={handleItemDelete} />    
                }) }
                
                <div className="container mt-3">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <button className="btn btn-danger btn-block" 
                                onClick={handleClearList}>Clear List</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
