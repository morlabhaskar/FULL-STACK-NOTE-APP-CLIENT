import React, { useState } from 'react'
import TagInput from '../components/input/TagInput'
import { MdClose } from 'react-icons/md'

const AddEditNote = ({onClose,noteData,type}) => {
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const [tags,setTags] = useState([])

    const [error,SetError] = useState("")

    const addNewNote = () => {
        
    }
    const editNote = () => {

    }

    const handleAddNote = () => {
        if(!title) {
            SetError("Please Enter the Title");
            return;
        }
        if(!content) {
            SetError("Please Enter the Content");
            return;
        }
        SetError("")

        if(type === "edit"){
            editNote();
        }
        else {
            addNewNote();
        }
    }
  return (
    <div className='relative'>
        <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-8 -right-4 border border-[2px] hover:bg-slate-300 ' onClick={onClose}>
            <MdClose className='text-xl text-slate-900'/>
        </button>
        <div className='flex flex-col gap-2 mt-4'>
            <label className="input-label">TITLE</label>
            <input 
                type="text"
                className='text-sm bg-transparent border px-3 py-2 rounded outline-none'
                placeholder='Title' 
                value={title}
                onChange={({target})=>setTitle(target.value)}
            />
        </div>
        <div className='flex flex-col gap-2 mt-3'>
            <label className="input-label">CONTENT</label>
            <textarea 
                type="text"
                className='text-sm bg-transparent border px-3 py-2 rounded outline-none'
                placeholder='Content' 
                rows={4}
                value={content}
                onChange={({target})=>setContent(target.value)}
            />
        </div>
        <div className='mt-3'>
            <label className='input-label'>TAGS</label>
            <TagInput tags={tags} setTags={setTags}/>
        </div>
        {error && <p className='text-sm text-red-600 pt-3'>{error}</p>}
        <button className='btn-primary font-medium mt-5 p-3' onClick={handleAddNote}>ADD</button>
    </div>
  )
}

export default AddEditNote