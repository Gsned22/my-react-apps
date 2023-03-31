import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = (
        <div>
            <Button primary onClick={handleClose}>The boy who lived!</Button>
        </div>
    )

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Harry Potter Harry Potter Harry Potter
            </p>
        </Modal>
    )

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel enim vel ante varius tempor at quis massa. In eu auctor ex, a placerat purus. Ut elementum pharetra accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec in turpis blandit, mattis risus nec, sodales arcu. Duis sollicitudin ipsum lectus, id aliquam neque lacinia non. Aliquam elementum nisl accumsan nisl feugiat, vitae placerat lacus sollicitudin. Morbi a augue sed sem egestas posuere at eu neque. Nam nec scelerisque ligula, et hendrerit enim. Sed eget odio in magna elementum imperdiet. 
            </p>
        </div>
    );
}

export default ModalPage;