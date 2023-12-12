import React from "react";

function PlayListApp() {
    return (
        <div className="container">
          <h1 className="display-6 text-warning fw-bolder"> Play Music
                 <i className="fa-solid fa-music ms-2"></i>
          </h1>
            <form className="w-75 mt-2">
                <div className="form-group d-flex">
                    <input type="text" className="form-control w-50" />
                    <button className="btn btn-sm btn-primary">
                        <i className="fa-light fa-plus me-2"></i>
                        Add to playlist
                    </button>
                </div>

            </form>
            <div className="w-50 mt-3">
                <ul className="list-group">
                    <i className="list-group-item d-flex justify-content-between">
                        cơn mưa ngang qua
                        <div className="d-flex">
                        <span className="d-inline-block" data-bs-toggle="tooltip" title="Edit"> 
                                <i role="button" class="fa-solid fa-pen-to-square text-success me-2"/>
                        </span>
                        
                        <span className="d-inline-block" data-bs-toggle="tooltip" title="Delete"> 
                            <i role="button" class="fa-sharp fa-solid fa-trash text-danger"/>
                        </span>

                          
                        </div>
                    </i>
                </ul>
            </div>
        </div>
    )
}

export default PlayListApp