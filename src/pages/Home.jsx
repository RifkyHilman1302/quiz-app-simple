import { useState } from 'react'
import data from '../data/data.json'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../providers/userContext'

export default function Home() {
    const [number, setNumber] = useState(0)
    const [answer, setAnswer] = useState('')
    const [nilai, setNilai] = useState(0)
    const navigate = useNavigate()
    const {username} = useUser()

    function handleNext() {
        setNumber(number + 1)
        if (answer === data.quiz[number].correctAnswer) {
            setNilai(nilai + 10)
        }
    }

    function answerClick(items) {
        setAnswer(items)
    }

    function finishClick() {
        navigate('/hasil', { state : {nilai} })
    }
    console.log(username)

    return (
        <div className='w-full h-screen bg-bgColor100 flex items-center justify-center relative'>
            <div className='absolute top-10 text-white font-inknut'>
                <p>
                    Hello {username}, Welcome App Quiz
                </p>
            </div>
            <div className='content h-max min-h-96 bg-bgColor200 flex flex-col items-center'>
                <p className='p-8 text-3xl font-inknut text-white'>Quiz App</p>
                <div className='w-10/12 h-max font-poppins text-white flex flex-col gap-6 '>
                    <p >
                       {data.quiz[number].question}
                    </p>
                    <div className='w-full h-max flex flex-col gap-3 mb-2'>
                        {data.quiz[number].options.map((items, index) => (
                            <div 
                                key={index}
                                onClick={() => {answerClick(items)}}
                                className={`w-full h-10 border border-primary flex items-center gap-1 ${answer === items ? 'bg-primary2' : 'hover:bg-primary2'} cursor-pointer rounded`} >
                                <p className='p-2  '>
                                    
                                </p>
                                <p>
                                    {items}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className='w-full h-12 mb-5  flex items-center justify-end'>
                        {number === data.quiz.length -1 ? (
                            <button 
                                onClick={finishClick}
                                className='border-primary border hover:bg-primary2 h-10 w-20'>
                                Selesai
                            </button>
                        ) : (
                            <button 
                                onClick={handleNext}
                                className='border-primary border hover:bg-primary2 h-10 w-20'>
                                NEXT
                            </button>
                        )}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
