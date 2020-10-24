import React from 'react'

const Quiz = () => {
    return (
        <div style={styles.contain} > 
            <div style={styles.card} className="card text-white bg-dark" >
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                                <h1> Hola quiz</h1>   
                        </div>                  
                    </div>        
                </div>    
            </div>
        </div>
    )
}

export default Quiz


const styles = {
    contain:{
        margin:5
    },
    imagen:{
        width:300,
        height:400,
        opacity:0.3
    },
    card:{
        marginBottom:5,
        height:600
    },
    pieza:{
        width:100,
        height:133.3,
        margin:5,
    }
}