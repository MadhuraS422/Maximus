/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className='main'>
            <div className='nav'>
                <p>Maximus</p>
                <img src={assets.user_icon} alt='user_icon' />
            </div>
            <div className='main-container'>

                {!showResult
                    ? <>
                        <div className='greet'>
                            <p><span>I am Maximus.</span></p>
                            <p>How Can I Help You...............</p>
                        </div>
                        <div className='cards'>
                            <div className='card'>
                                <p>Suggest Beautiful Places For Sunday Trip</p>
                                <img src={assets.compass_icon} alt='compass_icon' />
                            </div>
                            <div className='card'>
                                <p>Suggest Eassay on Sports</p>
                                <img src={assets.bulb_icon} alt='compass_icon' />
                            </div>
                            <div className='card'>
                                <p>Suggest Image for Space</p>
                                <img src={assets.message_icon} alt='compass_icon' />
                            </div>
                            <div className='card'>
                                <p>Suggest Code for Chatbot</p>
                                <img src={assets.code_icon} alt='compass_icon' />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className='result-title'>
                            <img src={assets.user_icon} alt='' />
                            <p className='recent-prompt'>{recentPrompt}</p>
                        </div>
                        <div className='result-data'>
                            <img src={assets.gemini_icon} alt='' />
                            {loading
                                ?
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                :
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }
                <div className='main-bottom'>
                    <div className='search-box'>
                        <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Enter your Prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt='gallery_icon' />
                            <img src={assets.mic_icon} alt='mic_icon' />
                            {input ? <img onMouseEnter={() => onSent()} onClick={() => onSent()} src={assets.send_icon} alt='send_icon' />
                                : null}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Maximus Is a Newly Trained Bot to help With your Queries, Sometimes It can get Wrong with your Prompt Answering.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
