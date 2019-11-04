import React from 'react';

function TodoInput(props) {
    const { item, handleChange, handleSubmit } = props;
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Todo Item</label>
                                    <input type="text" className="form-control" value={item} onChange={handleChange} />
                                </div>
                                <button className="btn btn-primary btn-block">add item</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TodoInput;
