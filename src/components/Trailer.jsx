/* react-bootstrap modal을 이용한 youtube팝업 
https://www.npmjs.com/package/react-youtube*/
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiFillVideoCamera } from 'react-icons/ai';
import YouTube from 'react-youtube';

const Trailer = ({item}) => {
    console.log('item',item);
    const [show, setShow] = useState(false);
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
        /* {item.results[0].key} - 무조건 첫번째 유튜브를 보여줌. 
  official Trailer가 있을때와 없을때를 구분 */

    const official = item.results?.find((item)=>{
        if(item.name === "Official Trailer"){
            return item;
        }})

  return (
    <div>
        <p variant="primary" onClick={() => setShow(true)}>
        <Button 
            variant="outline-light"
            className='trailer-btn'>
            <AiFillVideoCamera color = "red"/>
            <span>예고편 보기</span>
        </Button>
        
    </p>

  <Modal
    show={show}
    onHide={() => setShow(false)}
    dialogClassName="modal-90w"
    aria-labelledby="example-custom-modal-styling-title"
  >
    <Modal.Header closeButton>

    </Modal.Header >
    <Modal.Body>
        <YouTube 
            videoId={official?.key || item.results[0].key} 
            opts={opts} 
            onReady={_onReady} 
        />
    </Modal.Body>
  </Modal>
  </div>

  
  )
}

export default Trailer