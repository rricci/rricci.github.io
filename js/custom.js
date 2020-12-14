function showModal(modalId, imgSrc) {
    const modal = document.getElementById(modalId);
    const closeButton = document.getElementsByClassName('close')[0];

    if (modal.style.display !== 'block') {
        const img = modal.getElementsByClassName('modal-content')[0];
        img.src = imgSrc;
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';
        modal.style.display = 'block';
    }

    console.log('touchEvent')
    modal.onclick = () => hideModal(modal);
    modal.ontouchend = () => hideModal(modal);
    closeButton.onclick = () => hideModal(modal);
    closeButton.ontouchend = () => hideModal(modal);
}

function hideModal(modal) {
    console.log('hide')
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    modal.style.display = 'none';
}
