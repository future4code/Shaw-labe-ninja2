import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

const API_TOKEN = "a4fb1dfb-25b2-443e-b040-55225dae7786";
const BASE_URL = "https://labeninjas.herokuapp.com";
const header =
{
    headers: {
        Authorization: API_TOKEN,
    }

}

// LISTA DE REQUISIÇÕES
// (GET) GetAllJobs
// (GET) GetJobByID
// (POST) CreateJob
// (DELETE) DeleteJob 
// (POST) UpdateJob



//.....::::::::::::(GET) GetAllJobs (saveJobs):::::::::::::.......
//=====================================================
// saveJobs = (Arrow function que vai receber a lista de jobs para salvar no state)

// exemplo:
// 
// saveJobs = (jobsList) => {

//     this.setState({jobs: jobsList})

// }

// chamar a função no seu componente: 

//  componentDidMount() 
// {
// 	getAllJobs(this.saveJobs)
// }
//-----------------------------------------------------------------
export const getAllJobs = async (saveJobs, setTrue) => {
    setTrue()
    try {
        const response = await axios.get(`${BASE_URL}/jobs`, header)
        saveJobs(response.data.jobs)
    } catch (err) {
        toast.error(`${err.response.data.message}`)
    }
}
//=================================================================






//.....::::::::::::(GET) getJobById (id, saveJob):::::::::::::.......
//----------------------------------------------------------------------
// Recebe dois inputs: 
//   id: id do job a ser deletado
//    saveJob: arrow function que vai ser chamada para guardar o job no state

// exemplo:
// 
// saveJob = (job) => {
//     this.setState({job: job}    
// }

// chamar a função no seu componente: 
// getJobById(job.id, saveJob)
//-------------------------------------------------------------------------
export const getJobById = (id, saveJob) => {
    
    axios.get(`${BASE_URL}/jobs/${id}`, header)
        .then((response) => {
            saveJob(response.data);
        })
        .catch((err) => console.log(`${err.response.data.message}`))
}
//=====================================================================





//.....:::::::::::::::::::::::::(POST) CreateJob:::::::::::::............
//-------------------------------------------------------------------------
// AO SER CHAMADO RECEBER PARÂMETROS: 
// TITLE (string)
// DESCRIPTION (string)
// PRICE (numero)
// PAYMENTOPTIONS (array de string)
// DUEDATE (string em formato de data)
//--------------------------------------------------------------------------
export const createJob = (title, description, price, paymentOptions, dueDate, image, saveData, setTrue) => {
    console.log(image,title,`${title},${image}`)
    let body = {

        title: `${title}`,
        description: `${description}<>${image}`,
        price: price,
        paymentMethods: paymentOptions,
        dueDate: dueDate
    }

    axios.post(`${BASE_URL}/jobs`, body, header)
        .then((response) => {
            getAllJobs(saveData, setTrue)
            toast.success(" Job foi criado com sucesso")
    }).catch ( (err) => toast.error(`${err.response.data.message}`))

}
//===========================================================================





//.....::::::::::::(DELETE) DeleteJob:::::::::::::.......
//--------------------------------------------------------------------
// AO SER CHAMADO RECEBER PARÂMETROS: 
// id : id do job     
//--------------------------------------------------------------------
export const deleteJob = (id) => {

    axios.delete(`${BASE_URL}/jobs/${id}`, header)
        .then((response) => {
            toast.success(" Job deletado com sucesso")
        }).catch((err) => toast.error(`${err.response.data.message}`))
}

//==================================================================






//.....::::::::::::(POST) UpdateJob:::::::::::::.......
//--------------------------------------------------------------------
// AO SER CHAMADO RECEBER PARÂMETROS: 
// id : id do job     
//--------------------------------------------------------------------
export const updateJob = async (id, jobStatus, saveData, setTrue) => {

    let body = {
        "taken": jobStatus
    }
    try {
        const response = await axios.post(`${BASE_URL}/jobs/${id}`, body, header)
        getAllJobs(saveData, setTrue)
    } catch (err) {
        toast.error(`${err.response.data.message}`)
    }
}

//=======================================================================