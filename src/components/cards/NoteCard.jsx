import React from 'react';
import {MdCreate, MdDelete, MdOutlinePushPin} from 'react-icons/md';

const NoteCard = ({title,date,content,tags,isPinned,onEdit,onDelete,onPinNote}) => {
  return (
    <div className='bg-white border rounded p-4 hover:shadow-xl transition-all ease-in-out'>
        <div className='flex items-center justify-between'>
            <div>
                <h6 className='text-sm font-medium'>{title}</h6>
                <span className='text-xs text-slate-400'>{date}</span>
            </div>
            <MdOutlinePushPin className={`icon-btn ${isPinned ? 'text-primary':'text-slate-400'}`} onClick={onPinNote} />
        </div>
        <p>{content?.slice(0,60)}</p>
        
        <div className='flex items-center justify-between'>
            <div className='text-xs text-slate-400' >{tags}</div>
            <div className='flex items-center gap-2'>
                <MdCreate
                    className='icon-btn  hover:text-green-500'
                    onClick={onEdit}
                />
                <MdDelete
                    className='icon-btn hover:text-red-600'
                    onClick={onDelete}
                />
            </div>
        </div>
    </div>
  )
}

export default NoteCard