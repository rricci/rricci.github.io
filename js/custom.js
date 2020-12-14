function showModal(modalId, imgSrc) {

    // Get the modal
    const modal = document.getElementById(modalId);

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName('close')[0];

    // When the user clicks on the button, open the modal
    if (modal.style.display !== 'block') {
        const img = modal.getElementsByClassName('modal-content')[0];
        img.src = imgSrc;
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';
        modal.style.display = 'block';
    }

    // When the user clicks on <span> (x), close the modal
    span.onmousedown = function () {
        hideModal(modal);
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onmousedown = function (event) {
        if (event.target === modal) {
            hideModal(modal);
        }
    }
}

function hideModal(modal) {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    modal.style.display = 'none';
}
