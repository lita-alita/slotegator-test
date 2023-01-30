import './info-mode.scss'
import {ReactComponent as LinkImage} from '../../accets/icons/link.svg'


type InfoModeProps = {
    country: string
}

export default function InfoMode (props: InfoModeProps) {
    const status = {
        illegal: 'Illegal',
        regulated: 'Regulated, local licensing',
        prohibited: 'Prohibited',
        legal: 'Legal, monopoly'
    }
    return (
        <div>
            <div className='infoBlock'>
                <span> 
                    <p>Casino</p>
                    <p className='illegal'>{status.illegal}</p>
                </span>
                <p className='description'>De facto private monopoly</p>
            </div>
            <div className='infoBlock'>
                <span> 
                    <p>Online casino</p>
                    <p className='regulated'>{status.regulated}</p>
                </span>
                <p className='description'>Private monopoly</p>
            </div>
            <div className='infoBlock'>
                <span> 
                    <p>Betting</p>
                    <p className='prohibited'>{status.prohibited}</p>
                </span>
                <p className='description'>Regulated at local level</p>
            </div>
            <div className='infoBlock'>
                <span> 
                    <p>Online betting</p>
                    <p className='legal'>{status.legal}</p>
                </span>
                <p className='description'>Regulated at local level</p>
            </div>
            <div className='infoBlock'>
                <span> 
                    <p>Learn more:</p>
                </span>
                <p className='description link'>The Island of Love loves betting: online gambling in Cyprus in 2022</p>
            </div>
        </div>
    )
}