import { Col, Row } from 'antd'
import React from 'react'


const items = [
    {
        key: '1',
        icon: <i className="fas fa-chart-pie"></i>,
        title: 'High Performance',
        content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
        key: '2',
        icon: <i className="fas fa-desktop"></i>,
        title: 'Flat Design',
        content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
        key: '3',
        icon: <i className="fas fa-database"></i>,
        title: 'Simplified Workflow',
        content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
]


function About() {
    return (
        <div className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="contentHolder">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis odio accusamus officiis animi dolorum id ipsam perferendis ea voluptatum dignissimos. Totam itaque voluptatum sed obcaecati excepturi similique quasi eos, ullam incidunt minima ut cum odio aperiam dolorum quia doloribus nam, maiores sapiente libero! Consequatur impedit rem sint vel neque inventore, sit culpa fuga ducimus corporis asperiores alias, id repellat possimus aliquid adipisci esse? Earum obcaecati, repudiandae repellendus ipsum dicta mollitia, ab nobis dolore commodi eaque assumenda rerum exercitationem veniam, molestiae repellat blanditiis odit officiis saepe sint nisi iste similique labore minima. Laborum harum quaerat, pariatur fuga animi corrupti dolor soluta.</p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col span={8} key={item.key}>
                                <div className="content">
                                    <div className="icon">
                                        {item.icon}
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default About
