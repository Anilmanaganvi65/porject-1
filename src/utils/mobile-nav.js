const mobilenav = () => {
    const headerBtn = document.getElementById('bars')
    const mobilenav = document.querySelector('.mobile-nav');
    const links = document.getElementById('mob-not');




    headerBtn.onclick = function () {
        headerBtn.classList.toggle('mob-active');
        mobilenav.classList.toggle('mob-active');
    }
}
export default mobilenav;