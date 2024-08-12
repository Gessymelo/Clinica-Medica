import React, { useEffect , useState} from 'react'
import axios from '../../api'
import { Link } from 'react-router-dom'
import {FaEdit, FaPlus, FaTrash, FaExclamationTriangle,FaCheckCircle} from 'react-icons/fa'

const PacienteList = () => {

    const [pacientes, setPacientes] = useState([])
    const [pacienteSelecionado, setPacienteSelecionado] = useState(null)
    const [modalAberto, setModalAberto] = useState(false)

    useEffect (() => {
        const buscarPacientes =() => {
            axios.get('/pacientes')
            .then(response => {
                setPacientes(response.data)
            })
            .catch(error => {
                console.error("Ocorreu um erro", error)
            })
        }
        buscarPacientes() 
    },[])

    const abrirModal = (paciente) =>{
        setPacienteSelecionado(paciente)
        setModalAberto(true)
    }
    const fechaModal = () =>{
        setModalAberto(false)
        setPacienteSelecionado(null)
    }

  return (
    <div className="container mt-5">
        <h2 className="mb-4">Lista de Pacientes</h2>
        <Link to="/add-pacientes" className="btn btn-primary mb-2">
            <FaPlus className="icon" /> Adicionar Paciente
        </Link>
        <table className="table">
            <thead>
                <tr>
                    <th>Nome:</th>
                    <th>Telefone:</th>
                    <th>Sexo:</th>
                    <th>CPF:</th>
                    <th>RG:</th>
                    <th>Plano:</th>
                </tr>
            </thead>
        
            <tbody>
                 {
                    pacientes.map(paciente => (
                        <tr key={paciente.id}>
                            <td>{paciente.nome}</td>
                            <td>{paciente.telefone}</td>
                            <td>{paciente.sexo}</td>
                            <td>{paciente.cpf}</td>
                            <td>{paciente.rg}</td>
                            <td>{paciente.plano}</td>
                            <td>
                                <Link to={`/edit-pacientes/${paciente.id}`}
                                 className="btn-sm btn-warning">
                                    <FaEdit className="icon icon-btn"/> Editar                                
                                </Link>
                                <button onClick={() => abrirModal(paciente)} className='btn btn-sm btn-danger'>
                                    <FaTrash className="icon icon-btn"/> Excluir
                                </button>
                            </td>

                        </tr>
                    ))
                }
            </tbody>
        </table>


    </div>
  )
}

export default PacienteList