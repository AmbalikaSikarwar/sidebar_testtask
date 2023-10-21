import React from "react";
import Card from "react-bootstrap/Card";
import Progressbar from "./progressbar";

function Profile() {
  return (
    <div>
      <center>
        <input type="text" placeholder="search ...." />
        <br></br>
        <br></br>

        <h3>
          <b>My Patient Profiles page</b>
        </h3>
      </center>
      <br></br>
      <br></br>

      <center>
      <div class="flex-container">
       <div> <Card style={{ width: "18rem" }}>
          <p>2d ago..</p>
          <Card.Img
            variant="top"
            src="https://20drl41vla0f18nyev1xspfn-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/image001.jpg"
          />
          <Card.Body>
            <Card.Title>KATE SMITH DAVID</Card.Title>
            <Card.Text>
              <b>Active</b>
              <Progressbar bgcolor="#99ccff" progress="45" height={20} />
            </Card.Text>
          </Card.Body>
        </Card> </div>

       <div> <Card style={{ width: "18rem" }}>
          <p>15d ago..</p>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          />
          <Card.Body>
            <Card.Title>JONNATHAN SMITH</Card.Title>
            <Card.Text>
              <b>Active</b>
              <Progressbar bgcolor="orange" progress="70" height={20} />
            </Card.Text>
          </Card.Body>
        </Card></div>

       <div> <Card style={{ width: "18rem" }}>
          <p>30d ago..</p>
          <Card.Img
            variant="top"
            src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=392"
          />
          <Card.Body>
            <Card.Title>ALEXANDER SMITH</Card.Title>
            <Card.Text>
              <b>Active</b>
              <Progressbar bgcolor="#99ff66" progress="28" height={20} />
            </Card.Text>
          </Card.Body>
        </Card></div>

        <div><Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>
              <h2> <center>+<br></br>Create New Patient Profile</center> </h2>
            </Card.Text>
          </Card.Body>
        </Card></div>
        </div>
      </center>
      <br></br>
      <h4>available patient profile</h4>
     <p> <Progressbar bgcolor="#99ff66" progress="28" height={20} />
      <button type="button" class="btn btn-info">upgrade</button> </p>
    </div>
  );
}

export default Profile;
