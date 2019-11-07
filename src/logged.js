import React from 'react'

function logged(Comp) {
    class HoCComp extends React.Component{
        componentDidMount(){
            console.log('HOC - mounted')
        }

        render(){
            return(
                <Comp {...this.props} />
            )
        }
    }

    return HoCComp
}

export default logged