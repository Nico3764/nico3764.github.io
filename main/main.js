
let viewSection = (sectionType) =>
{
   if ( sectionType== 'habilidades'){
    document.getElementById('habilidades').className='button-nav-select';
    document.getElementById('section').innerHTML=`
            <div class="row">
            <div class="col-sm-12">          
                <div class="row">
                    <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">                                        
                        <p>
                        <i class="fa-solid fa-server mx-3"></i>Configuración de Servidores, mantenimiento, monitoreo, seguridad y virtualización.<br>
                        <i class="fa-solid fa-server mx-3"></i>Cloud Computing, bases de datos.<br>
                        <i class="fa-solid fa-language mx-3"></i>Idiomas: Español e ingles avanzado.<br>
                        
                        <table class="table table-striped table-sm">
                            <tr>
                            <th colspan="4" class="rowTopBorder">Lenguajes de Programación/framenwork's:</th>                      
                            </tr>
                            <tr>
                            <td><i class="fa-brands fa-js"></i> Java Script</td>
                            <td><i class="fa-brands fa-php"></i> PHP</td>
                            <td><i class="fa-brands fa-python"></i> Python</td>
                            <td><i class="fa-brands fa-java"></i> Java</td>                  
                            </tr>
                            <tr>
                            <td><i class="fa-brands fa-bootstrap"></i> Bootstrap</td>
                            <td><i class="fa-brands fa-react"></i> React</td>
                            <td><i class="fa-brands fa-angular"></i> Angular</td>
                            <td><i class="fa-brands fa-node-js"></i> Node JS</td>                       
                            </tr>
                            <tr>
                            <td><i class="fa-brands fa-html5"></i>HTML5</td>
                            <td><i class="fa-brands fa-css3-alt"></i>CSS</td>
                            <td><i class="fa-solid fa-hashtag"></i> C#</td>
                            <td><i class="fa-brands fa-linux"></i> BASH scripting</td>                       
                            </tr>
                            <tr>
                            <td><i class="fa-solid fa-database"></i>MySql/Postgree</td>
                            <td><i class="fa-regular fa-gem"></i>Ruby</td>
                            <td><i class="fa-solid fa-calculator"></i> MathLab</td>
                            <td><i class="fa-solid fa-puzzle-piece"></i>Assembby</td>                       
                            </tr>
                        </table>
                        
                        </p>                                        
                    </div>       
            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div id="carouselExampleAutoplaying" class="carousel slide carouselTuning" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img height="200px" style="object-fit: contain;" src="./img/Habilidades_1.jpeg" class="d-block w-100" alt="Imagen ilustrativa">
                </div>
                <div class="carousel-item">
                    <img height="200px" style="object-fit: contain;" src="./img/Habilidades_2.png" class="d-block w-100" alt="Imagen ilustrativa">
                </div>
                <div class="carousel-item">
                    <img height="200px" style="object-fit: contain;"  src="./img/Habilidades_3.jpeg" class="d-block w-100" alt="Imagen ilustrativa">
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
            </div>
            </div>       
        </div> `;
   } else if (sectionType== 'formacionAcademica'){
    document.getElementById('formacionAcademica').className='button-nav-select';
    document.getElementById('section').innerHTML=`
        <div class="row">
        <div class="col">          
            <div class="row">
                <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">    
                    <table class="table table-striped table-sm">
                    <tr>
                      <td class="thStart"><i class="fa-solid fa-laptop"></i></td>
                      <td class="thEnd">Ticmas Academy, Curso de programación con metodología fullstack.</td>
                    </tr>
                    <tr>
                      <td><i class="fa-solid fa-laptop"></i></i></td>
                      <td>Ingeniero informático, Universidad Nacional de Mar del Plata.</td>
                    </tr>
                    <tr>
                      <td><i class="fa-solid fa-ethernet"></i></td>
                      <td>Cisco, CCNA, CCNP Enterprise</td>
                    </tr>
                    <tr>
                      <td><i class="fa-brands fa-redhat"></i></td>
                      <td>Linux Redhat Certified System Administrator, Udemy</td>
                    </tr> 
                    <tr>
                      <td><i class="fa-brands fa-linux"></i></td>
                      <td>Linux Professional Institute, LPIC-essentials, LPIC-1, LPIC-2 y LPIC-3</td>
                    </tr>
                    <tr>
                      <td><i class="fa-solid fa-laptop"></i></td>
                      <td>AWS Academy, AWS Certified Developer - Associate</td>
                    </tr>                                              
                  </table>                                        
                </div>       
              <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div id="carouselExampleAutoplaying" class="carousel slide carouselTuning" data-bs-ride="carousel"><div class="carousel-inner">
                  <div class="carousel-item active">
                      <img height="200px" style="object-fit: contain;" src="https://static.wixstatic.com/media/77d9b2_120987c7a5e34959948d74bdb5917037~mv2.png/v1/fill/w_196,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo_master_fondo_transp.png" class="d-block w-100" alt="Imagen ilustrativa">
                  </div>
                  <div class="carousel-item">
                      <img height="200px" style="object-fit: contain;" src="./img/Formacion_academical_1.png" class="d-block w-100" alt="Imagen ilustrativa">
                  </div>
                  <div class="carousel-item">
                      <img height="200px" style="object-fit: contain;"  src="./img/Experiencia_laboral_3.png" class="d-block w-100" alt="Imagen ilustrativa">
                  </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                  </button>
              </div>
        </div>       
    </div>`;
   } else if (sectionType== 'experienciaLaboral'){
    document.getElementById('experienciaLaboral').className='button-nav-select';
    document.getElementById('section').innerHTML=`
    <div class="row">
        <div class="col">          
            <div class="row">
                <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                      <table class="table table-striped table-sm">
                        <tr>
                          <td class="thStart"><i class="fa-brands fa-amazon"></i></td>
                          <td class="thEnd">Amazon Web Services, desarrollador web señor. 5 años de experiencia</td>
                        </tr>
                        <tr>
                          <td><i class="fa-brands fa-salesforce"></i></td>
                          <td>Salesforce Developer, desarrollador web señor. 2 años de experiencia.</td>
                        </tr>
                        <tr>
                          <td><i class="fa-brands fa-google"></i></td>
                          <td>Google Cloud Developer, desarrollador web señor. 2 años de experiencia.</td>
                        </tr>
                        <tr>
                          <td><i class="fa-brands fa-redhat"></i></td>
                          <td>Red Hat Developer for the software and tutorials to develop hybrid cloud applications using Kubernetes, microservices, serverless and Linux. 5 años de experiencia                   </td>
                        </tr> 
                        <tr>
                          <td><i class="fa-solid fa-ethernet"></i></td>
                          <td>Cisco: Networking, Cloud, and Cybersecurity Solutions. 8 años de experiencia.</td>
                        </tr>
                        <tr>
                          <td><i class="fa-brands fa-linux"></i></td>
                          <td>Linux Kernel Development details the design and implementation of the Linux kernel. 8 años de experiencia.</td>
                        </tr>
                        <tr>
                          <td><i class="fa-solid fa-phone-volume"></i></td>
                          <td>AT&T Technology and Innovation, acesor tecnológico. 2 años de experiencia</td>
                        </tr>                            
                      </table>                                   
                </div>       
                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                  <div id="carouselExampleAutoplaying" class="carousel slide carouselTuning" data-bs-ride="carousel"><div class="carousel-inner">
                    <div class="carousel-item active">
                      <img height="200px" style="object-fit: contain;"  src="./img/Experiencia_laboral_1.png" class="d-block w-100" alt="Imagen ilustrativa">
                    </div>
                    <div class="carousel-item">
                      <img height="200px" style="object-fit: contain;"  src="./img/Experiencia_laboral_2.png" class="d-block w-100" alt="Imagen ilustrativa">
                    </div>
                    <div class="carousel-item">
                      <img height="200px" style="object-fit: contain;"  src="./img/Experiencia_laboral_3.png" class="d-block w-100" alt="Imagen ilustrativa">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
        </div>       
    </div>`;
   } else if (sectionType== 'perfilProfesional'){
    document.getElementById('perfilProfesional').className='button-nav-select';
    document.getElementById('section').innerHTML=`
      <div class="row">
        <div class="col">          
            <div class="row">
              <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">                                         
                    <p><small>
                      Mi perfil profesional se puede describir como Full Stack Web Developer o desarrollador Full Stack, con conocimiento de redes y seguridad informática. 
                      Especializado en muchas áreas, desde front end hasta back end. 
                      Con conocimiento general en todos los pasos del desarrollo, desde el concepto hasta el producto terminado (conocimiento especializado en todas las etapas del desarrollo de software). 
                      Por lo tanto, conocimientos necesarios para ser un experto en desarrollo para servidor, red, entorno de hosting, uso de API, interfaz de usuario, seguridad, etc. 
                      En la práctica, simplemente alguien que está familiarizado con todas las capas en el desarrollo de software informático. 
                      Algunas tecnologías con las que estoy familiarizado:<br>
    
                      Git, GitHub & SourceTree.<br>
                      HTML/CSS.<br>
                      JavaScript.<br>
                      Lenguaje de Backend.<br>
                      Bases de Datos y almacenamiento web.<br>
                      HTTP & REST.<br>
                      Arquitectura web.<br>
                      Desarrollo Web Full Stack Bootcamp.
                    </small></p>                                        
                </div>       
              <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div id="carouselExampleAutoplaying" class="carousel slide carouselTuning" data-bs-ride="carousel"><div class="carousel-inner">
                  <div class="carousel-item active">
                    <img height="200px" style="object-fit: contain;"  src="./img/Perfil_profecional_1.jpeg" class="d-block w-100" alt="Imagen ilustrativa">
                  </div>
                  <div class="carousel-item">
                    <img height="200px" style="object-fit: contain;"  src="./img/Perfil_profecional_2.jpeg" class="d-block w-100" alt="Imagen ilustrativa">
                  </div>
                  <div class="carousel-item">
                    <img height="200px" style="object-fit: contain;"   src="./img/Perfil_profecional_3.jpeg" class="d-block w-100" alt="Imagen ilustrativa">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
        </div>       
      </div>`;
   } else if (sectionType== 'datosPersonales') {
    document.getElementById('datosPersonales').className='button-nav-select';
    document.getElementById('section').innerHTML=`
    <div class="row">
           <div class="col">          
               <div class="row">
                  <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">                                         
                       <table class="table table-striped table-sm">
                           <tr>
                               <th class="rowDatosPersonales thStart">Nombre: </th>
                               <td class="rowDatosPersonales thEnd">Alberto Hernández Hernández</td>
                           </tr>
                           <tr>
                               <th class="rowDatosPersonales">Correo electrónico: </th>
                               <td class="rowDatosPersonales">alberto @tucorreo.com</td>
                           </tr>
                           <tr>
                               <th class="rowDatosPersonales">Fecha de nacimiento: </th>
                               <td class="rowDatosPersonales">25 de octubre de 1992</td>
                           </tr>
                           <tr>
                               <th class="rowDatosPersonales">Dirección: </th>
                               <td class="rowDatosPersonales">Calle Sur, 18, Colonia Los Olmos, Ciudad de México, 01234</td>
                           </tr>
                           <tr>
                               <th class="rowDatosPersonales">Número telefónico: </th>
                               <td class="rowDatosPersonales">123-456-7890</td>
                           </tr>
                       </table>                                            
                   </div>       
                  <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div id="carouselExampleAutoplaying" class="carousel slide carouselTuning" data-bs-ride="carousel"> <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img height="200px" style="object-fit: contain;" src="./img/Datos_personales_1.jpeg" class="d-block w-100" alt="Imagen ilustrativa">
                      </div>
                      <div class="carousel-item">
                        <img height="200px" style="object-fit: contain;" src="./img/Datos_personales_2.jpeg" class="d-block w-100" alt="Imagen ilustrativa">
                      </div>
                      <div class="carousel-item">
                        <img height="200px" style="object-fit: contain;"  src="./img/Datos_personales_3.jpeg" class="d-block w-100" alt="Imagen ilustrativa">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>       
         </div>`;
   } else {
    console.log("Error en sectionType");
   }
}

let viewNav =() =>
{
    document.getElementById('nav').innerHTML= `
    <div class="row justify-content-evenly">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
            <button id="datosPersonales" class="button-nav">Datos Personales</button>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
            <button id="perfilProfesional" class="button-nav">Perfil profesional</button>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
            <button id="experienciaLaboral" class="button-nav">Experiencia laboral</button>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
            <button id="formacionAcademica" class="button-nav">Formación</button>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
            <button id="habilidades" class="button-nav">Habilidades</button>
        </div>
    </div> `;

}
let actualiceView = (event) =>
{
    let element = event.target;//me trae el elemento que generó el evento.

    console.log("El evento es: ");
    console.log(event);
    //console.log(element);
    //console.log(element.id);


    viewNav();
    viewSection(element.id);
}

let monitorNavClick =()=>
{
 document.getElementById('nav').addEventListener('click', actualiceView);
}

let start =() =>
{
	viewNav();
    viewSection('datosPersonales');
    monitorNavClick();
}
window.addEventListener('DOMContentLoaded', start );