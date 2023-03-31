import Accordion from "../components/Accordion";

function AccordionPage(){
    const items = [
        {
            id: 1,
            label: 'Label 1',
            content: 'content 1'
        },
        {
            id: 2,
            label: 'label 2',
            content: 'content 2'
        },
        {
            id: 3,
            label: 'label 3',
            content: 'content 3'
        }
    ]

    return (
        <Accordion items = {items}/>
    )
}

export default AccordionPage;