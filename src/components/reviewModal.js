import React from 'react';

document.addEventListener('DOMContentLoaded', function () {
  addListeners();
  setRating(); //based on value inside the div
});

function addListeners() {
  var stars = document.querySelectorAll('.star');
  [].forEach.call(stars, function (star, index) {
    star.addEventListener(
      'click',
      function (idx) {
        console.log('adding rating on', index);
        document.querySelector('.stars').setAttribute('data-rating', idx + 1);
        console.log('Rating is now', idx + 1);
        setRating();
      }.bind(window, index)
    );
  });
}

function setRating() {
   
  var stars = document.querySelectorAll('.star');
  
  var rating = parseInt(
    document.querySelector('.stars')?.getAttribute('data-rating')
  );
  [].forEach.call(stars, function (star, index) {
    if (rating > index) {
      star.classList.add('rated');
    //   console.log('added rated on', index);
    } else {
      star.classList.remove('rated');
    //   console.log('removed rated on', index);
    }
  });
}

function ReviewModal(props) {
    const {index,setIndex, setClient, setComment,setDate,setRating,setLocation}= props
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="false"
      focus="true"
      data-backdrop="false"

      //   data-backdrop="false
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              New Review
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">
                  Customer's Name:
                </label>
                <input type="text" class="form-control" id="recipient-name" onChange={(event)=>setClient(event.target.value)} />
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">
                 Location:
                </label>
                <input type="text" class="form-control" id="recipient-name" onChange={(event)=>setLocation(event.target.value)}/>
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">
                  Comments:
                </label>
                <textarea class="form-control" id="message-text" onChange={(event)=>setComment(event.target.value)}/>
              </div>
              <div class="stars" data-rating="3">
                <span class="star" value={1} onClick={(event)=>setRating(event.target.value)} >&nbsp;</span>
                <span class="star" value={2} onClick={(event)=>setRating(event.target.value)}>&nbsp;</span>
                <span class="star" value={3} onClick={(event)=>setRating(event.target.value)}>&nbsp;</span>
                <span class="star" value={4} onClick={(event)=>setRating(event.target.value)}>&nbsp;</span>
                <span class="star" value={5} onClick={(event)=>setRating(event.target.value)}>&nbsp;</span>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" onClick={()=>{setIndex(index++) ; console.log(index)}}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReviewModal;
