import { Button } from '@chakra-ui/react';
import './YearBtn.css'

const YearBtn = () => {
    return (
        <div>
            <Button className='year-btn' isFullWidth={true} size='lg'>Year 1</Button>
            <Button className='year-btn' isFullWidth={true} size='lg'>Year 2</Button>
            <Button className='year-btn' isFullWidth={true} size='lg'>Year 3</Button>
            <Button className='year-btn' isFullWidth={true} size='lg'>Year 4</Button>
            <Button className='year-btn' isFullWidth={true} size='lg'>Electives</Button>
        </div>
    )
}

export default YearBtn;