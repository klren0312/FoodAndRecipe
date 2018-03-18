import React from 'react'
import { Accordion, List } from 'antd-mobile'
import './index.css'
class ZCDCAccordion extends React.Component {

  onChange = (key) => {
    
  }
  render() {
    const { details } = this.props
    return (
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Accordion {...this.props} accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
          {
            details.map((detail,i) =>{
              // console.log(detail)
              return <Accordion.Panel key={i} header={detail.title}>
                <List className="my-list">
                  {/* <List.Item>{detail.info.name}</List.Item> */}
                  {
                    detail.info.map((list,i)=>{
                      return <List.Item key={i} className="my-list-child">
                        {list.name}
                        <div className="foodDetail">
                          <div>{list.price}元</div>
                          <div>{list.place}</div>
                        </div> 
                      </List.Item>
                    })
                  }
                </List>
              </Accordion.Panel>
            })
          }
        </Accordion>
      </div>
    );
  }
}

export default ZCDCAccordion