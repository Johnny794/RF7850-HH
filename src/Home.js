import React, { useState }  from 'react';
import { Link } from "react-router-dom"
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogTitle from '@material-ui/core/DialogTitle';

function Home() {

    const [msgIndex, setMsgIndex] = useState(0)
    const [openDialog, setOpenDialog] = useState(false) 
    const [openContDialog, setOpenContDialog] = useState(false)

    const msgList =  [
        "La misión fundamental es mejorar el auto aprendizaje  y la calidad del conocimiento del personal de las FFMM, pasando de la pedagogía tradicional a una pedagogía innovadora,  centrándonos en la educación y promoción del manejo de los radios Harris 7850 M-HH, para así prevenir futuras fallas de comunicaciones en el desarrollo de las operaciones militares",
        "Queremos oportunidades de conocimiento  para que los  miembros de las FFMM  del arma de comunicaciones puedan conocer y aprender que esta es una  herramientas fundamental para defenderse de la soberanía de Colombia. Creemos que construir una base educativa sólida en materia de aprendizaje  es la clave para el éxito de las FFMM."        
    ]


    const handleClickToOpenCont = () => {
        setOpenContDialog(true)        
      };
      
    const handleClickToOpen = () => {
        setOpenDialog(true)
        setMsgIndex(0)
      };
    
    const handleClickToOpen2 = () => {
        setOpenDialog(true)
        setMsgIndex(1)
      };
      
    const handleToClose = () => {
        setOpenDialog(false)         
    };

    const handleToCloseContDialog = () => {
        setOpenContDialog(false)         
    };
    

  return (
    <div>
      <header className="App-header">               
            <div style={{display:'flex', flexDirection:'row', width:'100%', alignItems:'center', justifyContent:'space-between'}} >
                <div className='ml-4' >
                    <Link to = "/">
                        <button className="btn btn-primary btn-sm" >
                            Atras
                        </button>
                    </Link>
                </div>
                <div className='mr-4'>
                    <ul className="navbar-nav mr-auto" style={{display:'flex', flexDirection:'row'}}  >   
                        <li className='mr-2 ml-2' > 
                            <button onClick={handleClickToOpenCont} style={{color:'white', boxShadow: '0 0 0'}} className=" btn btn-outline-none " >
                                Conoce la ruta de aprendizaje
                            </button>
                        </li> 
                        <li className='mr-2 ml-2' > 
                            <button onClick={handleClickToOpen} style={{color:'white', boxShadow: '0 0 0'}} className=" btn btn-outline-none " >
                                Misión
                            </button>
                        </li>
                        <li className='ml-2'> 
                            <button onClick={handleClickToOpen2} style={{color:'white', boxShadow: '0 0 0'}} className=" btn" >
                                Visión
                            </button>
                        </li>         
                    </ul>
                </div>

                <Dialog open={openDialog} onClose={handleToClose} >   
                    <DialogTitle id="simple-dialog-title">{ msgIndex===0 ? 'Misión' : 'Vision' }</DialogTitle>   
                    <DialogContent>
                        <DialogContentText>
                                <div className="alert alert-warning"  role="alert" align='justify' > 
                                    {msgList[msgIndex]}
                                </div> 
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleToClose} 
                                color="primary" autoFocus>
                                Cerrar
                        </Button>
                    </DialogActions>
                </Dialog> 
                
                {/* Ventana ruta de aprendizaje */}
                <Dialog open={openContDialog} onClose={handleToCloseContDialog} >                       
                    <DialogContent>
                        <DialogContentText>
                                <div className="alert alert-primary"  role="alert" align='justify' >                                     
                                    Esta OVA proporciona la información necesaria para servir de apoyo a 
                                    las operaciones del usuario a nivel de operador de la Radio Portátil de 
                                    Mano de Red Multibanda RF-7850M-HH, a la que se hará referencia a lo largo de la OVA.
                                </div> 
                                <div className='alert alert-info'>
                                    Te invitamos a conocer la información de esta OVA de la siguiente manera:  
                                    <ol>
                                        <li>
                                            Mision
                                        </li>
                                        <li>
                                            Vision
                                        </li>
                                        <li>
                                            Modulos de aprendizaje
                                            <ul>
                                                <li>
                                                    Componentes
                                                </li>
                                                <li>
                                                    Operación
                                                </li>
                                                <li>
                                                    Programación
                                                </li>
                                                <li>
                                                    Operación de Quicklook
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>                                  
                                </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleToCloseContDialog} 
                                color="primary" autoFocus>
                                Cerrar
                        </Button>
                    </DialogActions>
                </Dialog> 

            </div>
        </header>

        {/* modules container */}

        <div className="home-contain" >
            <div className="alert alert-primary" role="alert" align='center'>
                    <h3>MODULOS DE APRENDIZAJE </h3>
            </div>              
            <div className="container">
                <div  className="row ">
                    
                    <div  className="col-sm mt-2 ">
                        <Link to = "/componentes" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Componentes">  
                            <img src="./assets/componentes12.png" 
                            alt="Energia Fotovoltaica" 
                            className="solar rounded-circle float-left btn btn-outline-dark" />
                        </Link>                        
                    </div>
                    
                    <div className="col-sm mt-2  ">
                    <Link to = "/operacion" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Operación" >
                            <img src="./assets/operacion21.png" 
                            alt="Operación" 
                            className="eolica rounded-circle float-right btn btn-outline-dark"/>                          
                        </Link>
                    </div>
                </div>    
            </div>

            <div className="container">
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}} >                    
                    <Link to = "/rompecabezas" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Programación">
                            <button style={{color:'white'}} className="rounded-circle btn btn-outline-yellow" >
                                    juega
                            </button>                                                                             
                    </Link>                                                     
                </div>    
            </div>

            <div className="container">
                <div  className="row ">
                    <div  className="col-sm mt-2 ">
                        <Link to = "/programacion" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Programación" >
                            <img src="./assets/programacion12.png" 
                            alt="programación" 
                            className="eolica rounded-circle float-left btn btn-outline-dark"/>                          
                        </Link>
                    </div>
                    
                    <div className="col-sm mt-2  ">
                        <Link to = "/quicklook" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Quicklock">  
                            <img src="./assets/quicklock12.png" 
                            alt="quicklock12" 
                            className="solar rounded-circle float-right btn btn-outline-dark" />
                        </Link>
                    </div>  
                </div>    
            </div>

            <div className="container"  >
                <div style={{display:'flex', justifyContent:'flex-end'}} >                    
                    <Link to = "/encuesta" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Programación">                            
                            <button className="btn btn-outline-white" style={{color:'white'}} >
                                 Encuesta Final
                            </button>                                                                                                                              
                    </Link>                                                     
                </div>    
            </div>

      </div>
   
      
    </div>
  );
}

export default Home;
