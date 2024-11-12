import Input from './Input.jsx';
import {useRef} from 'react';
import Modal from './Modal.jsx';

export default function NewProject({onAdd , onCancel}){
    
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const date = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = date.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDate.trim() === ''){
          modal.current.open()
            return;
        }

        //validatiom....
        onAdd({
            title :enteredTitle,
            description :enteredDescription ,
            date : enteredDate
        });
    }
    return(
        <>
        <Modal ref={modal} buttonCaption="Close">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-400 mb-4 ">Opps ... Look like you forget to enter any value..</p>
            <p className="text-stone-400 mb-4 ">Please make sure yu add a valid input..</p>
        </Modal>
        <div className = "w-[35rem] mt-8">
            <menu className = "flex items-center justify-end gap-4 my-4">
                <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button  onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>

            </menu>
            <div>
                    <Input ref={title} type="text" label="title"/>
                    <Input ref={description} label="description" textarea={true}/>
                    <Input ref={date} type="date" label="Due Date"/>
            </div>
        </div>
        </>
    );
}