import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const { title } = this.props;
        return (
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="d-flex">
                                    {title}
                                    <div className="ml-auto">
                                        <span className="mx-auto p-2 text-primary">
                                            <i className="fas fa-pen fa-xs"></i>
                                        </span>
                                        <span className="mx-auto p-2 text-danger">
                                            <i className="fas fa-trash fa-xs"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
