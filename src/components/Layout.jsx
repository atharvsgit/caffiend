import { useState } from "react"
import Authentication from "./Authentication"
import Modal from "./Modal"
import { useAuth } from "../../context/AuthContext"

export default function Layout(props){

    const [ showModal, setShowModal ] = useState(false)

    const { children } = props

    const { globalUser, logout } = useAuth()

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND</h1>
                <p>For Coffee Insatiates</p>
            </div>
            {globalUser ? (<button onClick={logout}>
                <p>Logout</p>
            </button>
            ) : (<button onClick={() => {
                setShowModal(true)
            }}>
                <p>Sign up for free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>)}
        </header>
    )
    const footer = (
        <footer>
            <p><span className="text-gradient">Caffiend</span> was made by <a target="_blank" href="https://github.com/83atharv">Atharv</a></p>
        </footer>
    )
    
    return(
        <>
            {showModal && (
                <Modal handleCloseModal={() => {
                    setShowModal(false)
                }}>
                    <Authentication handleCloseModal={() => {
                                setShowModal(false)
                            }}/>
                </Modal>
            )}
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}