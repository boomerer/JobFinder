

import React from 'react'
import PropTypes from 'prop-types'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import {withRouter} from 'react-router-dom'



@withRouter
class UserCard extends React.Component{
    static propTypes={
        userlist:PropTypes.array.isRequired
    }

    handleClick(v){
        this.props.history.push(`/chat/${v._id}`)
    }

    render(){
        const Header=Card.Header
        const Body=Card.Body
        return(
          <WingBlank>
            {this.props.userlist.map(v=>(
                v.avatar?(
                <Card 
                    key={v._id}
                    onClick={()=>this.handleClick(v)}
                >
                    <Header 
                        title={v.user} 
                        thumb={require(`../imgs/${v.avatar}.jpg`)}
                        extra={<span>{v.title}</span>}
                    >
                    </Header>

                    <Body>
                        {v.type=='boss'?<div>公司：{v.company}</div>:null}<WhiteSpace/>
                        <div>要求：{v.desc.split('\n').map(d=>(
                                    <div key={d}>{d}</div>
                                  ))}
                        </div><WhiteSpace/>
                        {v.type=='boss'?<div>薪资：{v.money}</div>:null}
                    </Body>
                </Card>):null
              ))}
            </WingBlank>
        )
    }
}


export default UserCard