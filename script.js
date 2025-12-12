const time = document.querySelector('.time')
const weekday = document.querySelector('.weekday')
const day = document.querySelector('.day')
const month = document.querySelector('.month')
const year = document.querySelector('.year')
const b = document.querySelector('.b')
const date2 = document.querySelector('.date')
const weekdays = ["Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const body = document.querySelector('body');
let bStatus = 0;
const bg = document.querySelector('.bg button');
const full = document.querySelector('.full button');
b.addEventListener('click', () => {
    bStatus = bStatus === 0 ? 1 : 0;
})

function applyTheme() {
    if(isDark)
    {
        bg.innerHTML = '<img src="./images/fog-lamp-on.png" class="img">';
        full.innerHTML = '<img src="./images/full.png" class="img-2">';
        body.style.backgroundColor = '#222222';
        date2.style.color = '#F5E7C6';
        bg.style.backgroundColor = '#222222';
        full.style.backgroundColor = '#222222';
        document.querySelector('.img').style.filter = 'brightness(0) saturate(100%) invert(90%) sepia(20%) saturate(500%) hue-rotate(10deg) brightness(105%)';
        document.querySelector('.img-2').style.filter = 'brightness(0) saturate(100%) invert(90%) sepia(20%) saturate(500%) hue-rotate(10deg) brightness(105%)';
    }
    else
    {   
        bg.innerHTML = '<img src="./images/fog-lamp.png" class="img" alt=""> ';
        full.innerHTML = '<img src="./images/full.png" alt="">';
        body.style.backgroundColor = '#F5E7C6';
        date2.style.color = '#222222';
        bg.style.backgroundColor = '#F5E7C6';
        full.style.backgroundColor = '#F5E7C6';
        b.addEventListener("mouseenter", () => {
            b.style.border = '2px solid #222222';
        })
        b.addEventListener("mouseleave", () => {
            b.style.border = 'none';
        })
    }
}

let isDark = true;
applyTheme();
bg.addEventListener("click", () => {
    isDark = !isDark;
    applyTheme();
})
full.addEventListener("click", () => {
    if(!document.fullscreenElement)
    {
        document.documentElement.requestFullscreen();
    }
    else
    {
        document.exitFullscreen();
    }
})

function updateClock()
{
    let date = new Date();
    if (bStatus === 0) {
        const t = date.toLocaleTimeString("en-GB", { hour12: false });
        time.innerHTML = t;
        b.innerHTML = "12-Hour"
        b.style.backgroundColor = '#7ADAA5';
    }
    else {
        const t = date.toLocaleTimeString("en-US", { hour12: true });
        const [clock, ampm] = t.split(" ");
        let [hh, mm, ss] = clock.split(":");
        hh = hh.padStart(2, "0");
        time.innerHTML = `${hh}:${mm}:${ss} <span class="ampm">${ampm}</span>`;
        const ampmSpan = document.querySelector('.ampm');
        if (ampmSpan) {
            ampmSpan.style.color = isDark ? '#F5E7C6': '#222222';
        }
        b.innerHTML = "24-Hour"
        b.style.backgroundColor = '#B4E50D';
    }
    weekday.innerHTML = weekdays[date.getDay()];
    day.innerHTML = date.getDate();
    month.innerHTML = months[date.getMonth()];
    year.innerHTML = date.getFullYear();
}
updateClock();
setInterval(updateClock, 1000)
