import { PencilSquareIcon } from '@heroicons/react/24/outline'

const WriteButton = () => {
    return (
    <>
        <button className="cursor-pointer opacity-50 hover:opacity-70 flex text-[9.5px] font-semibold">
                <PencilSquareIcon className="size-4 mr-1"/>
                <p className='mt-0.5'>Write</p>
            </button>
    </>
    )
}

export default WriteButton
