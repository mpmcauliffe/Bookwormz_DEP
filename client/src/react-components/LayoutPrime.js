import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import {
    ActionBar,
    Library,
    Navbar,
    Sidebar,
} from './layout'
import { carousel, frame } from '../assets/themes/styles'
import { books, events, members } from '../assets/store/store'
import { truncate } from '../assets/javascript'


class LayoutPrime extends Component {
    state = {
        value: 0,
        top: true,
    }
    handleValueChange = (e, value) => 
        this.setState({ value })

    render() { 
        const { top, value } = this.state 
        return (
            <div>
                <Navbar top={top} />
                <Grid container>
                    <Grid item md={3} sm={12}>
                        <Sidebar 
                            members={members}
                        />
                    </Grid>
                    <Grid item md={9} sm={12}>
                        <Grid item md={12}>
                            <ActionBar
                                handleValueChange={this.handleValueChange} 
                                value={value}
                                events={events}
                            />
                        </Grid>
                        <Grid item md={12}>
                            <Library />
                        </Grid>
                    </Grid>
                </Grid>
                <Navbar />        
            </div>
        )
    }
}

export default LayoutPrime    
