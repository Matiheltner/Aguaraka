import {useState } from 'react'; 
import Modal from "react-bootstrap/Modal";
import { getFirestore } from "../../services/getFirestore";
import { useCarritoContext } from '../../components/Cart/CartContext';

const ModalWindow = (props) => {
    
const { cartList } = useCarritoContext();
    
const [name, setName] = useState("");
const [dni, setDni] = useState("");
const [postcode, setPostcode] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [emailValidation, setEmailValidation] = useState(""); 
const [idOrder, setIdOrder] = useState(null); 
   
    const createOrder = (e) => {
    
        e.preventDefault()

        if(email !== emailValidation)
            alert("Los email no coinciden!");
        else{
            const buyer = { name, phone, email, dni, postcode};
            const db = getFirestore();
            const ordersCollection = db.collection("orders");

            let order = {};
            order.buyer = {buyer};
            order.items = cartList.map((cartItem) => {
                const id = cartItem.id;
                const prodName = cartItem.name;
                return {id, prodName}
            })

            ordersCollection.add(order)
            .then((IdDocument) => {
                setIdOrder(IdDocument.id)
            })
        }
    }

    return (

        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Ingrese los datos para generar su orden de compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <fieldset>
                    <form onSubmit={createOrder}  className="d-flex flex-column align-items-center">
                        <label>Nombre:</label>
                        <input
                            value={name}
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            className="mb-3"
                        />
                       <label>Dni:</label>
                        <input
                            value={dni}
                            type="number"
                            onChange={(e) => setDni(e.target.value)}
                            className="mb-3"
                        />
                       <label>Codigo Postal:</label>
                        <input
                            value={postcode}
                            type="text"
                            onChange={(e) => setPostcode(e.target.value)}
                            className="mb-3"
                        />
                        <label>Email:</label>
                        <input
                            value={email}
                            type="email"
                             onChange={(e) => setEmail(e.target.value)}
                             className="mb-3"
                        />
                        <label>Repite tu Email:</label>
                        <input
                            type="email"
                             onChange={(e) => setEmailValidation(e.target.value)}
                             className="mb-3"
                        />
                        <label>Telefono:</label>
                        <input
                            value={phone}
                            type="tel"
                            onChange={(e) => setPhone(e.target.value)}
                            className="mb-3"
                        />
                        <button variant="outline-info" type="submit" className="mt-auto" >
                            Comprar
                         </button>
                    </form>
                </fieldset>
            </Modal.Body>
            <small className="m-auto my-2">{idOrder ? ` Su orden ID: ${idOrder}` : null}</small>
        </Modal>
    );
}

export default ModalWindow;