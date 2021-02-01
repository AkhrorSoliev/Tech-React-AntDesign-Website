import React, { useState } from 'react'
import { Modal, Button } from 'antd'



function AppWorks() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div id='works' className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How It Works ?</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque necessitatibus cum harum inventore reiciendis repellat incidunt magni voluptatum suscipit ea dolores aspernatur tempora ut eveniet dicta quisquam, totam corrupti temporibus!</p>
                </div>
                <div>
                    <div className="contentHolder">
                        <Button type="primary" onClick={showModal}>
                            <i className="fas fa-play"></i>
                        </Button>
                    </div>
                    <Modal footer={null} title="Tutorials" visible={isModalVisible} onCancel={handleCancel}>
                        <iframe title="Woocommerce Tutorial" width="100%" height="350" src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"></iframe>
                    </Modal>
                </div>
            </div>
        </div>
    )
}



export default AppWorks;