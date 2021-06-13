document.querySelector('.chatContainer__button')?.addEventListener('click', () => {
    document.querySelector('.chatContainer__popUp')?.classList.toggle('g_hidden');

    const outSideClick = (e) => {
        if (e.target !== document.querySelector('.chatContainer__button')) {
            document.querySelector('.chatContainer__popUp')?.classList.add('g_hidden');
        }
        document.removeEventListener('click', outSideClick, true);
    };

    document.addEventListener('click', outSideClick, true);
});