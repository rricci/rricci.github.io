function showModal(modalId, imgSrc) {
    const modal = document.getElementById(modalId);
    const closeButton = document.getElementsByClassName('close')[0];
    const touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

    if (modal.style.display !== 'block') {
        const img = modal.getElementsByClassName('modal-content')[0];
        img.src = imgSrc;
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';
        modal.style.display = 'block';
    }

    console.log('touchEvent', touchEvent)
    if (touchEvent === 'click') {
        modal.onclick = () => hideModal(modal);
        closeButton.onclick = () => hideModal(modal);
    } else {
        modal.ontouchstart = () => hideModal(modal);
        closeButton.ontouchstart = () => hideModal(modal);
    }
}

function hideModal(modal) {
    console.log('hide')
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    modal.style.display = 'none';
}
