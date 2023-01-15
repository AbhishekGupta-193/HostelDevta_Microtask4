import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/MT1.css'
export const MT2 = () => {
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
        <div className='mt1_sidebar' style={{ overflowY: 'scroll' }}>
          <a style={{ fontWeight: "bold" }} href="#one">INTRODUCTION</a>
          <a style={{ fontWeight: "bold" }} href="#two">SOURCE CODE</a>
          <a style={{ fontWeight: "bold" }} href="#threee">AUTHENTICATION API</a>

          <div className="endpoints">
            <a style={{ fontWeight: "bold" }} href="#three">API ENDPOINTS</a>
            <a href="#thre">Creating New User Credentials (POST)</a>
            <a href="#four">Login Using Credentials (POST)</a>
            <a href="#five">Delete User Credentials (POST)</a>
            <a href="#six">Update User Credentials (PUT)</a>


          </div>
          <a style={{ fontWeight: "bold" }} href="#threee1">VISITOR COUNT API</a>

          <div className="endpoints">
            <a style={{ fontWeight: "bold" }} href="#three1">API ENDPOINTS</a>
            <a href="#three2">Add Count of Visitors Continuously</a>
            <a href="#four1">Get the Count of Visitors</a>
            <a href="#five1">Reset the Count of Visitors</a>

          </div>
        </div>
        <div className='h-100 mt1_wrapper' style={{ overflowY: 'scroll' }}>

          <article id='one'>
            <div class="heading">
              <h2>HostelDevta_MicroTask 2</h2>
            </div>
            <br />
            <div>
              <h1><b>Functionality of this API</b></h1>
              <br />
              <ul>
                <li>Error Handling</li>
                <br />
                <li>Authentication</li>
                <br />

                <li>Visitor Count</li>
              </ul>
            </div>

          </article>
          <article id='two'>
            <div class="heading">
              <h2>Source_Code</h2>
            </div>
            <br />
            <div>
              <h1>Deployed Link : <a target="_blank" href="https://df42ds.deta.dev/">https://df42ds.deta.dev/</a></h1>
              <br />
              <h1>Github Repository Link : <a target="_blank" href="https://github.com/AbhishekGupta-193/HostelDevta_Microtask2">https://github.com/AbhishekGupta-193/HostelDevta_Microtask2</a></h1>
            </div>.
          </article>
          <article id='threee'>
            <div class="headingApi">
              <h2><b>AUTHENTICATION API</b></h2>
            </div>
          </article>
          <article id='three'>
            <div class="heading">
              <h2>API_ENDPOINTS</h2>
              <article id='thre'>
                <h3>Creating New User Credentials</h3>
                <br />
                <h3>Endpoint :'/createUser'</h3>
                <br />
                <h3>Body Paramteres (in JSON) </h3>
                <br />
                <ol>
                  <li>username</li>
                  <br />
                  <li>email</li>
                  <br />
                  <li>password</li>
                </ol>
              </article>
              <article id='four'>
                <h3>Login Using Credentials</h3>

                <br />
                <h3>Endpoint :'/loginUser'</h3>
                <br />
                <h3>Body Paramteres (in JSON) </h3>
                <br />
                <ol>
                  <li>email</li>
                  <br />

                  <li>password</li>

                </ol>
              </article>
              <article id='five'>
                <h3>Delete User Credentials</h3>
                <br />
                <h3>Endpoint :'/deleteUser'</h3>
                <br />
                <h3>Header Parameter </h3>
                <br />
                <ul>
                  <li>auth-token</li>

                </ul>
              </article>
              <article id='six'>
                <h3>Update User Credentials</h3>
                <br />
                <h3>Endpoint :'/updateUser'</h3>
                <br />
                <h3>Body Paramteres (in JSON) </h3>
                <br />
                <ol>
                  <li>username</li>
                  <br />

                  <li>email</li>
                  <br />

                  <li>password</li>

                </ol>
              </article>
              <article id='threee1'>
                <div class="headingApi">
                  <h2>VISITOR COUNT API</h2>
                </div>
              </article>
              <article id='three1'>
                <div class="heading">
                  <h2>API_ENDPOINTS</h2>
                  <article id='three2'>
                    <h3>Add Count of Visitors Continuously</h3>
                    <br />
                    <h3>Endpoint :'/countVisitors'</h3>
                    <br />
                    <h3>Method :POST</h3>
                
          
                  </article>
                  <article id='four1'>
                    <h3>Get the Count of Visitors</h3>

                    <br />
                    <h3>Endpoint :'/getCountData'</h3>
                    <br />
                    <h3>Method : GET</h3>
                    
                  </article>
                  <article id='five1'>
                    <h3>Reset the Count of Visitors</h3>
                    <br />
                    <h3>Endpoint :'/resetCountData'</h3>
                    <br />
                    <h3>Method : PUT </h3>
                    
                  </article>
                  
                </div>

              </article>


            </div>
          </article>
        </div>
      </div>


    </section>
  )
}
