function onSubmitForm(e) {
    e.preventDefault();
    const modal = document.getElementById('modal');

    modal.setAttribute('open', 'true'); 
    modal.classList.add('comeFromDown');

    setTimeout(() => {
        modal.classList.remove('comeFromDown');
        modal.classList.add('comeFromUp');
    }, 1500);

    setTimeout(() => {
        modal.removeAttribute('open');
        modal.classList.remove('comeFromUp');
    }, 2000);
}