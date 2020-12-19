import React, { FC } from 'react'
import { Grid } from 'semantic-ui-react'
import { sampleData } from '../../api/sampleData'
import EventDetailedChat from './details/EventDetailedChat'
import EventDetailedHeader from './details/EventDetailedHeader'
import EventDetailedInfo from './details/EventDetailedInfo'
import EventDetailSideBar from './details/EventDetailSideBar'

interface IProp{
 match:any
}
const EventDetailedPage:FC<IProp> = ({match}) => {
    const event = sampleData.find(x=>x.id===match.params.id);
    
    return (
        <>
        {event && (
             <Grid>
           <Grid.Column width={10}>
               <EventDetailedHeader event={event}/>
               <EventDetailedInfo event={event}/>
               <EventDetailedChat/>
           </Grid.Column>
           <Grid.Column width={6}>
               <EventDetailSideBar event={event}/>
           </Grid.Column>
       </Grid>
        )}
      </>
    )
}

export default EventDetailedPage
