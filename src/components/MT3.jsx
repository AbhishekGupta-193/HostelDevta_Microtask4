import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/MT1.css'
export const MT3 = () => {
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
                   
                        <a style={{ fontWeight: "bold" }}href="#one">INTRODUCTION</a>
                        <a style={{ fontWeight: "bold" }}href="#two">SOURCE CODE</a>
                        <a style={{ fontWeight: "bold" }} href="#threee">API ENDPOINTS</a>
                        <a href="#three">Get Address Location</a>  
                </div>
                <div className='h-100 mt1_wrapper' style={{overflowY:'scroll'}}>
                   
                        <article id='one'>
                            <div class="heading">
                                <h2>HostelDevta_MicroTask 3</h2>
                            </div>
                            <br />
                            <div>
                                <h1><u><b>Functionality of this API</b></u> :For a particular given latitude and longitude data ,we can find the location address using this microservice</h1>
                            </div>

                        </article>
                        <article id='two'>
                            <div class="heading">
                                <h2>Source_Code</h2>
                            </div>
                            <br />
                            <div>
                                <h1><u>Deployed Link</u> : <a target="_blank" href="https://jfs9bq.deta.dev/">https://jfs9bq.deta.dev/</a></h1>
                                <br />
                                <h1><u>Github Repository Link</u> : <a target="_blank" href="https://github.com/AbhishekGupta-193/HostelDevta_Microtask3.git">https://github.com/AbhishekGupta-193/HostelDevta_Microtask3.git</a></h1>
                            </div>.
                        </article>
                        <article id='threee'>
                        <div class="heading">
                                <h2>API_ENDPOINTS</h2>
                                <article id='three'>
                                <h3>GET Location Address</h3>
                                <br/>
                                <h3>Endpoint :'/getLocation/:lat/:lon'</h3>
                                

                        </article>
        
                            </div>

                        </article>
                        
              
                </div>
            </div>


        </section>
    )
}
