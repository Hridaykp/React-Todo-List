import React from 'react'

//update comp
const UpdateForm = (props) => {
    return (
        <>
            {/* Update Task  */}
            < div className="row mb-3">
                <div className="col">
                    <input type="text"
                        value={props.updateData && props.updateData.title}
                        onChange={props.changeTask}
                        className='form-control form-control-sm'
                        style={{fontSize:25, }}
                    />
                </div>
                <div className="col-auto">
                    {/* update btn  */}
                    <button
                        onClick={props.updateTask}
                        className="btn btn-sm btn-success mr-20"style={{fontSize:25}}>
                        Update
                    </button>
                    {/* cancel btn  */}
                    <button className="btn btn-sm btn-warning"
                        onClick={props.cancelUpdate}
                        style={{fontSize:25}}
                    >
                        Cancel
                    </button>
                </div>
            </div>      
        </>
    )
}

 
export default UpdateForm;