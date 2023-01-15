import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/MT1.css'
export const MT1 = () => {
    const navigate = useNavigate();
    const backHandler = () => {
        navigate('/')
    }
    return (
        <section >
            <button className='backbtn' onClick={backHandler}>
                back
            </button>
            <div className='grid'>
                <div className='mt1_sidebar' style={{overflowY:'scroll'}}>
                        <a style={{fontWeight:"bold"}} href="#one">INTRODUCTION</a>
                        <a style={{fontWeight:"bold"}} href="#two">SOURCE CODE</a>
                        <div className="endpoints">
                            <a style={{fontWeight:"bold"}} href="#threee">API ENDPOINTS</a>
                            <a href="#three">POST Address Info</a>
                            <a href="#four">GET Address Info</a>
                            <a href="#five">PUT Address Info</a>
                            <a href="#six">DELETE Address Info</a>
                        </div>
                </div>
                <div className='h-100 mt1_wrapper' style={{overflowY:'scroll'}}>
                   
                        <article id='one'>
                            <div class="heading">
                                <h2>HostelDevta_MicroTask 1</h2>
                            </div>
                            <br />
                            <div>
                                <h1><b>Functionality of this API</b></h1>
                                <br/>

                                <ol>
                                    <li>Store Address Info</li>
                                    <br/>
                                    <li>Get Address Info</li>
                                    <br/>
                                    <li>Update Address Info</li>
                                    <br/>
                                    
                                    <li>Delete Address Info</li>
                                </ol>
                            </div>


                        </article>
                        <article id='two'>
                            <div class="heading">
                                <h2>Source_Code</h2>
                            </div>
                            <br />
                            <div>
                                <h1>Deployed Link : <a target="_blank" href="https://ad1yac.deta.dev/">https://ad1yac.deta.dev/</a></h1>
                                <br />
                                <h1>Github Repository Link : <a target="_blank" href="https://github.com/AbhishekGupta-193/HostelDevta_Microtask1.git">https://github.com/AbhishekGupta-193/HostelDevta_Microtask1.git</a></h1>
                            </div>.
                        </article>
                        <article id='threee'>
                        <div class="heading">
                                <h2>API_ENDPOINTS</h2>
                                <article id='three'>
                                <h3>POST Address Info</h3>
                                <br/>
                                <h3>Endpoint :'/address'</h3>
                                <br/>
                                <h3>Body Paramteres (in JSON) </h3>
                                <br/>
                                <ol>
                                    <li>dist</li>
                                <br/>
                                    <li>city</li>
                                <br/>
                                    <li>pin</li>
                                </ol>
                        </article>
                        <article id='four'>
                                <h3>GET Address Info</h3>
                                <br/>
                                <h3>Endpoint :'/info'</h3>
                                <br/>
                                <h3>Body Paramteres (in JSON) </h3>
                                <br/>
                                <ul>
                                    <li>None</li>
                                
                                </ul>
                        </article>
                        <article id='five'>
                                <h3>UPDATE Address Info for a particular Pin (i.e. data)</h3>
                                <br/>
                                <h3>Endpoint :'/update/:data'</h3>
                                <br/>
                                <h3>Body Paramteres (in JSON) </h3>
                                <br/>
                                <ol>
                                    <li>dist</li>
                                <br/>
                                    <li>city</li>
                                <br/>
                                    <li>pin</li>
                                <br/>

                                
                                </ol>
                        </article>
                        <article id='six'>
                                <h3>DELETE Address Info for a particular Pin (i.e. data)</h3>
                                <br/>
                                <h3>Endpoint :'/deleteinfo/:data'</h3>
                                <br/>
                                <h3>Body Paramteres (in JSON) </h3>
                                <br/>
                                <ul>
                                    <li>None</li>
                                
                                </ul>
                        </article>
                            </div>

                        </article>
                        
              
                </div>
            </div>


        </section>
    )
}
