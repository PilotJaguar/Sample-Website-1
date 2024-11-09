const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelector('.active-btn');
            if (currentBtn) {
                currentBtn.classList.remove('active-btn');
            }
            this.classList.add('active-btn');
        });
    }

    // Sections active 
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // Remove selected from other buttons
            sectBtn.forEach((btn) => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            // Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            // Show the target section
            const element = document.getElementById(id);
            if (element) {
                element.classList.add('active');
            }
        }
    });
    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',()=>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })

}

pageTransitions();