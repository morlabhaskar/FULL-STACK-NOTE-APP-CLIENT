import React, { useState } from 'react'
import { MdAdd,MdClose } from 'react-icons/md'

const TagInput = ({tags,setTags}) => {
    const [inputValue,setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const addNewTag = () => {
        if(inputValue.trim() !== "") {
            setTags([...tags,inputValue.trim()])
            setInputValue("")
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addNewTag();
        }
    }
    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter((tag)=>tag !== tagToRemove))
    }

  return (
    <div>
        {tags?.length > 0 && (
            <div className='flex items-center gap-2 flex-wrap mt-2'>
                {tags.map((tag,index) => (
                    <span key={index} className='border flex items-center justify-between gap-1 rounded-md px-2 border-green-400 text-sm text-slate-500'>
                         # {tag}
                        <button 
                            onClick={()=>{handleRemoveTag(tag)}}
                        >
                            <MdClose className='hover:text-red-600'/>
                        </button>
                    </span>
                ))}
            </div>
        )}
        <div className='flex items-center gap-4 mt-3'>
            <input 
                type="text"
                value={inputValue}
                className='text-sm bg-transparent border px-3 py-2 rounded outline-none' 
                placeholder='Add Tags' 
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <button 
                className='w-8 h-8 border border-blue-600 rounded-md flex items-center justify-center bg-transparent hover:bg-blue-500 '
                onClick={()=>{
                    addNewTag();
                }}
            >
                <MdAdd className='text-2xl text-blue-700 hover:text-white' />
            </button>
        </div>
    </div>
  )
}

export default TagInput