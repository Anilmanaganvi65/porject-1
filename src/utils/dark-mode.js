const darkmode = () => {
    const themebtn = document.querySelectorAll('#theme');

    //state
    const themee = localStorage.getItem('themee');

    //on mount
    themee && document.body.classList.add(themee);

    //modifiers
    const handlethemetoggle = () =>{
        document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('themee', 'dark-mode');
            }
            else {
                localStorage.removeItem('themee');
                document.body.removeAttribute('class');
            }
    };
    
    
    //evnts
    themebtn.forEach(btn => {
        btn.addEventListener('click', handlethemetoggle )
    });
    
};

export default darkmode;
