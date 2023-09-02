const mobilenav = () => {
    const headerBtn = document.getElementById('bars')
    const mobilenav = document.querySelector('.mobile-nav');
    const links = document.getElementById('mob-not');




    headerBtn.onclick = function () {
        headerBtn.classList.toggle('mob-active');
        mobilenav.classList.toggle('mob-active');
    }
    const darkTheme =() => {
        const ThmemeBtn =document.getElementById('theme');
        ThmemeBtn.addEventListener('click',
        function anil(){
            document.body.style.overflowY="hidden";
            mobilenav.style.display="none";
        }
        )
    }
}
export default mobilenav;


