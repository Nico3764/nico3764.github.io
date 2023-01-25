
let viewSection = (sectionType) =>
{
   if ( sectionType== 'habilidades'){
    document.getElementById('habilidades').className='button-nav-select';
    document.getElementById('section').innerHTML=`
            <div class="row">
            <div class="col">          
                <div class="row">
                    <div class="col-8">                                        
                        <p>
                        <i class="fa-solid fa-server mx-3"></i>Configuración de Servidores, mantenimiento, monitoreo, seguridad y virtualización.<br>
                        <i class="fa-solid fa-server mx-3"></i>Cloud Computing, bases de datos.<br>
                        <i class="fa-solid fa-language mx-3"></i>Idiomas: Español e ingles avanzado.<br>
                        
                        <table class="table table-striped">
                            <tr>
                            <th colspan="4" style="border-radius: 20px 20px 0% 0%">Lenguajes de Programación/framenwork's:</th>                      
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
            <div class="col-4">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" style="opacity: 0.5;">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img height="200px" style="object-fit: contain;" src="./img/Habilidades_1.jpeg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img height="200px" style="object-fit: contain;" src="./img/Habilidades_2.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img height="200px" style="object-fit: contain;"  src="./img/Habilidades_3.jpeg" class="d-block w-100" alt="...">
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
                <div class="col-8">                                        
                    <p>
                    <i class="fa-solid fa-laptop mx-3"></i>Ticmas Academy, Curso de programación con metodología fullstack.<br>
                    <i class="fa-solid fa-laptop mx-3"></i>Ingeniero informático, Universidad Nacional de Mar del Plata.<br>
                    <i class="fa-solid fa-ethernet mx-3"></i>Cisco, CCNA, CCNP Enterprise<br>
                    <i class="fa-brands fa-redhat mx-3"></i>Linux Redhat Certified System Administrator, Udemy<br>
                    <i class="fa-brands fa-linux mx-3"></i>Linux Professional Institute, LPIC-essentials, LPIC-1, LPIC-2 y LPIC-3<br>
                    <i class="fa-solid fa-laptop mx-3"></i>AWS Academy, AWS Certified Developer - Associate<br>
                    </p>                                        
                </div>       
        <div class="col-4">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" style="opacity: 0.5;">
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img height="200px" style="object-fit: contain;" src="https://static.wixstatic.com/media/77d9b2_120987c7a5e34959948d74bdb5917037~mv2.png/v1/fill/w_196,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo_master_fondo_transp.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img height="200px" style="object-fit: contain;" src="./img/Formacion_academical_1.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img height="200px" style="object-fit: contain;"  src="./img/Experiencia_laboral_3.png" class="d-block w-100" alt="...">
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
                <div class="col-8">                                        
                    <p>
                      <i class="fa-brands fa-amazon mx-3"></i>Amazon Web Services, desarrollador web señor. 5 años de experiencia.<br>
                      <i class="fa-brands fa-salesforce mx-3"></i>Salesforce Developer, desarrollador web señor. 2 años de experiencia.<br>
                      <i class="fa-brands fa-google mx-3"></i>Google Cloud Developer, desarrollador web señor. 2 años de experiencia.<br>
                      <i class="fa-brands fa-redhat mx-3"></i>Red Hat Developer for the software and tutorials to develop hybrid cloud applications using Kubernetes, microservices, serverless and Linux. 5 años de experiencia<br>
                      <i class="fa-solid fa-ethernet mx-3"></i>Cisco: Networking, Cloud, and Cybersecurity Solutions. 8 años de experiencia.<br>
                      <i class="fa-brands fa-linux mx-3"></i>Linux Kernel Development details the design and implementation of the Linux kernel. 8 años de experiencia.<br>
                      <i class="fa-solid fa-phone-volume mx-3"></i>AT&T Technology and Innovation, acesor tecnológico. 2 años de experiencia<br>
                    </p>                                        
                </div>       
        <div class="col-4">
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img height="200px" style="object-fit: contain;"  src="./img/Experiencia_laboral_1.png" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img height="200px" style="object-fit: contain;"  src="./img/Experiencia_laboral_2.png" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img height="200px" style="object-fit: contain;"  src="./img/Experiencia_laboral_3.png" class="d-block w-100" alt="...">
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
                <div class="col-8">                                        
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
        <div class="col-4">
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img height="200px" style="object-fit: contain;"  src="./img/Perfil_profecional_1.jpeg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img height="200px" style="object-fit: contain;"  src="./img/Perfil_profecional_2.jpeg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img height="200px" style="object-fit: contain;"   src="./img/Perfil_profecional_3.jpeg" class="d-block w-100" alt="...">
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
                   <div class="col-8">                                        
                       <table class="table table-striped">
                           <tr>
                               <th class="rowDatosPersonales" style="border-radius: 20px 0% 0% 0%">NOMBRE: </th>
                               <td class="rowDatosPersonales" style="border-radius: 0% 20px 0% 0%">Alberto Hernández Hernández</td>
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
           <div class="col-4">
             <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
               <div class="carousel-inner">
                 <div class="carousel-item active">
                   <img height="200px" style="object-fit: contain;" src="./img/Datos_personales_1.jpeg" class="d-block w-100" alt="...">
                 </div>
                 <div class="carousel-item">
                   <img height="200px" style="object-fit: contain;" src="./img/Datos_personales_2.jpeg" class="d-block w-100" alt="...">
                 </div>
                 <div class="carousel-item">
                   <img height="200px" style="object-fit: contain;"  src="./img/Datos_personales_3.jpeg" class="d-block w-100" alt="...">
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
    <div class="row">
        <div class="col">
            <button id="datosPersonales" class="button-nav">Datos Personales</button>
        </div>
        <div class="col">
            <button id="perfilProfesional" class="button-nav">Perfil profesional</button>
        </div>
        <div class="col">
            <button id="experienciaLaboral" class="button-nav">Experiencia laboral</button>
        </div>
        <div class="col">
            <button id="formacionAcademica" class="button-nav">Formación académica</button>
        </div>
        <div class="col">
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