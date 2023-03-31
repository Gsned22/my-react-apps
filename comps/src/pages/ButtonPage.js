import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase, GoAlert, GoTrashcan} from 'react-icons/go'

function ButtonPage() {
    const handleClick = () => {
        alert("Nice Click!")
    }

    return (
        <div>
            <div>
                <Button primary className='mb-5' onClick={handleClick}>
                    <GoBell />
                    Notifications
                </Button>
            </div>
            <div>
                <Button secondary outline className='mb-5' onClick={handleClick}>
                    <GoCloudDownload />
                    Download
                </Button>
            </div>
            <div>
                <Button success rounded className='mb-5' onClick={handleClick}>
                    <GoDatabase />
                    Buy
                </Button>
            </div>
            <div>
                <Button warning className='mb-5' onClick={handleClick}>
                    <GoAlert />
                    Warning
                </Button>
            </div>
            <div>
                <Button danger rounded outline className='mb-5' onClick={handleClick}>
                    <GoTrashcan/>
                    Delete
                </Button>
            </div>
        </div>

    )
}

export default ButtonPage;