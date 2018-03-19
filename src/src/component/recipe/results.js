import React from 'react'
import {Card,WhiteSpace} from 'antd-mobile'
import {Link,withRouter} from 'react-router-dom'
class Results extends React.Component {
  render(){
    const {results} = this.props
    return (
      <div style={{padding:"10px"}}>
        {
          results.map((result,i)=>{
           return <div><WhiteSpace size="lg" />
           <Card>
            <Card.Header
              key={i}
              title={result.title}
              thumb={result.img}
            />
            <Card.Body>
              <div style={{color:"rgba(0,0,0,0.5)"}}>
                {result.content}
                <Link to={result.link} style={{color:"rgba(0,0,0,0.9)"}}>更多</Link>
              </div>
            </Card.Body>
            <Card.Footer 
              content={result.footer}
            />
          </Card>
          </div>
          })
        }
      </div>
    )
  }
}

export default withRouter(Results)